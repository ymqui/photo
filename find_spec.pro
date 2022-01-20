pro find_spec,name
    if n_elements(name) eq 0 then begin
       plot_lifer & return
       name = strtrim(dm_dialog_input('name:',xsize=140,cancel=cancel),2)
       if keyword_set(cancel) then return
       name = strsplit(name,',;',/extract)
    endif
    name = strtrim(name,2)
    if strlen(name[0]) eq 0 then return
    line = find_spec_pos(name,after=after)
    if n_elements(name) gt 1 then begin
       ind   = sort(line)
       line  = line[ind]
       name  = name[ind]
       after = after[ind]
    endif
    for i=0,n_elements(name)-1 do print,name[i]+':   ',line[i],' (after '+after[i]+')'
end

function get_filename,excel=excel,ibn=ibn,order=order,birdname=birdname,namecomp=namecomp,locs=locs,movie=movie,tmpdir=tmpdir,totbird=totbird,country=country
    if keyword_set(ibn)      then return,'https://ymqui.github.io/photo/info/index_birds_names.js'
    ;if keyword_set(ibn)      then return,'C:\Users\qiuym\Desktop\index_birds_names.js'
    if keyword_set(excel)    then return,'C:\Users\qiuym\Documents\Yiming\tmp\master_ioc_list_v12.1.csv'
    if keyword_set(order)    then return,'https://ymqui.github.io/photo/info/index_birds_orders.js'
    ;if keyword_set(order)    then return,'C:\Users\qiuym\Desktop\index_birds_orders.js'
    if keyword_set(namecomp) then return,'C:\Users\qiuym\Documents\Yiming\tmp\ibn_namecompare.txt'
    if keyword_set(movie)    then return,'C:\Users\qiuym\Desktop\lifer.mp4'
    if keyword_set(birdname) then return,read_namecomp()
    if keyword_set(totbird)  then return,'https://www.worldbirdnames.org/new/updates/'
    if keyword_set(country)  then return,'https://en.wikipedia.org/wiki/List_of_sovereign_states'
    if keyword_set(tmpdir)   then return,'C:\Users\qiuym\Documents\Yiming\tmp\'
    return,'C:\Users\qiuym\Documents\Yiming\tmp\ibn_birds_names_linenum.js'  ;for writing
end

function find_spec_pos,name,print=print,after=after
    if n_elements(name) eq 0 then begin
       name = strtrim(dm_dialog_input('name:',xsize=140),2)
       name = strsplit(name,',',/extract)
    endif
    name1 = strtrim(name,2)
    if strlen(name1[0]) eq 0 then return,-1
    tmp = where(stregex(name1,'gray',/boolean,/fold_case),count)
    for i=0,count-1 do begin
        tmp1 = name1[tmp[i]]
        pos = strpos(name1[tmp[i]],'gray')
        strput,tmp1,(['Grey','grey'])[pos ge 0],strpos(name1[tmp[i]],(['Gray','gray'])[pos ge 0])
        name1[tmp[i]] = tmp1
    endfor
    line = lonarr(n_elements(name1))-1
    read_excel,birds=birds
    birds = strlowcase(birds)
    name1 = strlowcase(name1)
    if arg_present(after) then begin
       read_ibn,bird=list
       list_num = find_spec_pos(list)
       after = strarr(n_elements(name1))
    endif
    for i=0,n_elements(name)-1 do begin
        ind = where(birds eq name1[i],count)
        if count ne 0 then line[i] = ind[count-1]
        if arg_present(after) then after[i] = list[(where(list_num lt line[i]))[-1]]
        if keyword_set(print) and (count eq 0) then begin
           print,name[i],line[i] & wait,1
        endif
    endfor
    return,line
end

;keyword n_spec for number of species, may include extinct ones
pro read_excel,birds=birds,header=header,latin=latin,data=data,family=family,n_spec=n_spec
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
       name2 = get_filename(/birdname) ;list of names need to changed
       for i=0,n_elements(name2[0,*])-1 do begin
           ind = where(strmatch(birds,name2[1,i],/fold_case),count2)
           if count2 eq 1 then birds[ind[0]] = name2[0,i]
       endfor
       tmp = where(stregex(birds,'gray',/boolean,/fold_case),count)
       for i=0,count-1 do begin
           tmp1 = birds[tmp[i]]
           pos = strpos(birds[tmp[i]],'gray')
           strput,tmp1,(['Grey','grey'])[pos ge 0],strpos(birds[tmp[i]],(['Gray','gray'])[pos ge 0])
           birds[tmp[i]] = tmp1
       endfor   
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
pro read_ibn,bird=bird,latin=latin,line=line,all=all,year=year,family=family
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
    if keyword_set(all) then return
    ind  = where(stregex(line,'birds\[j\+\+\] = new myBird\("',/boolean,/fold_case),count)
    line = line[ind]
    bird = strarr(count) & latin = strarr(count) & family = strarr(count)
    p0   = (strsplit(line[0],'"'))[3]
    for i=0,count-1 do begin
        tmp = strsplit(strmid(line[i],p0),'"',/extract)
        family[i] = tmp[0]
        bird[i]  = tmp[2]
        latin[i] = tmp[6]
    endfor
    tmp  = stregex(line,'^ +birds\[j\+\+\] = new myBird\("([0-9]+)',/extract,/sub) ;actual lifers
    year = 2000.+reform(fix(tmp[1,where(strlen(tmp[1,*]) eq 2)]))
    print,dm_to_string(n_elements(year))+'/'+dm_to_string(count)+' lifers.'
