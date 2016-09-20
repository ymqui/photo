; This program facilitates a photo album page construction for the showphoto.html
; Yiming Qiu 1/2005

pro playwavfile,wavfile
    b   = [byte(wavfile),0b]
    lib = file_which('winclip.dll',/include_current_dir)
    j   = call_external(lib,'idlplaywav',b,0)
end

pro album_builder_Exit,tlb
    ;do nothing, leave the job to obj_destroy
end

;event dispatcher
pro album_builder_Event,event
    widget_control,event.handler,get_uvalue=self
    if obj_valid(self) then self->event,event
end

function album_builder::add_shade,image,thick
    dim  = size(image,/dim)
    if n_elements(thick) eq 0 then thick = fix(0.013*max(dim))
    step = fix(230/thick)
    newimage = bytarr(dim[0],dim[1]+thick,dim[2]+thick)+255b;
    newimage[0:dim[0]-1,0:dim[1]-1,thick:dim[2]+thick-1] = temporary(image)
    for i=0,thick-1 do begin
        newimage[0:dim[0]-1,thick:dim[1]+thick-1-i,i]=255b-byte(i*step)
        newimage[0:dim[0]-1,dim[1]+i,thick-i:dim[2]-1]=255b-byte((thick-1-i)*step)
    endfor
    return,newimage
end

pro album_builder::my_widget_control,uname,_ref_extra=extra
    if n_elements(extra) ne 0 then begin
        for i=0,n_elements(uname)-1 do begin
            wid = widget_info(self.tlb,find_by_uname=uname[i])
            if wid ne 0 then widget_control,wid,_extra=extra
        endfor
    endif
end

;convert photos to specified size and creat thumbnails
pro album_builder::convert
    ;creat a directory name as the pics dir name
    path = self.filesel_s->getproperty(/path)
    path = path+path_sep()+file_basename(self.p_Dir)
    if not file_test(path,/directory) then file_mkdir,path
    ;creat thumbnail directory
    index = where((*self.p_info)[*].thumbnail eq 1,count)
    if count ne 0 then begin
        if not file_test(path+path_sep()+'thumbnail',/directory) then $
            file_mkdir,path+path_sep()+'thumbnail'
    endif
    self.filesel_s->set_path,path
    ;convert files
    tindex = 0
    title  = 'Converting...'
    mesg   = widget_base(title=title,/col,/base_align_center,group_leader=self.tlb,tlb_frame_attr=9,map=0)
    for i=0,self.nfile-1 do begin
        file = file_basename((*self.p_info)[i].fname)
        if i eq 0 then begin
            label=widget_label(mesg,value=' converting '+file+' ',/dynamic_resize,/align_center)
            dm_center_kid,mesg,self.tlb
            widget_control,mesg,/realize,map=1
        endif else $
            widget_control,label,set_value=' converting '+file+' ',tlb_set_title=strtrim(title,2)+'  '+$
                strtrim(string(i+1),2)+'/'+strtrim(string(self.nfile),2)
        image = read_image((*self.p_info)[i].fname)
        dim   = size(image,/dimension)
        if dim[0] eq 4 then image=image[0:2,*,*]    ;for PNG files
        if max(dim) gt (*self.p_info)[i].width then begin
            if dim[1] gt dim[2] then newdim = fix(1.*dim[1:2]*((*self.p_info)[i].width)/dim[1]) $
            else newdim = fix(1.*dim[1:2]*((*self.p_info)[i].width)/dim[2])
            image = congrid(image,3,newdim[0],newdim[1])
        endif else newdim = dim[1:2]
        if (*self.p_info)[i].thumbnail eq 1 then begin
            newdim = fix(1.*newdim[0:1]*((*self.default).tWidth)/newdim[0])
            timage  = congrid(image,3,newdim[0],newdim[1])
            fname  = path+path_sep()+'thumbnail'+path_sep()+self.p_name+'_'+dm_to_string(tindex)+'.jpg'
            write_jpeg,fname,timage,true=1,quality=(*self.default).quality
            tindex = tindex+1
        endif
        if self.add_shade then image=self->add_shade(image)
        fname = path+path_sep()+self.p_name+'_'+dm_to_string(i+1)+'.jpg'
        write_jpeg,fname,image,true=1,quality=(*self.default).quality
        self.filesel_s->set_path
        self.filesel_s->clear_file,/bottom
    endfor
    widget_control,mesg,/destroy
