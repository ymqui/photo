pro find_spec,name,locid=locid,pid=pid
    pid = '2306isbird' &locid = 'isisis'
    if n_elements(locid) eq 0 then locid = 'arb'
    if n_elements(pid) ne 0 then pid = '["'+pid+'",' else pid = '['
    if n_elements(name) eq 0 then begin
       plot_lifer & return
       name = strtrim(dm_dialog_input('name:',xsize=140,cancel=cancel),2)
       if keyword_set(cancel) then return
       name = strsplit(name,',;',/extract)
    endif
    name = strtrim(name,2)
    if strlen(name[0]) eq 0 then return
    line = find_spec_pos(name,after=after,latin=latin,existed=existed,chinese=chinese,family=family)
    if n_elements(name) gt 1 then begin
       ind   = sort(line)
       line  = line[ind]
       name  = name[ind]
       after = after[ind]
       latin = latin[ind]
       chinese = chinese[ind]
       existed = existed[ind]
    endif
    tmp = where(existed eq 0,cnt)
    if cnt gt 0 then begin
       caldat,systime(/julian),m,d,year
       year = strmid(dm_to_string(year),2)
    endif
    for i=0,n_elements(name)-1 do begin
        print,reform_name(name[i])+': '+string(9b)+latin[i]+strjoin(strarr(1>(30-strlen(latin[i]))),' ')+string(9b),chinese[i]+string(9b),line[i],(existed[i] eq 1)?' (already in the list)':' (after '+after[i]+(['','',', already in ibn_extra'])[0>(existed[i])<2]+  ')'
        if (~existed[i]) and (strlen(chinese[i]) gt 0) then begin
           print,' '
           print,'//  ["'+year+'-00-00T00:00","'+reform_name(family[i],/family)+'","'+reform_name(name[i])+'","'+chinese[i]+'","'+latin[i]+'",'+pid+'],["'+locid+'",""],"'+reform_name(name[i],/ebird)+'"],'
           print,' '
        endif
    endfor
    if n_elements(py_mis) gt 1 then print,'Missing Chinese in the chart: ', py_mis[1:*]
end

function reform_name,name,latin=latin,gray=gray,family=family,ebird=ebird
    if keyword_set(gray) then begin ;gray
       newname = strtrim(name,2)
       tmp = where(stregex(newname,'gray',/boolean,/fold_case),ncount)
       for i=0,ncount-1 do begin
           tmp1 = newname[tmp[i]]
           pos = strpos(newname[tmp[i]],'gray')
           strput,tmp1,(['Grey','grey'])[pos ge 0],strpos(newname[tmp[i]],(['Gray','gray'])[pos ge 0])
           newname[tmp[i]] = tmp1
       endfor
    endif else if keyword_set(family) then begin  ;family
       newname = strmid(strupcase(strtrim(name,2))+'                     ',0,8)
    endif else if keyword_set(ebird) then begin ;ebird acronym
       tmp = strsplit(strlowcase(name),' -',/extract,count=ncount)
       newname = ''
       for i=0,ncount-1 do begin
           if i eq 3 then i = ncount-1
           newname = newname+strmid(tmp[i],0,([([6,3,2,1])[0>(ncount-1)<3],([3,1,1])[0>(ncount-2)<2],([3,1])[0>(ncount-3)<1],([3])[0>(ncount-4)<0]])[i<3])
       endfor
    endif else begin ;name and latin
       tmp = strsplit(strlowcase(name),' ',/extract,count=ncount)
       newname = strupcase(strmid(tmp[0],0,1))+strmid(tmp[0],1)+([' ',''])[ncount eq 1]
       for i=1,ncount-1 do begin
           if keyword_set(latin) then newname = newname+tmp[i]+([' ',''])[i eq ncount-1] $
           else newname = newname+strupcase(strmid(tmp[i],0,1))+strmid(tmp[i],1)+([' ',''])[i eq ncount-1]
       endfor
    endelse
    return,newname
end