end

function read_namecomp
    file = get_filename(/namecomp)
    openr,unit,file,/get_lun,error=error
    if error ne 0 then return,''
    line = '' & names = ['','']
    while (~eof(unit)) do begin
          readf,unit,line
          if strlen(strtrim(line,2)) ne 0 then names = [[names],[strtrim(strsplit(line,',',/extract),2)]]
    endwhile
    free_lun,unit
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
    if keyword_set(all) then return
    order = '' & family = ''
    for i=0,nlines-1 do begin
        tmp = stregex(line[i],'^ *family\[j\+\+\] += +new +newFamily\("([a-z]+)',/fold_case,/extract,/subexpr)
        if strlen(tmp[1]) ne 0 then family=[family,tmp[1]] $
        else begin
             tmp = stregex(line[i],'^ *orders\[i\+\+\] += +new +newOrder\("([a-z]+)',/fold_case,/extract,/subexpr)
             if strlen(tmp[1]) ne 0 then order=[order,tmp[1]]
        endelse
    endfor
    if n_elements(family) gt 1 then family = family[1:*]
    if n_elements(order) gt 1 then order = order[1:*]
end

pro check_file,linenum=linenum,checkorder=checkorder,checkpinyin=checkpinyin,check_latin=check_latin
    current = systime(/sec)
    read_ibn,bird=bird,line=line
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
    check_order,allgood=allgood
    check_latin,allgood=allgood
    check_pinyin,allgood=allgood
    if keyword_set(allgood) then print,"There's no problem with the file."
    print,''+string(13b)+string(10b)+'Done in ',systime(/sec)-current,' secs.' 
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

pro check_latin,allgood=allgood
    current = systime(/sec)
    read_excel,birds=birds,latin=latin,family=family
    read_ibn,bird=list,latin=latin1,family=family1
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

pro check_pinyin,allgood=allgood  ;search for pinyin that is never used
    read_order,line=line,/all
    ind0 = where(stregex(line,'var py += ',/boolean))
    ind1 = where(stregex(line,'var pt_eng += ',/boolean))
    pinyin = ''
    for i=ind0[0],ind1[0] do begin
        tmp = I18N_MULTIBYTETOWIDECHAR(line[i])
        for j=0,n_elements(tmp)-1 do begin
            if tmp[j] gt 0x3400 then pinyin = [pinyin, I18N_WIDECHARTOMULTIBYTE(tmp[j])]
        endfor
    endfor
    pinyin = pinyin[1:*] & n_py = n_elements(pinyin)
    py_wch = lonarr(n_py)
    py_cnt = lonarr(n_py)
    py_mis = ''
    for i=0,n_py-1 do py_wch[i] = I18N_MULTIBYTETOWIDECHAR(pinyin[i])
    read_ibn,line=line,/all
    ind = where(stregex(line,'birds\[j',/boolean),count)
    for i=0,count-1 do begin
        tmp = strsplit(line[ind[i]],'"',/extract,count=count1) 
        for j=0,count1-1 do begin
            tmp1 = I18N_MULTIBYTETOWIDECHAR(tmp[j])
            if tmp1[0] gt 0x3400 then begin
               for k = 0,n_elements(tmp1)-1 do begin
                   ind2 = where(py_wch eq tmp1[k],count2)
                   if count2 ne 0 then py_cnt[ind2[0]] =  py_cnt[ind2[0]]+1 $
                   else py_mis = [py_mis,I18N_widechartomultibyte(tmp1[k])]
               endfor
               break
            endif
        endfor
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
    openw,unit,"C:\Users\qiuym\Desktop\stat.js",/get_lun
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
end