end

;load default settings and camera information from album_builder.ini
pro album_builder::loaddefault
    openr,unit,'album_builder.ini',/get_lun,error=error
    tmp1 = '' & tmp2 = ['1','36','','1024','120','80',''] & tmp3 = strarr(4)
    if error ne 0 then begin
        c_info = tmp3
    endif else begin
        for i=0,5 do begin
            readf,unit,tmp1
            if i eq 2 then tmp2[i] = tmp1 else $
            if finite(dm_to_number(tmp1)) then tmp2[i] = tmp1
        endfor
        readf,unit,tmp1
        if file_test(tmp1,/executable) then tmp2[6]=tmp1
        while (not eof(unit)) do begin
            for i=0,3 do begin
                readf,unit,tmp1
                tmp3[i] = tmp1
            endfor
            if n_elements(c_info) eq 0 then c_info = tmp3 $
            else c_info=[[c_info],[tmp3]]
        endwhile
        (*self.c_info) = c_info
    free_lun,unit
    endelse
    (*self.default) = {   intro:   fix(tmp2[0]), $  ;flag for showing intro
                          frow:    fix(tmp2[1]), $  ;file selector row number
                          s_Dir:   tmp2[2],      $  ;source directory
                          pWidth:  fix(tmp2[3]), $  ;photo maximum size
                          tWidth:  fix(tmp2[4]), $  ;thumbnail width
                          quality: fix(tmp2[5]), $  ;compression rate
                          viewer:  tmp2[6]       $  ;text viewer
                       }
end


;load a jpeg file into the plot window
pro album_builder::loadimage,file
    image    = read_image(file)
    dim      = size(image,/dimension)

    if self.init eq 0 then begin
        if dim[1] gt dim[2] then begin
            self->my_widget_control,'whLabel',set_value='new width:'
            self.orientation = 'h'
        endif else begin
            self->my_widget_control,'whLabel',set_value='new height:'
            self.orientation = 'v'
        endelse
        self->my_widget_control,'indxLabel',set_value=$
            '['+dm_to_string(self.index+1)+'/'+dm_to_string(self.nfile)+']'
        self->my_widget_control,'sizeLabel',set_value=$
            'w: '+dm_to_string(dim[1])+'  h:'+dm_to_string(dim[2])
    endif
    ratio    = dim[1:2]/self.wsize
    maxratio = max(ratio,imax)
    pratio   = float(dim[1])/float(dim[2])
    if maxratio gt 1 then begin
        if imax eq 0 then image = congrid(image,dim[0],self.wsize[0],self.wsize[0]/pratio) $
        else image = congrid(image,dim[0],self.wsize[1]*pratio,self.wsize[1])
    endif
    wset,self.winPix
    tv,fltarr(self.wsize[0],self.wsize[1])    ;black background
    dim = size(image,/dimension)
    x = (self.wsize[0]-dim[1])/2
    y = (self.wsize[1]-dim[2])/2
    tv,image,x,y,true=1
    wset,self.winVis
    device,copy = [0,0,!d.x_size,!d.y_size,0,0,self.winPix]
    if self.init eq 0 then $
        xyouts,10,432,file_basename(file),/device,charsize=1,font=0
end

;load photo info into the current window
pro album_builder::loadphoto
    index = self.index
    self->loadimage,(*self.p_info)[index].fname
    self->my_widget_control,'prevBut',sensitive=(index gt 0)
    self->my_widget_control,'nextBut',sensitive=(index lt self.nfile-1)
    self->my_widget_control,'nailBut',set_button=(*self.p_info)[index].thumbnail
    self->my_widget_control,'faceBut',set_button=(*self.p_info)[index].makeface
    self->my_widget_control,'widthText',set_value=dm_to_string((*self.p_info)[index].width)
    self->my_widget_control,'engText',set_value=(*self.p_info)[index].etext
    self->my_widget_control,'chnText',set_value=(*self.p_info)[index].ctext
    tmp = where((*self.p_info)[*].thumbnail eq 1,count)
    if count gt 0 then begin
        tmp1 = where(tmp gt self.index,count)
        self->my_widget_control,'tnextBut',sensitive=(count gt 0)
        tmp1 = where(tmp lt self.index,count)
        self->my_widget_control,'tprevBut',sensitive=(count gt 0)
    endif
    tmp = where((*self.p_info)[*].makeface eq 1,count)
    if count gt 0 then begin
        tmp1 = where(tmp gt self.index,count)
        self->my_widget_control,'fnextBut',sensitive=(count gt 0)
        tmp1 = where(tmp lt self.index,count)
        self->my_widget_control,'fprevBut',sensitive=(count gt 0)
    endif