function get_filename,excel=excel,chinese=chinese,ibn=ibn,order=order,birdname=birdname,namecomp=namecomp,locs=locs,movie=movie,tmpdir=tmpdir,totbird=totbird,country=country,extra=extra
    ;if keyword_set(ibn)      then return,'https://ymqui.github.io/photo/info/index_birds_names.js'
    if keyword_set(ibn)      then return,'C:\Users\qiuym\Desktop\index_birds_names.js'
    if keyword_set(excel)    then return,'C:\Users\qiuym\Documents\Yiming\tmp\master_ioc_list_v13.1.csv'
    if keyword_set(chinese)  then return,'C:\Users\qiuym\Documents\Yiming\tmp\Multiling_IOC_V13.1.csv'
    ;if keyword_set(order)    then return,'https://ymqui.github.io/photo/info/index_birds_orders.js'
    if keyword_set(order)    then return,'C:\Users\qiuym\Desktop\index_birds_orders.js'
    if keyword_set(namecomp) then return,'https://ymqui.github.io/photo/info/ibn_namecompare.txt'
    ;if keyword_set(namecomp) then return,'C:\Users\qiuym\Documents\Yiming\tmp\ibn_namecompare.txt'
    if keyword_set(movie)    then return,'C:\Users\qiuym\Desktop\lifer.mp4'
    if keyword_set(birdname) then return,read_namecomp()
    if keyword_set(totbird)  then return,'https://www.worldbirdnames.org/new/updates/'
    if keyword_set(country)  then return,'https://en.wikipedia.org/wiki/List_of_sovereign_states'
    if keyword_set(tmpdir)   then return,'C:\Users\qiuym\Documents\Yiming\tmp\'
    if keyword_set(extra)    then return,'https://ymqui.github.io/photo/info/ibn_extra.js'
    ;if keyword_set(extra)    then return,'C:\Users\qiuym\Documents\Yiming\tmp\ibn_extra.js'
    return,'C:\Users\qiuym\Desktop\index_birds_names1.js'  ;for writing
end

function find_spec_pos,name,print=print,after=after,latin=latin,existed=existed,chinese=chinese,family=family
    if n_elements(name) eq 0 then begin
       name = strtrim(dm_dialog_input('name:',xsize=140),2)
       name = strsplit(name,',',/extract)
    endif
    name1 = reform_name(name,/gray)
    if strlen(name1[0]) eq 0 then return,-1
    line = lonarr(n_elements(name1))-1
    read_excel,birds=birds,latin=alllatin,family=allfamily
    if arg_present(chinese) then begin
       read_excel,birds=birds1,chinese=allchinese
       birds1 = strlowcase(birds1)
    endif
    birds = strlowcase(birds)
    name1 = strlowcase(name1)
    if arg_present(after) or arg_present(existed) then begin
       read_ibn,bird=list,extra=extra
       list = reform_name(list,/gray)
       list_num = find_spec_pos(list)
       after = strarr(n_elements(name1))
       existed = bytarr(n_elements(name1))
    endif
    if arg_present(latin) then latin = strarr(n_elements(name1))
    if arg_present(chinese) then chinese = strarr(n_elements(name1))
    if arg_present(family) then family = strarr(n_elements(name1))
    for i=0,n_elements(name)-1 do begin
        ind = where(birds eq name1[i],count)
        if count ne 0 then line[i] = ind[count-1]
        if arg_present(after) then after[i] = list[(where(list_num lt line[i]))[-1]]
        if arg_present(existed) then begin
           tmp = where(stregex(list,name1[i],/fold_case,/boolean),tmpcnt)
           existed[i] = (tmpcnt eq 1)
           if (tmpcnt ne 1) then begin
              tmp = where(stregex(extra,name1[i],/fold_case,/boolean),tmpcnt)
              existed[i] = (tmpcnt eq 1)*2
           endif
        endif
        if arg_present(latin) then latin[i] = alllatin[line[i]]
        if arg_present(family) then family[i] = allfamily[line[i]]
        if arg_present(chinese) then begin
           ind1 = where(birds1 eq name1[i],count)
           if count eq 1 then chinese[i] = allchinese[ind1[0]]
        endif
        if keyword_set(print) and (count eq 0) then begin
           print,name[i],line[i] & wait,1
        endif
    endfor
    return,line
end

