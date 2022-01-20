; Copyright (c)  Harris Geospatial Solutions, Inc. All
;       rights reserved. Unauthorized reproduction is prohibited.

;----------------------------------------------------------------------------
function read_csv_fieldnames, fieldCount

  compile_opt idl2, hidden
  
  digits_str = STRTRIM(STRING(STRLEN(STRTRIM(STRING(fieldCount),2))),2)
  fstr = '(i' + digits_str + '.' + digits_str + ')'
  fieldNames   = 'field' + STRING(LINDGEN(fieldCount)+1, FORMAT=fstr)
  
  return, fieldNames
end


;----------------------------------------------------------------------------
pro read_csv_convertdata, pData, COUNT=count, HEADER=header, $
  MISSING_VALUE=missingValue, NUM_RECORDS=numRecordsIn, $
  TYPES=typesIn

  compile_opt idl2, hidden
  ON_ERROR, 2

  count = N_ELEMENTS(*pData[0])
  nColumns = N_ELEMENTS(pData)

  ; Attempt to determine the data types for each field.
  types = BYTARR(nColumns)
  if (ISA(typesIn)) then begin
    for i=0,typesIn.length-1 do begin
      case (typesIn[i].ToUpper()) of
        'BYTE': types[i] = 1
        'INT': types[i] = 2
        'LONG': types[i] = 3
        'FLOAT': types[i] = 4
        'DOUBLE': types[i] = 5
        'UINT': types[i] = 12
        'ULONG': types[i] = 13
        'LONG64': types[i] = 14
        'ULONG64': types[i] = 15
        'STRING': types[i] = 7
        'DATE': types[i] = 7
        'TIME': types[i] = 7
        'DATETIME': types[i] = 7
        '': ; automatically determine
        else: MESSAGE, 'Unknown type string: "' + typesIn[i] + '"', /NONAME
      endcase
    endfor
  endif

  ; Attempt to determine the data types for each field.
  for j=0,nColumns-1 do begin
  
    if (types[j] ne 0) then continue
  
    ; Use the first and last 100 items to check the type.
    subdata = [(*pData[j])[1:(100 < (count-1))], (*pData[j])[(count-100) > 1:*]]
    subdata = subdata[WHERE(subdata ne '', /NULL)]
    if (~ISA(subdata)) then continue
    subdata = STRUPCASE(subdata)
  
    ON_IOERROR, skip1
  
    number = '^[+-]?[0-9]*[.]?[0-9]*[DdEd]?[+-]?[0-9]*$'
    ; Hack: Filter out NaN or -NaN values.
    subdata = subdata[WHERE(subdata ne 'NAN' and subdata ne '-NAN', /NULL)]
    if (~ISA(subdata)) then continue
    if (MIN(STREGEX(subdata, number, /BOOLEAN)) eq 0) then continue
  
    tmpDouble = DOUBLE(subdata)
    isDecimal = MAX(STREGEX(subdata, '[.DdEe]', /BOOLEAN))
  
    if (isDecimal) then begin
      types[j] = 5 ; double
    endif else begin
      tmpLong64 = LONG64(subdata)
      ; Make sure our integers are not too huge
      if (ARRAY_EQUAL(tmpLong64, tmpDouble)) then begin
        ; Now see if our integers can fit into either a long or a long64
        tmpLong = LONG(subdata)
        types[j] = ARRAY_EQUAL(tmpLong, tmpLong64) ? 3 : 14
      endif else begin
        types[j] = 5 ; double
      endelse
    endelse
  
    skip1:
    ON_IOERROR, null
  
  endfor
  
  void = CHECK_MATH()
  
  ; Attempt to determine if the first line is a header line.
  isFirstLineText = 0
  for j=0,nColumns-1 do begin
    if (types[j] ne 0) then begin
      ON_IOERROR, skip2
      ; If we fail to convert the first item to the type for that column,
      ; then assume that it is a "string" column header.
      result = FIX((*pData[j])[0], TYPE=types[j])
      continue
      skip2:
      ON_IOERROR, null
      isFirstLineText = 1
      break
    endif
  endfor
  
  nheader = isFirstLineText ? 1 : 0
  
  fieldNames = Read_CSV_Fieldnames(nColumns)
  
  if (nheader gt 0) then begin
    count -= nheader
    header = STRARR(nColumns, nheader)
    for j=0,nColumns-1 do begin
      header[j,*] = (*pData[j])[0:nheader-1]
    endfor
  endif else begin
    ; If NUM_RECORDS was specified, we needed to read one extra record,
    ; in case there was a header. Since there was no header, get rid
    ; of the extra record.
    if (N_Elements(numRecordsIn)) then count--
  endelse
  
  hasMissingValue = N_Elements(missingValue) eq 1 && $
    missingValue[0] ne 0
  
  ; Do the actual type conversion.
  for j=0,nColumns-1 do begin
  
    *pData[j] = (*pData[j])[nheader:nheader+count-1]
  
    if (types[j] ne 0) then begin
  
      if (hasMissingValue) then begin
        iMiss = WHERE(*pData[j] eq '', nmiss)
      endif
  
      ON_IOERROR, skip3
      ; Do the actual type conversion.
      *pData[j] = FIX(*pData[j], TYPE=types[j])
  
      if (hasMissingValue && nmiss gt 0) then begin
        (*pData[j])[iMiss] = missingValue[0]
      endif
      skip3:
      ON_IOERROR, null
    endif
  endfor