end

pro album_builder::savepage
    fname = self.filesel_s->getproperty(/path)
    fname = fname+ path_sep()+'info_'+self.p_name+'.js'
    openw,unit,fname,/get_lun,error=openerr
    if openerr ne 0 then begin
       ok=dialog_message("Can't write in "+parmfile+'.',/error,dialog_parent=self.tlb)
       return
    endif
    self.file = fname
    self->my_widget_control,'viewBut',sensitive=1
    printf,unit,'<!--'
    printf,unit,'//Created by Album Builder Program '+systime()
    printf,unit,'var info_url   = "'+self.url+'";'
    printf,unit,'var title      = "'+self.p_title[0]+'";'
    if self.camera eq n_elements(*self.c_info) then $
        printf,unit,'var cam_img    = "";' $
    else begin
        printf,unit,'var cam_img    = "'+(*self.c_info)[1,self.camera]+'";'
        printf,unit,'var cam_tit    = "'+(*self.c_info)[2,self.camera]+'";'
    endelse
    printf,unit,'var dir        = maindir+"'+self.p_Dir+'";'
    printf,unit,'var thumb_dir  = maindir+"'+self.t_Dir+'";'
    printf,unit,'var interval   = 6500;'
    printf,unit,'var ext        = ".jpg";'
    printf,unit,'var midi_file  = "";'
    printf,unit,'//var midi_cr    = new Array("","");'
    printf,unit,' '
    printf,unit,'if(window.usechinese){'
    printf,unit,'    title      = "'+self.p_title[1]+'";'
    if self.camera ne n_elements(*self.c_info) then $
        printf,unit,'    cam_tit    = "'+(*self.c_info)[3,self.camera]+'";'
    printf,unit,'}'
    printf,unit,' '
    printf,unit,'document.title = title;'
    printf,unit,' '
    printf,unit,'function initAlbum(){'
    printf,unit,'    this.length = 2;'
    printf,unit,'    this[0] = new Array();  //store file names'
    printf,unit,'    this[1] = new Array();  //store file infos,shown as browser status'
    printf,unit,'    for (var i=0;i<'+dm_to_string(self.nfile)+';i++){'
    printf,unit,'        this[0][i] = "'+self.p_name+'_"+(i+1).toString();'
    printf,unit,'        this[1][i] = "";'
    printf,unit,'    }'
    printf,unit,'    if(window.usechinese){'
    for i=0,self.nfile-1 do begin
        if strlen((*self.p_info)[i].ctext) ne 0 then $
        printf,unit,'        this[1]['+dm_to_string(i)+'] = "'+(*self.p_info)[i].ctext+'";'
    endfor
    printf,unit,'    }else{'
    for i=0,self.nfile-1 do begin
        if strlen((*self.p_info)[i].etext) ne 0 then $
        printf,unit,'        this[1]['+dm_to_string(i)+'] = "'+(*self.p_info)[i].etext+'";'
    endfor
    printf,unit,'    }'
    index = where((*self.p_info)[*].makeface eq 1,count)
    if count gt 0 then begin
        printf,unit,'    makeface = new Array();'
        for i=0,count-1 do $
            printf,unit,'    makeface['+dm_to_string(i)+'] = '+dm_to_string(index[i])+';'
    endif
    printf,unit,'}'
    printf,unit,' '
    printf,unit,'//web counter info'
    printf,unit,'//var sc_project   = ;
    printf,unit,'//var sc_partition = 4;
    printf,unit,'//var sc_security  = "";
    printf,unit,'//-->'
    free_lun,unit
    self.filesel_s->set_path
    self.filesel_s->clear_file,/bottom
end