;keyword n_spec for number of species, may include extinct ones
pro read_excel,birds=birds,header=header,latin=latin,data=data,family=family,n_spec=n_spec,chinese=chinese
    if arg_present(chinese) then begin
       file = get_filename(/chinese)
       data = READ_CSV(file, HEADER=SedHeader,N_TABLE_HEADER=1, TABLE_HEADER=header)
       header = strsplit(header,',',/extract)
       ind0 = where(header eq 'English')
       ind1 = where(header eq 'Chinese')
       birds = strtrim([data.(ind0[0])],2)
       chinese = strtrim([data.(ind1[0])],2)
    endif else begin
       file   = get_filename(/excel)  
       data   = READ_CSV(file, HEADER=SedHeader,N_TABLE_HEADER=4, TABLE_HEADER=header)
       header = header[-1]
       header = strsplit(header,',',/extract)
       ind0 = where(header eq 'Species (English)')
       ind1 = where(header eq 'Order')
       ind2 = where(header eq 'Family (Scientific)')
       ind3 = where(header eq 'Genus')
       ind4 = where(header eq 'Species (Scientific)')
       if arg_present(birds) or arg_present(n_spec) then begin
          if arg_present(n_spec) then begin
             birds = strtrim([data.(ind0[0])],2)
             ind5  = where((birds ne '0') and (birds ne ''),n_spec)
          endif
          birds = strtrim([data.(ind1[0]),data.(ind2[0])],2)
          ind5  = where((birds ne '0') and (birds ne ''),count)
          if count ne 0 then birds = birds[ind5]
          birds = [strtrim(data.(ind0[0]),2),birds]
       endif
    endelse
    if n_elements(birds) ne 0 then begin
       name2 = get_filename(/birdname) ;list of names need to changed
       for i=0,n_elements(name2[0,*])-1 do begin
           ind = where(strmatch(birds,name2[1,i],/fold_case),count2)
           if count2 eq 1 then birds[ind[0]] = name2[0,i]
       endfor
       birds = reform_name(birds,/gray)
    endif
    if arg_present(family) then begin
       family = strupcase(data.(ind2[0]))
       ind5 = where(family eq '0',cnt) ;missing fields are assigned 0 value
       if cnt ne 0 then family[ind5] = ''
       ind5 = where(strlen(family) gt 0,cnt)
       for i=0,cnt-2 do begin
           if ind5[i]+1 lt ind5[i+1] then family[(ind5[i]+1):(ind5[i+1]-1)] = family[ind5[i]]
       endfor
       if ind5[-1]+1 lt n_elements(data.(ind0[0])) then family[(ind5[-1]+1):*] = family[ind5[-1]]
    endif
    if arg_present(latin) then begin
       genus = strtrim(data.(ind3[0]),2)
       ind5 = where(genus eq '0',cnt) ;missing fields are assigned 0 value
       if cnt ne 0 then genus[ind5] = ''
       ind5 = where(strlen(genus) gt 0,cnt)
       for i=0,cnt-2 do begin
           if ind5[i]+1 lt ind5[i+1] then genus[(ind5[i]+1):(ind5[i+1]-1)] = genus[ind5[i]]
       endfor
       if ind5[-1]+1 lt n_elements(data.(ind0[0])) then genus[(ind5[-1]+1):*] = genus[ind5[-1]]
       latin = [genus+' '+data.(ind4[0])]
    endif
end

;keyword:
;  bird: string array, return all entry birds
;  line: string array, return all bird lines
;  all:  if set, return all lines in ibn file in line keyword
;  year: float array, return lifer years
;info format:
;//info[0]   - locid
;//info[1]   - "5/2022,S111311543","5/2022","S111311543","", or optional if info[2] is not empty string. If mon/year is absent, it will be constructed from the file name.
;//info[2,3] - Eng & Chinese info attached before the locid description, a comma will be added at the end.
;//info[4,5] - Eng & Chinese info attached after the locid description, no extra characters will be added.
pro read_ibn,bird=bird,latin=latin,line=line,all=all,year=year,family=family,chinese=chinese,extra=extra
    file = get_filename(/ibn)
    
    if stregex(file,'http',/boolean) then begin
       ourl = obj_new('IDLnetURL')
       line = ourl->get(url=file,/string_array)
       obj_destroy, ourl
    endif else begin
       nlines = file_lines(file)
       line = strarr(nlines)
       openr,unit,file,/get_lun,error=error
       if error ne 0 then return
       readf,unit,line
       free_lun,unit
    endelse
    if arg_present(extra) then begin
       file = get_filename(/extra)
       if stregex(file,'http',/boolean) then begin
          ourl = obj_new('IDLnetURL')
          extra = ourl->get(url=file,/string_array)
          obj_destroy, ourl
       endif else begin
          nlines = file_lines(file)
          extra = strarr(nlines)
          openr,unit,file,/get_lun,error=error
          if error ne 0 then return
          readf,unit,extra
          free_lun,unit
       endelse
    endif
    if keyword_set(all) then return
    ind  = where(stregex(line,'"[0-9]{2}-[0-9]{2}-[0-9]{2}T[0-9]{2}',/boolean,/fold_case),count)
    line = line[ind]
    bird = strarr(count) & latin = strarr(count) & family = strarr(count) & chinese = strarr(count)
    p0   = (strsplit(line[0],'"'))[3]
    for i=0,count-1 do begin
        tmp = strsplit(strmid(line[i],p0),'"',/extract)
        family[i]  = tmp[0]
        bird[i]    = tmp[2]
        chinese[i] = tmp[4]
        latin[i]   = reform_name(tmp[6],/latin)
    endfor
    tmp  = stregex(line,'^ +\["([0-9]{2})-([0-9]{2})-([0-9]{2})',/extract,/sub) ;actual lifers
    ind  = where(strlen(tmp[1,*]) eq 2,cnt)
    year = 2000.+reform(fix(tmp[1,ind]))
    print,dm_to_string(cnt)+'/'+dm_to_string(count)+' lifers.'