;plot lifer counts vs year
pro plot_lifer,wait=wait,movie=movie,chinese=chinese,image2=image2
    if n_elements(wait) eq 0 then wait=0;0.2
    read_ibn,year=year
    cnts = fltarr(n_elements(year))+1.0
    dm_step_bin,1.0,year,ydat=cnts,/avgsum,/const  ;aggregate based on year
    cyr  = fix((strsplit(systime(),' ',/extract))[-1]) ;current year
    if cyr gt max(year) then begin
       for i = max(year)+1,cyr do begin
           year = [year,i]
           cnts = [cnts,0]
       endfor
    endif
    ann_avg = total(cnts)/(max(year)-min(year)+1.0)
    cuml = total(cnts,/cumulative)
    yran = [min(cuml),max(cuml)]
    xran = [min(year),max(year)]
    gap  = 0.04*(yran[1]-yran[0])
    edge = [0.06,0.1,0.15]  ;[+/-x,-y,+y]
    if yran[1] gt 700 then begin
       edge[1] = 0.15
       allbelow = 1b
    endif
    xran = xran+[-1,1]*edge[0]*(xran[1]-xran[0])
    yran = yran+[-edge[1],edge[2]]*(yran[1]-yran[0])
    xtit = (['Year','!Z(5E74,5EA6)'])[keyword_set(chinese)]
    ytit = (['Lifer Count','!Z(9E1F,79CD,6570,76EE)'])[keyword_set(chinese)]
    pobj = obj_new('dm_plot',xtitl=xtit,ytit=ytit,cornertxt='LaoQ \copyright '+dm_to_string(min(year))+'-'+dm_to_string(max(year)),$
           /showygrid,axisfsize=16,ctxtfsize=10,wtitle='Lifer Count',xsize=900,ysize=520)
    pobj->setproperty,yran=yran,xran=xran,ytickminor=0,/nodraw,extragap=[-0.02,0,0,0]
    if keyword_set(movie) then pobj->movie,/open,file=get_filename(/movie),speed=1/wait
    for i=0,n_elements(year)-1 do begin
        if i eq 0 then begin
           pobj->add_plot,year[i],cnts[i],psym='Filled Circle',color='red',legend=(['annual count','!Z(5E74,5EA6,6570,76EE)'])[keyword_set(chinese)]
           pobj->add_plot,year[i],cuml[i],psym='Filled Circle',color='green',legend=(['total count','!Z(5E74,5EA6,603B,6570)'])[keyword_set(chinese)]
        endif else begin
           pobj->add_plot,year[i-1:i],cnts[i-1:i],psym='Filled Circle',color='red'
           pobj->add_plot,year[i-1:i],cuml[i-1:i],psym='Filled Circle',color='green'
           pobj->add_text,dm_to_string(cuml[i]),year[i],cuml[i]+gap*1.2,normalize=0,orientation=0,vertical_alignment=0,otext=otext1,fontsize=12
        endelse
        if keyword_set(allbelow) then $
           pobj->add_text,dm_to_string(cnts[i]),year[i],cnts[i]+gap*(-2.2),normalize=0,orientation=0,vertical_alignment=0,otext=otext2,fontsize=12 $
        else $
           pobj->add_text,dm_to_string(cnts[i]),year[i],cnts[i]+gap*(i eq 1?(-2.2):1),normalize=0,orientation=0,vertical_alignment=0,otext=otext2,fontsize=12
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
    ;pobj->add_text,(['annual avg','!Z(5E74,5747)'])[keyword_set(chinese)]+'='+dm_to_string(ann_avg,res=1),0.06,0.75,fontsize=12
    pobj->add_plot,[2000,2100],[ann_avg,ann_avg],linestyle='dashed',color='gray',/draw
    pobj->add_text,dm_to_string(ann_avg,res=1),1.01,(ann_avg-yran[0])/(yran[1]-yran[0])+0.017,fontsize=12,color='dark gray'
    if keyword_set(movie) then begin
       pobj->movie,/put
       pobj->movie,/close
    endif
    image1 = pobj->getimagedata()
    image2 = read_bmp(get_filename(/tmpdir)+"stat.bmp",/rgb)
    dim = size(image2,/dim)
    offset = [135,7]
    for i=0,dim[1]-1 do begin
        for j=0,dim[2]-1 do begin
            if max(abs(image2[*,i,j]-255)) ne 0 then image1[*,i+offset[0],j+offset[1]] = image2[*,i,j]
        endfor
    endfor
    write_image,get_filename(/tmpdir)+"lifer_stat.png",'png',image1
    ;chinese version
    image3 = read_bmp(get_filename(/tmpdir)+"chinese.bmp",/rgb)
    dim = size(image3,/dim)
    for i=0,dim[1]-1 do begin
        for j=0,dim[2]-1 do begin
            if (max(abs(image3[*,i,j]-[255,0,0])) ne 0) and ((max(abs(image1[*,i,j]-[192,192,192])) ne 0) $
            or (max(abs(image1[*,(i+10)<(dim[1]-1),j]-[192,192,192])) ne 0)) then image1[*,i,j] = image3[*,i,j]
        endfor
    endfor
    write_image,get_filename(/tmpdir)+"lifer_stat_cn.png",'png',image1
end