pro album_builder::slide,lines
    DEVICE, FONT='Helvetica Bold', /TT_FONT
    cwidth  = 15
    cheight = 20
    lines   = lines
    wavfile = file_which('album_builder_key.wav',/include_current_dir)
    for i=0,n_elements(lines)-1 do begin
        len = strlen(lines[i])
        xoffset = (self.wsize[0]-(1.*len*cwidth))/2.
        yoffset = 285
        if xoffset lt 0 then begin
            tmp  = strsplit(lines[i],' ')
            ntmp = n_elements(tmp)
            tmp  = tmp[1:ntmp-1]-1
            itmp = ntmp-2
            while(xoffset lt 0) do begin
                xoffset = (self.wsize[0]-(1.*tmp[itmp]*cwidth))/2.
                itmp    = itmp-1
            endwhile
        endif
        for j=0,len-1 do begin
            x = xoffset+j*cwidth
            y = yoffset
            while x gt self.wsize[0]-xoffset do begin
                x = x-(self.wsize[0]-2*xoffset)-cwidth
                y = y-cheight-5
            endwhile
            xyouts,x,y,'!6'+strmid(lines[i],j,1),/device
            if wavfile ne '' then playwavfile,wavfile
            wait,0.05
        endfor
        wait,4
        device,copy = [0,0,!d.x_size,!d.y_size,0,0,self.winPix]
    endfor
end