end

function read_namecomp
    file = get_filename(/namecomp)
    line = '' & names = ['','']
    if stregex(file,'http',/boolean) then begin
       ourl = obj_new('IDLnetURL')
       line = ourl->get(url=file,/string_array)
       obj_destroy, ourl
       for i=0,n_elements(line)-1 do begin
           if strlen(strtrim(line[i],2)) ne 0 then names = [[names],[strtrim(strsplit(line[i],',',/extract),2)]]
       endfor
    endif else begin
       openr,unit,file,/get_lun,error=error
       if error ne 0 then return,''
       while (~eof(unit)) do begin
          readf,unit,line
          if strlen(strtrim(line,2)) ne 0 then names = [[names],[strtrim(strsplit(line,',',/extract),2)]]
       endwhile
       free_lun,unit
    endelse
    return,names[*,1:*]
end

pro read_order,family=family,order=order,line=line,all=all
    file = get_filename(/order)
    if stregex(file,'http',/boolean) then begin
       ourl = obj_new('IDLnetURL')
       line = ourl->get(url=file,/string_array)
       obj_destroy, ourl
       nlines = n_elements(line)
    endif else begin
       nlines = file_lines(file)
       line = strarr(nlines)
       openr,unit,file,/get_lun,error=error
       if error ne 0 then return
       readf,unit,line
       free_lun,unit
    endelse
    ind0 = where(stregex(line,'var orders',/boolean))
    ind1 = where(stregex(line,'^ *var',/boolean))
    ind1 = ind1[where(ind1 gt ind0[0])]
    if keyword_set(all) then return
    order = '' & family = ''
    for i=ind0[0],ind1[0]-1 do begin
        if strlen(strtrim(line[i],2)) eq 0 then continue
        tmp1 = line[i]
        while stregex(tmp1,'(iformes|idae)',/fold_case,/boolean) do begin ;in case multiple family in one line
              tmp  = stregex(tmp1,'" *([a-z]+) *"',/fold_case,/extract,/sub)
              if stregex(tmp[0],'iformes',/boolean,/fold_case) then order = [order,tmp[1]] else family = [family,tmp[1]]
              tmp2 = strpos(tmp1,tmp[1])
              tmp1 = strmid(tmp1,0,tmp2)+strmid(tmp1,tmp2+strlen(tmp[1]))
        endwhile
    endfor
    if n_elements(family) gt 1 then family = family[1:*]
    if n_elements(order) gt 1 then order = order[1:*]
end

pro check_file,linenum=linenum
    current = systime(/sec)
    read_ibn,bird=bird,line=line,latin=latin,family=family,chinese=chinese
    if n_elements(bird) eq 0 then return
    print,'please wait...'
    ind0 = find_spec_pos(bird,print=~keyword_set(linenum))    
    tmp  = where(ind0 gt 0)
    tmp1 = sort(ind0[tmp])
    newline = line
    newline[tmp] = line[tmp[tmp1]]
    if keyword_set(linenum) then begin
       ind0[tmp] = ind0[tmp[tmp1]]
       strlength = strlen(dm_to_string(max(ind0)))
       openw,unit,get_filename(),/get_lun
       for i=0,n_elements(newline)-1 do printf,unit,dm_to_string(ind0[i],strlength=strlength)+newline[i]
       free_lun,unit
    endif else begin
       allgood = 1b
       for i=0,n_elements(newline)-1 do begin
           if newline[i] ne line[i] then begin
              print,line[i]+string(13b)+string(10b)+newline[i]+string(13b)+string(10b)+''
              allgood = 0b
           endif
       endfor
    endelse
    print,'checking order'
    check_order,allgood=allgood
    print,'checking latin'
    ibn = {list:temporary(bird),latin:temporary(latin),family:temporary(family),chinese:temporary(chinese)}
    check_latin,allgood=allgood,ibn=ibn
    print,'checking chinese name'
    check_chinese,allgood=allgood,ibn=ibn
    if keyword_set(allgood) then print,string(13b)+string(10b)+"There's no problem with the file."
    print,string(13b)+string(10b)+'Done in ',systime(/sec)-current,' secs.' 