end


;----------------------------------------------------------------------------
;+
; :Description:
;    The READ_CSV function reads data from a "comma-separated value"
;    (comma-delimited) text file or URL into an IDL structure variable.
;
;    This routine handles CSV files consisting of an optional line of column
;    headers, followed by columnar data, with commas separating each field.
;    Each row is assumed to be a new record.
;    
;    The READ_CSV routine will automatically return each column (or field)
;    in the correct IDL variable type using the following rules:
;    
;       * Long - All data within that column consists of integers,
;           all of which are smaller than the maximum 32-bit integer.
;       * Long64 - All data within that column consists of integers,
;           with at least one greater than the maximum 32-bit integer.
;       * Double - All data within that column consists of numbers, at least
;           one of which has either a decimal point or an exponent.
;       * String - All data which does not fit into one of the above types.
;       
;    This routine is written in the IDL language. Its source code can be
;    found in the file read_csv.pro in the lib subdirectory of the IDL
;    distribution. 
;
; :Syntax:
;    Result = READ_CSV( Filename
;      [, COUNT=variable] [, HEADER=variable] [, MISSING_VALUE=value]
;      [, NUM_RECORDS=value] [, RECORD_START=value]
;      [, N_TABLE_HEADER=value] [,TABLE_HEADER=variable]
;      )
;    
; :Params:
;    Filename
;      A string containing the name of a local CSV file or a
;      URL to a CSV file to read into an IDL variable.
;
; :Keywords:
;    COUNT
;      Set this keyword equal to a named variable that will contain the
;      number of records read.
;      
;    HEADER
;      Set this keyword equal to a named variable that will contain the
;      column headers as a vector of strings. If no header exists,
;      an empty scalar string is returned.
;      
;    MISSING_VALUE
;      Set this keyword equal to a value used to replace any missing
;      floating-point or integer data. The default value is 0.
;      
;    NUM_RECORDS
;      Set this keyword equal to the number of records to read.
;      The default is to read all records in the file.
;      
;    RECORD_START
;      Set this keyword equal to the index of the first record to read.
;      The default is the first record of the file (record 0).
;      
;    N_TABLE_HEADER    
;       Set this keyword to the number of lines to skip at the beginning of the file, 
;       not including the HEADER line. These extra lines may be retrieved by using the TABLE_HEADER keyword.
;       
;    TABLE_HEADER
;       Set this keyword to a named variable in which to return an array of strings 
;       containing the extra table headers at the beginning of the file, as specified by N_TABLE_HEADER.
;
;    TYPES
;       Set this keyword to a string array containing the IDL data types
;       for each column of data. By default IDL attempts to determine
;       the data type using the first and last 100 values in each column.
;
; :History:
;   Written, CT, VIS, Oct 2008
;   MP, VIS, Oct 2009: Added keywords N_TABLE_HEADER and TABLE_HEADER
;   CT, VIS, Aug 2013: Use code provided by Marcos Montes to better distinguish
;                      between strings and numbers.
;   CT, VIS, April 2015: Added TYPES keyword. Added support for URLs.
;-
function read_csv, Filename, $
  COUNT=count, $
  HEADER=header, $
  MISSING_VALUE=missingValue, $
  NUM_RECORDS=numRecordsIn, $
  RECORD_START=recordStart, $
  N_TABLE_HEADER=nTableHeader, $
  TABLE_HEADER=tableHeader, $
  TYPES=typesIn, $
  _EXTRA=_extra  ; needed for iOpen

  compile_opt idl2, hidden

  ON_ERROR, 2         ;Return on error

  CATCH, err
  if (err ne 0) then begin
    CATCH, /CANCEL
    if (N_ELEMENTS(lun) gt 0) then $
      FREE_LUN, lun
    if (MAX(PTR_VALID(pData)) eq 1) then $
      PTR_FREE, pData
    if (ISA(tmp_filename)) then $
      FILE_DELETE, tmp_filename, /QUIET
    MESSAGE, !ERROR_STATE.msg
  endif

  header = ''

  if (N_PARAMS() eq 0) then $
    MESSAGE, 'Incorrect number of arguments.'
  
  fname = filename

  ; Read from a URL.
  if (filename.StartsWith('http:', /FOLD_CASE) || $
    filename.StartsWith('https:', /FOLD_CASE) || $
    filename.StartsWith('ftps:', /FOLD_CASE) || $
    filename.StartsWith('ftp:', /FOLD_CASE)) then begin
    tmp_filename = 'temp' + (SYSTIME(1)).ToString() + '.csv'
    tmp_filename = FILEPATH(tmp_filename, /TMP)
    fname = WGET(filename, FILENAME=tmp_filename)
  endif else begin
    fname = filename[0]
  endelse

  ; Empty file
  if (FILE_TEST(fname, /ZERO_LENGTH)) then begin
    if (ISA(tmp_filename)) then $
      FILE_DELETE, tmp_filename, /QUIET
    return, 0
  endif

  ;Set appropriate dataStart, where dataStart includes column header.
  dataStart = keyword_set(nTableHeader) ? LONG64(nTableHeader) : 0
  
  OPENR, lun, fname, /GET_LUN

  if (dataStart gt 0) then begin
    tableHeader = STRARR(dataStart)
    READF, lun, tableHeader
    foreach t,tableHeader,i do begin
      t = t.Substring(t.startsWith('"') ? 1 : 0, t.endsWith('"') ? -2 : -1)
      tableHeader[i] = t
    endforeach
  endif else begin
    tableHeader = ''
  endelse
  
  str = ''
  READF, lun, str

  ; Skip any blank (whitespace only) lines after the header.
  ; The next good line will be stored in str.
  while (STRLEN(STRTRIM(str,2)) eq 0) do begin
    READF, lun, str
  endwhile
  
  FREE_LUN, lun
  
  ; We need to count the number of fields.
  ; First remove escaped quote characters, which look like "".
  str = STRJOIN(STRTOK(str, '""', /REGEX, /EXTRACT))
  ; Now remove quoted strings, which might contain bogus commas.
  str = STRJOIN(STRTOK(str,'"[^"]*"', /REGEX, /EXTRACT))
  ; Finally, count the number of commas.
  fieldCount = N_Elements(STRTOK(str, ',', /PRESERVE_NULL))

  fieldNames = Read_CSV_Fieldnames(fieldCount)

  template = { $
    version:         1.0, $
    dataStart:       dataStart, $  ; specified as a keyword below
    delimiter:       BYTE(','), $  ; comma-separated
    missingValue:    0, $
    commentSymbol:   '', $
    fieldCount:      fieldCount, $
    fieldTypes:      REPLICATE(7L, fieldCount), $
    fieldNames:      fieldNames, $
    fieldLocations:  LONARR(fieldCount), $  ; ignored for csv
    fieldGroups:     LINDGEN(fieldCount) $  ; ungrouped
  }

  if (N_Elements(numRecordsIn)) then $
    numRecords = numRecordsIn[0] + 1

  data = READ_ASCII(fname, /CSV, $
    COUNT=count, $
    DATA_START=dataStart, $
    NUM_RECORDS=numRecords, $
    RECORD_START=recordStart, $
    TEMPLATE=template)

  if (N_TAGS(data) eq 0) then $
    MESSAGE, 'File "' + filename + '" is not a valid CSV file.', /NONAME

  ; IDL-69821: Do not eliminate any columns if user has
  ; passed in TYPES and it matches the number of columns.
  nt = N_Elements(typesIn)
  eliminateColumns = (nt eq 0 || nt ne fieldCount)

  ; Eliminate empty columns and rows
  columnLen = LONARR(fieldCount)
  firstNonEmptyRow = count - 1
  lastNonEmptyRow = 0L

  for i=0L,fieldCount-1 do begin
    ; Remove extra whitespace
    data.(i) = STRTRIM(data.(i), 2)
    lengths = STRLEN(data.(i))
    good = WHERE(lengths gt 0, ngood)
    if (ngood gt 0) then begin
      firstNonEmptyRow = firstNonEmptyRow < MIN(good)
      lastNonEmptyRow = lastNonEmptyRow > MAX(good)
      columnLen[i] = MAX(lengths)
    endif
  endfor

  nColumns = eliminateColumns ? TOTAL(columnLen gt 0, /INTEGER) : fieldCount
  
  ; All of the fields were empty.
  if (nColumns eq 0) then begin
    if (ISA(tmp_filename)) then $
      FILE_DELETE, tmp_filename, /QUIET
    return, 0
  endif
  
  count = lastNonEmptyRow - firstNonEmptyRow + 1

  ; Convert each field to a pointer, for easier manipulation.
  j = 0L
  pData = PTRARR(nColumns)
  for i=0L,fieldCount-1 do begin
    if (eliminateColumns && columnLen[i] eq 0) then continue
    columnLen[j] = columnLen[i]
    pData[j] = PTR_NEW((data.(i))[firstNonEmptyRow:lastNonEmptyRow])
    j++
  endfor

  ; Recompute the field names in case there were some empty ones.
  fieldNames = Read_CSV_Fieldnames(N_ELEMENTS(pData))
  
  ; Free up the storage.
  data = 0

  if (count gt 1) then begin
    READ_CSV_CONVERTDATA, pData, COUNT=count, HEADER=header, $
      MISSING_VALUE=missingValue, NUM_RECORDS=numRecordsIn, $
      TYPES=typesIn
  endif
  
  ; Create the final anonymous structure.
  data = READ_ASCII_CREATE_STRUCT(fieldNames, pData)
  
  PTR_FREE, pData
  if (ISA(tmp_filename)) then $
    FILE_DELETE, tmp_filename, /QUIET

  return, data
end