pro album_builder::event,event
    compile_opt IDL2    ;,strictarrsubs
                        ;idl2=defint32,strictarr
                        ;strictarr:   [] to index array
                        ;strictarrsubs: error when out-of-range indices,IDL5.6 or after
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(!error_state.msg,/error)
       return
    end

    eventname = widget_info(event.id,/uname)
    if eventname ne 'tlb' then WIDGET_CONTROL,/HOURGLASS
    case eventname of
        'tlb': begin
            if self.init then begin
                self.init = 0b
                if (*self.default).intro eq 1 then $
                self->slide,['Welcome to album page builder.',$
                    'To start, please select files first.']
            endif else $
                widget_control,event.id,scr_xsize=self.geom[0],scr_ysize=self.geom[1]
            end
        'chnText':begin
            if n_elements(*self.p_info) eq 0 then return
            widget_control,event.id,get_value=tmp
            (*self.p_info)[self.index].ctext=strtrim(tmp[0],2)
            end
        'convertBut': begin
            self->convert
            self->savepage
            end
        'engText':begin
            if n_elements(*self.p_info) eq 0 then return
            widget_control,event.id,get_value=tmp
            (*self.p_info)[self.index].etext=strtrim(tmp[0],2)
            end
        'faceBut':begin
            if n_elements(*self.p_info) eq 0 then return
            (*self.p_info)[self.index].makeface = 1b-(*self.p_info)[self.index].makeface
            tmp = where((*self.p_info)[*].makeface eq 1,count)
            if count eq 0 then begin
                self->my_widget_control,['fprevBut','fnextBut'],map=0
            endif else begin
                self->my_widget_control,['fprevBut','fnextBut'],map=1
                tmp1 = where(tmp gt self.index,count)
                self->my_widget_control,'fnextBut',sensitive=(count gt 0)
                tmp1 = where(tmp lt self.index,count)
                self->my_widget_control,'fprevBut',sensitive=(count gt 0)
            endelse
            end
        'fnextBut':begin
            tmp = where((*self.p_info)[*].makeface eq 1,count)
            if count gt 0 then begin
                tmp1 = where(tmp gt self.index,count)
                if count gt 0 then begin
                    self.index = min(tmp[tmp1])
                    self->loadphoto
                endif
            endif
            end
        'fprevBut':begin
            tmp = where((*self.p_info)[*].makeface eq 1,count)
            if count gt 0 then begin
                tmp1 = where(tmp lt self.index,count)
                if count gt 0 then begin
                    self.index = max(tmp[tmp1])
                    self->loadphoto
                endif
            endif
            end
        'nailBut':begin
            if n_elements(*self.p_info) eq 0 then return
            (*self.p_info)[self.index].thumbnail = 1b-(*self.p_info)[self.index].thumbnail
            tmp = total((*self.p_info)[*].thumbnail)
            if (*self.p_info)[self.index].thumbnail eq 1 then begin
                if tmp eq 1 then self.torientation = self.orientation $
                else begin
                    if self.orientation ne self.torientation then begin
                        widget_control,event.id,set_button=0
                        (*self.p_info)[self.index].thumbnail = 0b
                        ok = dialog_message('The thumbnail oreientation is inconsistent.',/error,dialog_parent=self.tlb)
                    endif
                endelse
            endif
            tmp = where((*self.p_info)[*].thumbnail eq 1,count)
            self->my_widget_control,'nailLabel',set_value=(count gt 0)?(self.torientation+' '+dm_to_string(count)):(' ')
            if count eq 0 then begin
                self->my_widget_control,['tprevBut','tnextBut'],map=0
            endif else begin
                self->my_widget_control,['tprevBut','tnextBut'],map=1
                tmp1 = where(tmp gt self.index,count)
                self->my_widget_control,'tnextBut',sensitive=(count gt 0)
                tmp1 = where(tmp lt self.index,count)
                self->my_widget_control,'tprevBut',sensitive=(count gt 0)
            endelse
            end
        'nextBut':begin
            self.index = self.index+1
            self->loadphoto
            end
        'prevBut':begin
            self.index = self.index-1
            self->loadphoto
            end
        's_Select':begin
            date        = dm_to_string(bin_date())
            if strlen(date[1]) eq 1 then date[1]='0'+date[1]
            date        = strmid(date[0],1,2,/reverse)+date[1]
            result      = ['','pics/','thumbnail/','','','','0',$
                dm_to_string((*self.default).pWidth),dm_to_string((*self.default).quality),'0']
            result[0:1] = result[0:1]+date
            if n_elements(*self.c_info) eq 0 then cameralist = ['none'] $
            else cameralist = [reform((*self.c_info)[0,*]),'none']
            notdone = 1
            while(notdone) do begin
                result = dm_dialog_input(['page name:','photo directory:','thumbnail directory:','English title:',$
                    'Chinese title:','info url:','camera:','width','quality','add shade:'],default=result,droplist_content=ptr_new(cameralist),$
                    is_droplist=[0,0,0,0,0,0,1,0,0,0],/return_number,xsize=160,info='Set 1 to add shade to the photo.')
                if (strlen(result[0]) ne 0) and (strlen(result[1]) ne 0) and (strlen(result[2]) ne 0) $
                    then notdone = 0
            endwhile
            self.p_name    = result[0]
            self.p_Dir     = result[1]
            self.t_Dir     = result[2]
            self.p_title   = result[3:4]
            self.url       = result[5]
            self.camera    = dm_to_number(result[6])
            self.add_shade = dm_to_number(result[9])
            if finite(dm_to_number(result[7])) then (*self.default).pWidth =dm_to_number(result[7],/int)
            if finite(dm_to_number(result[8])) then (*self.default).quality=dm_to_number(result[8],/int)
            if strmid(self.p_Dir,0,1,/reverse) ne '/' then $
                self.p_Dir = self.p_Dir+'/';
            if strmid(self.t_Dir,0,1,/reverse) ne '/' then $
                self.t_Dir = self.t_Dir+'/';
            path = self.filesel_s->getproperty(/path)
            file = self.filesel_s->getproperty(/file)
            nfile = n_elements(file)
            if strlen(file[0]) eq 0 then begin
                self.nfile=0 & return
            endif
            self.index = 0
            self.nfile = nfile
            *self.p_info = replicate({fname:'',etext:'',ctext:'',makeface:0b,thumbnail:0b,$
                                   width:(*self.default).pWidth},nfile)
            for i=0,nfile-1 do (*self.p_info)[i].fname=path+path_sep()+file[i]
            self->my_widget_control,'convertBut',/sensitive
            self->loadphoto
            end
        'tnextBut':begin
            tmp = where((*self.p_info)[*].thumbnail eq 1,count)
            if count gt 0 then begin
                tmp1 = where(tmp gt self.index,count)
                if count gt 0 then begin
                    self.index = min(tmp[tmp1])
                    self->loadphoto
                endif
            endif
            end
        'tprevBut':begin
            tmp = where((*self.p_info)[*].thumbnail eq 1,count)
            if count gt 0 then begin
                tmp1 = where(tmp lt self.index,count)
                if count gt 0 then begin
                    self.index = max(tmp[tmp1])
                    self->loadphoto
                endif
            endif
            end
        'widthText':begin
            if n_elements(*self.p_info) eq 0 then return
            widget_control,event.id,get_value=tmp
            tmp = dm_to_number(tmp)
            if finite(tmp) then (*self.p_info)[self.index].width=tmp
            end
        'exitBut': begin
            widget_control,self.tlb,/destroy
            return
            end
        'viewBut': begin
            if strlen((*self.default).viewer) ne 0 then $
                spawn,(*self.default).viewer+' "'+self.file+'"',/noshell,/nowait
            end
       else:
    endcase