end


pro check_order,ind_ord=ind_ord,ind_fam=ind_fam,allgood=allgood ;check if family and order are in correct order
    current = systime(/sec)
    read_order,family=family,order=order
    ind_fam = find_spec_pos([family,order])

    ind_ord = ind_fam[n_elements(family):*]
    ind_fam = ind_fam[0:n_elements(family)-1]
    
    newfam = family(sort(ind_fam))
    neword = order(sort(ind_ord))
    j = 0L
    for i=0,n_elements(family)-1 do if family[i] ne newfam[i] then print, family[i],newfam[i],stdio=(j++)
    for i=0,n_elements(order)-1 do if order[i] ne neword[i] then print,order[i],neword[i],stdio=(j++)
    if arg_present(allgood) then begin
       if j gt 0 then allgood = 0b
    endif else begin
       print,'done in ',systime(/sec)-current,' secs.'
       if j eq 0 then print,"There's no problem with the order."
    endelse
end

;check chinese names
pro check_chinese,allgood=allgood,ibn=ibn
    current = systime(/sec)
    read_excel,birds=birds1,chinese=chinese1
    read_excel,latin=latin2,birds=birds2
    if n_elements(ibn) eq 0 then read_ibn,bird=birds3,latin=latin3,chinese=chinese3 else begin
       birds3 = ibn.list & latin3 = ibn.latin & chinese3 = ibn.chinese
    endelse
    
    n_ibn = n_elements(birds3)
    
    ;read extra
    read_ibn,/all,extra=extra
    for i=0,n_elements(extra)-1 do begin
        tmp = strsplit(extra[i],'"',/extract,count=count1)
        birds3 = [birds3,tmp[5]]
        latin3 = [latin3,tmp[9]]
        chinese3 = [chinese3,tmp[7]]
    endfor
    
    j = 0
    for i=0,n_elements(birds3)-1 do begin
        ind = where(latin2 eq latin3[i],cnt)
        if cnt gt 0 then begin
           ind = where(birds1 eq birds2[ind[0]],cnt) 
        endif
        if cnt eq 0 then begin
           print,"Can't find the Chinese name for "+birds3[i]+(['.',' in ibn_extra.'])[i ge n_ibn]
           continue
        endif else begin
           if chinese1[ind[0]] ne chinese3[i] then begin
              print,birds3[i],'  ',chinese3[i],'  ',chinese1[ind[0]], (['','    in ibn_extra'])[i ge n_ibn]
              j = j+1
           endif
        endelse
    endfor
    
    if arg_present(allgood) then begin
       if j gt 0 then allgood = 0b
    endif else begin
       print,'done in ',systime(/sec)-current,' secs.'
       if j eq 0 then print,"There's no problem with the order."
    endelse
end

pro check_latin,allgood=allgood,ibn=ibn
    current = systime(/sec)
    read_excel,birds=birds,latin=latin,family=family
    if n_elements(ibn) eq 0 then read_ibn,bird=list,latin=latin1,family=family1 else begin
       list = ibn.list & latin1 = ibn.latin & family1 = ibn.family
    endelse
    list_num = find_spec_pos(list)
    j = 0L
    for i=0,n_elements(list)-1 do begin
        if latin[list_num[i]] ne latin1[i] then print,list[i],': old latin="'+latin1[i]+'" new latin="'+latin[list_num[i]]+'"',stdio=(j++)
    endfor
    for i=0,n_elements(list)-1 do begin
        if strmid(family[list_num[i]],0,8) ne strtrim(family1[i],2) then print,list[i],': old family="'+family1[i]+'" new family="'+family[list_num[i]]+'"',stdio=(j++)
    endfor
    if arg_present(allgood) then begin
       if j gt 0 then allgood = 0b
    endif else begin
       print,'done in ',systime(/sec)-current,' secs.'
       if j eq 0 then print,"There's no problem with the latin names."
    endelse
end

pro check_hanzi,name,py_wch=py_wch,py_cnt=py_cnt,py_mis=py_mis
    tmp1 = I18N_MULTIBYTETOWIDECHAR(name)
    for k = 0,n_elements(tmp1)-1 do begin
        ind2 = where(py_wch eq tmp1[k],count2)
        if count2 eq 0 then py_mis = [py_mis,I18N_widechartomultibyte(tmp1[k])] $ 
        else if arg_present(py_cnt) then py_cnt[ind2[0]] =  py_cnt[ind2[0]]+1
    endfor
end

pro check_pinyin,allgood=allgood  ;search for pinyin that is never used
    return
    read_order,pinyin=pinyin,/all
    py_wch = I18N_MULTIBYTETOWIDECHAR(strjoin(pinyin))
    py_cnt = lonarr(n_elements(pinyin))
    py_mis = ''
    read_ibn,line=line,/all,extra=extra
    line = [line,extra]
    ind = where(stregex(line,'birds\.push',/boolean),count)
    for i=0,count-1 do begin
        tmp = strsplit(line[ind[i]],'"',/extract,count=count1)
        check_hanzi,tmp[7],py_wch=py_wch,py_cnt=py_cnt,py_mis=py_mis
    endfor
    ind = where(py_cnt eq 0,count)
    if count ne 0 then begin
       print,'These '+dm_to_string(count)+' characters have not been used at all:'
       print,pinyin[ind]
    endif
    if n_elements(py_mis) gt 1 then begin
       print,'These characters are missing in the chart:'
       print,py_mis[1:*]
       allgood = 0b
    endif
end

pro write_stat
    ncount = 0 & nbtot = 0 & ngtot = 0
    file = get_filename(/country)
    ourl = obj_new('IDLnetURL')
    line = ourl->get(url=file,/string_array)
    obj_destroy, ourl
    for i=0,n_elements(line)-1 do begin
        if stregex(line[i],'[0-9]+[^0-9]+member states',/boolean) then begin
           tmp = stregex(line[i],'([0-9]+)[^0-9]+member states.*([0-9]+)[^0-9]+observer states',/SUBEXPR,/EXTRACT)
           if n_elements(tmp) eq 3 then begin
              ncount = fix(tmp[1])+fix(tmp[2])
           endif else begin
              tmp = stregex(line[i],'([0-9]+)[^0-9]+member states',/SUBEXPR,/EXTRACT)
              ncount = fix(tmp[1])
           endelse
           break
        endif
    endfor
    file = get_filename(/totbird)
    ourl = obj_new('IDLnetURL')
    line = ourl->get(url=file,/string_array)
    obj_destroy, ourl
    for i=0,n_elements(line)-1 do begin
        if stregex(line[i],'[0-9,]+[^0-9]+extant species',/boolean) then begin
           tmp = stregex(line[i],'([0-9,]+)[^0-9]+extant species',/SUBEXPR,/EXTRACT)
           nbtot = fix(strjoin(strsplit(tmp[1],',',/extract)))
        endif 
        if stregex(line[i],'[0-9,]+[^0-9]+Genera',/boolean) then begin
           tmp = stregex(line[i],'([0-9,]+)[^0-9]+Genera',/SUBEXPR,/EXTRACT)
           ngtot = fix(strjoin(strsplit(tmp[1],',',/extract)))
        endif
        if (nbtot gt 0) and (ngtot gt 0) then break
    endfor
    openw,unit,get_filename(/tmpdir)+"stat.js",/get_lun
    printf,unit,"<!--"
    printf,unit,"  var blnk = '"+get_filename(/totbird)+"';"
    printf,unit,"  var clnk = '"+get_filename(/country)+"';"
    printf,unit,"  var btot = "+dm_to_string(nbtot)+";"
    printf,unit,"  var ctot = "+dm_to_string(ncount)+";"
    printf,unit,"  var gtot = "+dm_to_string(ngtot)+";"
    printf,unit,"  var usechinese = /chinese/.test(window.location.search.substring(1));"
    printf,unit,"  var cn_ind = usechinese?1:0;"
    printf,unit,"  var favico = (['stat2.ico','stat.ico'])[Math.round(Math.random())];"
    printf,unit,'  document.title=(["LaoQ'+"'"+'s Birding Stats","LaoQ的观鸟统计"])[cn_ind];'
    printf,unit,"  document.write('<LINK rel="+'"shortcut icon" href="https://ymqui.github.io/photo/thumbnail/'+"'+favico+"+"'"+'">'+"');"
    printf,unit,"//-->"
    free_lun,unit
    print,get_filename(/tmpdir)+"stat.js"
end