end

pro album_builder::Cleanup
    if widget_info(self.tlb,/valid_id) then widget_control,self.tlb,/destroy
    tvlct,(*self.rgb).r,(*self.rgb).g,(*self.rgb).b ;restore entry color map
    obj_destroy,self.filesel_s
    cd,self.root
    ptr_free,self.rgb,self.p_info,self.c_info,self.default
    wdelete,self.winPix
end

function album_builder::Init,group_leader=group_leader
    ;error handler
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok=dialog_message(!error_state.msg,/error)
       return, 0
    end
    registerName = 'album_builder'
    if xregistered(registerName) then return, 0  ;only allow one copy to be running at one time
    self.rgb     = ptr_new(/allocate_heap)
    self.p_info  = ptr_new(/allocate_heap)
    self.c_info  = ptr_new(/allocate_heap)
    self.default = ptr_new(/allocate_heap)
    self.init    = 1b
    self->loaddefault       ;load default info
    tvlct,r,g,b,/get
    *self.rgb  = {r:temporary(r),g:temporary(g),b:temporary(b)}  ;save entry color map
    cd,current = current
    self.root  = current

    title    ="Yiming's Photo Album Page Construction Utility"
    self.tlb = widget_base(uname='tlb',title=title,/row,/tlb_size_event,group_leader=group_leader,map=0)


    left = widget_base(self.tlb,/col,/frame)
    self.filesel_s = obj_new('dm_filesel',parent=left,xsize=150,ysize=(*self.default).frow)
    if file_test((*self.default).s_Dir,/directory) then self.filesel_s->set_path,(*self.default).s_Dir
    void = widget_label(left,value='',scr_ysize=3)
    row  = widget_base(left,/row,/align_center)
    void = widget_button(row,value='Select Files',uname='s_Select',scr_xsize=135)
    void = widget_label(left,value='',scr_ysize=3)

    lbut     = file_which('shift_left.bmp',/INCLUDE_CURRENT_DIR)
    rbut     = file_which('shift_right.bmp',/INCLUDE_CURRENT_DIR)

    xsize    = 600 & ysize = 450 & self.wsize = [xsize,ysize]
    center   = widget_base(self.tlb,/col,/frame)
    plotDraw = widget_draw(center,xsize = xsize,ysize = ysize,uname='plotDraw')
    row      = widget_base(center,/row)
    cleft    = widget_base(row,xsize=505,/col,/frame)
    cright   = widget_base(row,xsize=85,/col,/frame,/base_align_center)
    row      = widget_base(cleft,/row)
    void     = widget_label(row,value=' ',uname='indxLabel',scr_xsize=65,/align_center)
    void     = widget_label(row,value=' ',uname='sizeLabel',scr_xsize=200)
    tmp      = widget_base(row,/row)
    void     = widget_button(tmp,value=lbut,/bitmap,uname='fprevBut',scr_xsize=18,scr_ysize=15,sensitive=0)
    widget_control,void,map=0,tooltip='Previous Make Face Photo'
    void     = widget_label(tmp,value=' ',xsize=10)
    void     = widget_button(tmp,value=rbut,/bitmap,uname='fnextBut',scr_xsize=18,scr_ysize=15,sensitive=0)
    widget_control,void,map=0,tooltip='Next Make Face Photo'
    void     = widget_label(row,value=' ',xsize=55)
    tmp      = widget_base(row,/row)
    void     = widget_button(tmp,value=lbut,/bitmap,uname='tprevBut',scr_xsize=18,scr_ysize=15,sensitive=0)
    widget_control,void,map=0,tooltip='Previous Thumbnail Photo'
    void     = widget_label(tmp,value=' ',xsize=10)
    void     = widget_button(tmp,value=rbut,/bitmap,uname='tnextBut',scr_xsize=18,scr_ysize=15,sensitive=0)
    widget_control,void,map=0,tooltip='Next Thumbnail Photo'
    row      = widget_base(cleft,/row)
    void     = widget_label(row,value='new width:',xsize=65,/align_center,uname='whLabel')
    void     = widget_text(row, value='',uname='widthText',/all_events,/editable,scr_xsize=130,scr_ysize=28)
    void     = widget_label(row,value=' ',scr_xsize=40)
    erow     = widget_base(row,/row,/nonexclusive)
    void     = widget_button(erow,value='make face',uname='faceBut')
    void     = widget_label(row,value='',scr_xsize=10)
    erow     = widget_base(row,/row,/nonexclusive)
    void     = widget_button(erow,value='thumbnail',uname='nailBut')
    void     = widget_label(row,value=' ',scr_xsize=5)
    void     = widget_label(row,value=' ',uname='nailLabel',scr_xsize=40)
    row      = widget_base(cleft,/row)
    void     = widget_label(row,value='English:',xsize=65,/align_center)
    void     = widget_text(row,value='',uname='engText',scr_xsize=430,/all_events,/editable,scr_ysize=28)
    row      = widget_base(cleft,/row)
    void     = widget_label(row,value='ÖÐÎÄ:',xsize=65,/align_center)
    void     = widget_text(row,value='',uname='chnText',scr_xsize=430,/all_events,/editable,scr_ysize=28)
    ;
    if strlen((*self.default).viewer) ne 0 then tmp = 4 $
    else tmp = 8
    void     = widget_label(cright,value='',scr_ysize=tmp)
    row      = widget_base(cright,/row)
    void     = widget_button(row,value=lbut,/bitmap,uname='prevBut',/dynamic_resize,sensitive=0,tooltip='Previous Photo')
    void     = widget_label(row,value='',xsize=15)
    void     = widget_button(row,value=rbut,/bitmap,uname='nextBut',/dynamic_resize,sensitive=0,tooltip='Next Photo')
    void     = widget_label(cright,value='',scr_ysize=tmp)
    void     = widget_button(cright,value='Convert',uname='convertBut',xsize=65,sensitive=0,tooltip='Convert and Make Page')
    void     = widget_label(cright,value='',scr_ysize=tmp)
    if tmp ne 8 then begin
        void = widget_button(cright,value='View',uname='viewBut',xsize=65,sensitive=0,tooltip='View Page')
        void = widget_label(cright,value='',scr_ysize=tmp)
    endif
    void     = widget_button(cright,value='Exit',uname='exitBut',xsize=65,tooltip='Exit the Program')

    dm_center_kid, self.tlb   ;centering the top level base
    widget_control,self.tlb,/realize

    widget_control,plotDraw,get_value = winVis
    window,/free,/pixmap,xsize = xsize,ysize = ysize
    winPix = !d.window
    self.winVis = winVis
    self.winPix = winPix

    geom  = widget_info(self.tlb,/geometry)
    self.geom = [geom.scr_xsize,geom.scr_ysize]

    widget_control,self.tlb,set_uvalue=self

    ;load the front image
    file = file_which('album_builder.jpg',/include_current_dir)
    if strlen(file) ne 0 then self->loadimage,file

    widget_control,self.tlb,/map

    xmanager,registerName,self.tlb,cleanup='album_builder_Exit',no_block=0
    return,1