;plot lifer counts vs year
pro plot_lifer,wait=wait,movie=movie,chinese=chinese,image2=image2,pobj=pobj
    if n_elements(wait) eq 0 then wait=0;0.2
    read_ibn,year=year
    cnts = fltarr(n_elements(year))+1.0
    dm_step_bin,1,year,ydat=cnts,/avgsum,/const  ;aggregate based on year
    cyr  = fix((strsplit(systime(),' ',/extract))[-1]) ;current year
    if cyr gt max(year) then begin
       for i = max(year)+1,cyr do begin
           year = [year,i]
           cnts = [cnts,0]
       endfor
    endif
    ann_avg = total(cnts)/(max(year)-min(year)+1.0)
    cuml  = total(cnts,/cumulative)
    yran  = [min(cuml),max(cuml)]
    xran  = [min(year),max(year)]
    gap   = 0.04*(yran[1]-yran[0])
    edge  = [0.06,0.1,0.15]  ;[+/-x,-y,+y]
    fsize = ([12,10,8])[(yran[1] gt 1000)+(yran[1] gt 2000)]
    xsize = 900
    ysize = ([450,520,600])[(cuml[n_elements(cuml)-1] gt 1000)+(cuml[n_elements(cuml)-1] gt 1500)]
    if yran[1] gt 700 then begin
       edge[1]  = 0.15
       allbelow = 1b
    endif
    xran  = xran+[-1,1]*edge[0]*(xran[1]-xran[0])
    yran  = yran+[-edge[1],edge[2]]*(yran[1]-yran[0])
    xtit  = (['Year','年份'])[keyword_set(chinese)]
    ytit  = (['Lifer Count','!Z(9E1F,79CD,6570,76EE)'])[keyword_set(chinese)]
    pobj  = obj_new('dm_plot',xtitl=xtit,ytit=ytit,cornertxt='LaoQ \copyright '+dm_to_string(min(year))+'-'+dm_to_string(max(year)),$
            /legdshowfill,/showygrid,axisfsize=16,ctxtfsize=12,ctxtfont='helvetica italic',wtitle='Lifer Count',xsize=xsize,ysize=ysize)
    pobj->setproperty,yran=yran,xran=xran,ytickminor=0,/nodraw,extragap=[-0.02,0,0,0]
    if keyword_set(movie) then pobj->movie,/open,file=get_filename(/movie),speed=(wait eq 0?5:(1/wait))
    red   = 'red';[237,28,36]
    green = 'green';[34,177,76]
    for i=0,n_elements(year)-1 do begin
        if i eq 0 then begin
           pobj->add_plot,year[i],cnts[i],psym='Filled Circle',color=red,legend=(['annual count','!Z(5E74,5EA6,6570,76EE)'])[keyword_set(chinese)]
           pobj->add_plot,year[i],cuml[i],psym='Filled Circle',color=green,legend=(['total count','!Z(5E74,5EA6,603B,6570)'])[keyword_set(chinese)]
        endif else begin
           pobj->add_plot,year[i-1:i],cnts[i-1:i],psym='Filled Circle',color=red
           pobj->add_plot,year[i-1:i],cuml[i-1:i],psym='Filled Circle',color=green
           pobj->add_text,dm_to_string(cuml[i]),year[i],cuml[i]+gap*1.2,normalize=0,orientation=0,vertical_alignment=0,otext=otext1,fontsize=fsize
        endelse
        if keyword_set(allbelow) then $
           pobj->add_text,dm_to_string(cnts[i]),year[i],cnts[i]+gap*(-2.2),normalize=0,orientation=0,vertical_alignment=0,otext=otext2,fontsize=fsize $
        else $
           pobj->add_text,dm_to_string(cnts[i]),year[i],cnts[i]+gap*(i eq 1?(-2.2):1),normalize=0,orientation=0,vertical_alignment=0,otext=otext2,fontsize=fsize
        pobj->setproperty,title='Year: '+dm_to_string(year[i])
        pobj->draw
        if keyword_set(movie) then pobj->movie,/put
        if wait gt 0 then wait,wait
        if n_elements(otext1) ne 0 then pobj->setproperty,object=otext1,color='gray'
        pobj->setproperty,object=otext2,color='gray'
        if n_elements(otext) eq 0 then otext = otext2 else otext=[otext,otext2]
        if n_elements(otext1) ne 0 then otext = [otext,otext1]
    endfor   
    pobj->setproperty,object=otext,color='black'
    pobj->setproperty,title=''
    pobj->add_plot,[2000,2100],[ann_avg,ann_avg],linestyle='dashed',color='gray',/draw
    pobj->add_text,dm_to_string(ann_avg,res=1),1.01,(ann_avg-yran[0])/(yran[1]-yran[0])+0.017,fontsize=12,color='dark gray'
    if keyword_set(movie) then begin
       pobj->movie,/put
       pobj->movie,/close
    endif
    image1 = pobj->getimagedata()
    image2 = read_bmp(get_filename(/tmpdir)+"stat.bmp",/rgb)
    dim = size(image2,/dim)
    ind = where(min(image1[*,0:299,0:20],dim=1) lt 255,cnt)
    x_ind = ind mod 300
    y_ind = ind/300
    offset = [max(x_ind)+28,min(y_ind)]
    image1[*,offset[0]:(offset[0]+dim[1]-1),offset[1]:(offset[1]+dim[2]-1)] = image2
    write_image,get_filename(/tmpdir)+"lifer_stat.png",'png',image1
    ;;chinese version
    pobj->updatelegend,newlabel=['hi','hi']
    image1 = pobj->getimagedata()
    image1[*,offset[0]:(offset[0]+dim[1]-1),offset[1]:(offset[1]+dim[2]-1)] = image2
    ;legend location
    ind = where(image1[0,*,*]-image1[1,*,*]-image1[2,*,*] eq 255,cnt) ;red color
    x_ind = ind mod xsize
    y_ind = ind/xsize
    tmp = max(y_ind,i_max)
    ;xtit location
    ind = where(min(image1[*,300:*,*],dim=1) lt 255,cnt)
    x_ind1 = 300+(ind mod (xsize-300))
    y_ind1 = ind/(xsize-300)
    tmp = min(y_ind1,i_min1)
    ;ytit location
    ind = where(min(image1[*,0:49,100:*],dim=1) lt 255,cnt)
    x_ind2 = ind mod 50
    y_ind2 = 100+(ind/50)
    tmp = min(y_ind2,i_min2)
    xoffset = [x_ind[i_max],x_ind1[i_min1],x_ind2[i_min2]]+[15,-5,-8]
    yoffset = [y_ind[i_max],y_ind1[i_min1],y_ind2[i_min2]]-[37,11,6]
    fnames  = get_filename(/tmpdir)+'chinese_'+['legend','xtit','ytit']+'.bmp'
    for i=0,n_elements(fnames)-1 do begin
        image3 = read_bmp(fnames[i],/rgb)
        dim = size(image3,/dim)
        image1[*,xoffset[i]:(xoffset[i]+dim[1]-1),yoffset[i]:(yoffset[i]+dim[2]-1)] = image3
    endfor
    write_image,get_filename(/tmpdir)+"lifer_stat_cn.png",'png',image1
    pobj->updatelegend,/draw,newlabel=['annual','total']+' count'
end

pro find_bird
;    read_ibn,/all,line=line1& help,line1
    read_ibn,/all,extra=line & help,line

    pattern0 = '\)\,\["'
    pattern1 = 'isisis'
    j = 0
    for i=0,n_elements(line)-1 do begin    
        if stregex(line[i],pattern1,/fold_case,/boolean)  then print,j++,line[i]
           
    endfor
    print,'Done'
end

pro rename
    dir =  'C:\Users\qiuym\Desktop\2009cobird'
    files = file_search(dir,'*.jpg',count=count)
    for i=0,count-1 do begin
        tmp = strsplit(files[i],'_',/extract)
        file_move,files[i],strmid(tmp[0],0,strlen(tmp[0])-3)+'_'+tmp[1]
    endfor
    print,'Done'
end

pro count_family
    read_ibn,family=family0
    read_excel,family=family1
    ind = where(strlen(family1) gt 0)
    family1 = family1[ind]
    family0 = strtrim(family0[uniq(family0,sort(family0))],2)
    family1 = family1[uniq(family1,sort(family1))]
    family2 = strmid(family1,0,8)
    for i=0,n_elements(family1)-1 do begin
        tmp = where(family0 eq family2[i],cnt)
        if cnt eq 0 then print,family1[0>(i-1)],' ',family1[i]
    endfor
end

function rotmatrix,r_axis,r_ang
  ang = r_ang*!dpi/(180d) & cosang = cos(ang) & sinang = sin(ang)
  if norm(r_axis) ne 1 then r_axis = r_axis/norm(r_axis,/double)
  R   = cosang*Identity(3)+sinang*([[0.,-r_axis[2],r_axis[1]],[r_axis[2],0,-r_axis[0]],[-r_axis[1],r_axis[0],0]])+(1-cosang)*(r_axis#transpose(r_axis))
  ind = where(abs(R) lt 1e-15,count) & if count gt 0 then R[ind] = 0d
  return,R
end