end

pro album_builder__define
    void={ album_builder,          $
           tlb:                0L, $   ;top level base
           init:               1b, $   ;
           rgb:         ptr_new(), $
           index:              0s, $   ;current file index
           nfile:              0s, $   ;total number of files
           geom:          [0L,0L], $   ;geometry
           wsize:         [0e,0e], $   ;plot window size
           file:               '', $   ;current saved page
           filesel_s:   obj_new(), $   ;file selector-source
           root:               '', $   ;starting directory
           winVis:             0L, $   ;visible window
           winPix:             0L, $   ;buffer invisible window
           p_name:             '', $   ;photo page name
           p_title:       ['',''], $   ;photo page title
           p_Dir:              '', $   ;photo directory
           t_Dir:              '', $   ;thumbnail directory
           url:                '', $   ;more info url
           add_shade:          0s, $   ;1 add shade 0 no shade
           camera:             0s, $   ;camera index
           orientation:        '', $   ;current photo orientation
           torientation:       '', $   ;thumbnail orientation
           p_info:      ptr_new(), $   ;photo infos
           c_info:      ptr_new(), $   ;camera information
           default:     ptr_new()  $   ;save default values
    }
end

pro album_builder,event=event
    if n_elements(event) ne 0 then $
        void=obj_new('album_builder',group_leader=event.top) $
    else $
        void=obj_new('album_builder')
    obj_destroy,void
end
