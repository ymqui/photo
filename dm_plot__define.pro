; $Id: dm_plot__define.pro,v 1.181 2017/07/13 17:57:12 ymqiu Exp $
;#######################################################################
;
; NAME:
;  dm_plot
;
; PURPOSE:
;  A versatile object plotting program.
;
; CATEGORY:
;  general graphics
;
; AUTHOR:
;  Yiming Qiu
;  NIST Center for Neutron Research
;  100 Bureau Drive, Gaithersburg, MD 20899-6102
;  United States
;  yiming.qiu@nist.gov
;  September, 2022
;
; LICENSE:
;  The software in this file is written by an employee of
;  National Institute of Standards and Technology
;  as part of the DAVE software project.
;
;  The DAVE software package is not subject to copyright protection
;  and is in the public domain. It should be considered as an
;  experimental neutron scattering data reduction, visualization, and
;  analysis system. As such, the authors assume no responsibility
;  whatsoever for its use, and make no guarantees, expressed or
;  implied, about its quality, reliability, or any other
;  characteristic. The use of certain trade names or commercial
;  products does not imply any endorsement of a particular product,
;  nor does it imply that the named product is necessarily the best
;  product for the stated purpose. We would appreciate acknowledgment
;  if the DAVE software is used or if the code in this file is
;  included in another product.
;
;#######################################################################

;my own legend, so that the expansion of legend box is from top to bottom 
;adopted from IDLgrLegend__define.pro
function dm_Legend::ComputeDimensions, oSrcDest, PATH=aliasPath
    compile_opt idl2, hidden
    ON_ERROR, 2
    if (self.bRecompute) then begin
        ; Move up the tree in search of a view.  If available, we will use the Z clipping range of the view to compute the smallest
        ; possible depth offset that will ensure that foreground objects are in front of the fill polygon without overlap.
        oView = OBJ_NEW()
        self->GetProperty, PARENT=oParent
        while (OBJ_VALID(oParent)) do begin
            if (OBJ_ISA(oParent, 'IDLgrView')) then begin
                oView = oParent
                oParent = OBJ_NEW()
            endif else begin
                oChild = oParent
                oChild->GetProperty, PARENT=oParent
            endelse
        endwhile
        if (OBJ_VALID(oView)) then begin
            oView->IDLgrView::GetProperty, ZCLIP = zClip
            depthOffset = (double(zClip[0]) - double(zClip[1]))/65536.d
        endif else begin
            depthOffset = 0.0005
        endelse
        maxTags = N_ELEMENTS((*self.pItem_Name))
        descFix = dblarr(maxTags)
        if (self.Columns gt maxTags) then self.Columns = maxTags
        ;; array to keep track of the max column widths
        textWidths = fltarr(self.Columns)
        textHeight = 0.0
        colIndex = 0
        for index = 0, maxTags-1 do begin
            ;; if we've reached the last column, start over
            if (colIndex eq self.Columns) then colIndex = 0
            (*self.pTexts)[index]->SetProperty, CHAR_DIMENSIONS = [0,0]
            textDims = oSrcDest->GetTextDimensions((*self.pTexts)[index], DESCENT = descenders, PATH = aliasPath)
            ;; If larger, replace
            textWidths[colIndex] = textWidths[colIndex] > textDims[0]
            descFix[index] = ABS(descenders)
            textHeight = textHeight > textDims[1]
            colIndex = colIndex + 1
        endfor
        (*self.pTexts)[0]->GetProperty, CHAR_DIMENSIONS = charDims
        vAspectRatio = 1.0
        hAspectRatio = 1.0
        if (charDims[0] gt charDims[1]) then hAspectRatio = charDims[0]/charDims[1] $
        else hAspectRatio = charDims[0]/charDims[1]
        maxWidth = TOTAL(textWidths)
        hglyphWidth = textHeight*0.8 * hAspectRatio
        vglyphWidth = textHeight*0.8 * vAspectRatio
        colGlyphWidth = textHeight * self.glyphWidth * hAspectRatio
        self.hGlyphWidth = hglyphWidth
        self.vGlyphWidth = vglyphWidth
        hgap = self.Gap * textHeight * hAspectRatio
        vgap = self.Gap * textHeight * vAspectRatio
        colWidths = textWidths + colGlyphWidth + hgap
        hborderGap = self.Border_Gap * textHeight * hAspectRatio
        vborderGap = self.Border_Gap * textHeight * vAspectRatio
        glyphGap = textHeight*0.1*vAspectRatio
        if (self.oTitle ne OBJ_NEW()) then begin
            self.oTitle->getProperty,strings=title, CHAR_DIMENSIONS = charDims
            if strlen(title) ne 0 then begin
               self.oTitle->SetProperty, CHAR_DIMENSIONS = [0,0]
               titleDims = oSrcDest->GetTextDimensions(self.oTitle, descent = titDesc, PATH=aliasPath)
               if textHeight eq 0 then begin
                  if (charDims[0] gt charDims[1]) then hAspectRatio = charDims[0]/charDims[1] $
                  else hAspectRatio = charDims[0]/charDims[1]
                  hborderGap = self.Border_Gap * titleDims[1] * hAspectRatio
                  vborderGap = self.Border_Gap * titleDims[1] * vAspectRatio
               endif
            endif
        endif
        ;; This determines the max number of rows
        maxVertElems = float(maxTags)/self.Columns
        if (maxVertElems gt fix(maxVertElems)) then maxVertElems = fix(maxVertElems + 1.0)
        ;; Get the dimensions of the box
        boxVert  = ((vborderGap*2.0) + (maxVertElems * textHeight) + (vgap*(maxVertElems-1))) ; outside gap + total height of text + gaps between text
        boxHorz  = ((hborderGap*2.0) + ((self.Columns-1.0)*hgap) + TOTAL(colWidths))     
        boxVert0 = textHeight + vborderGap              
        ;; space for title?
        if (self.oTitle ne OBJ_NEW()) then begin
            self.oTitle->getProperty,strings=title
            if strlen(title) ne 0 then begin
               boxVert = boxVert + titleDims[1] + ((vgap*2.0)<1.0) 
               boxHorz = boxHorz > (titleDims[0] + vborderGap*2.0)
               boxVert0 = titleDims[1] + vborderGap
            endif
        endif 
        ;; Set the box dimensions
        self.oOutline->SetProperty, Data = [[0,0,0],[boxHorz,0,0],[boxHorz,-boxVert,0],[0,-boxVert,0],[0,0,0]]
        ;; Set the fill dimensions
        self.oFill->SetProperty, Data = [[0,0,-depthOffset],[boxHorz,0,-depthOffset],[boxHorz,-boxVert,-depthOffset],[0,-boxVert,-depthOffset],[0,0,-depthOffset]]
        ;; Now to position the glyphs and text
        startIndex = 0
        endIndex = self.Columns-1
        if (endIndex ge maxTags) then endIndex = maxTags -1
        leftStart = hborderGap
        bottomStart = -boxVert0
        ;; Check for title placement
        if (self.oTitle ne OBJ_NEW()) then begin
            if strlen(title) ne 0 then begin
               self.oTitle->SetProperty,LOCATIONS = [(boxHorz - titleDims[0])/2.0,bottomStart+abs(titDesc)]
               bottomStart = bottomStart - textHeight - ((vgap*2.0)<1.0)
            endif
        endif
        ;; This loop determines the placement of the glyphs and text. It places them from left to right, top to bottom
        if maxTags gt 0 then begin
           repeat begin
               for index = startIndex,endIndex do begin
                   if ((*self.pItem_Type)[index] eq 0) then begin
                       symArr = OBJARR(3)
                       (*self.pGlyphs)[index]->GetProperty, SYMBOL = oSym
                       tmpSym = OBJ_NEW('IDLgrSymbol',0)
                       (*self.cleanGlyphs) = [(*self.cleanGlyphs),tmpSym]
                       symArr[0] = (symArr[2] = tmpSym)
                       if (N_ELEMENTS(oSym) gt 1) then oSym = oSym[1]
                       if (oSym ne OBJ_NEW()) then symArr[1] = oSym $
                       else symArr[1] = tmpSym
                       (*self.pGlyphs)[index]->SetProperty, DATA = [[leftStart, bottomStart+(textHeight/2.0)],[leftStart+(colGlyphWidth/2.0), bottomStart+(textHeight/2.0)], $
                                 [leftStart+colGlyphWidth, bottomStart+(textHeight/2.0)]], SYMBOL = symArr
                   endif else begin
                       (*self.pGlyphs)[index]->SetProperty, DATA = [[leftStart, bottomStart+glyphGap],[leftStart+colGlyphWidth, bottomStart+glyphGap], $
                                 [leftStart+colGlyphWidth, bottomStart+vglyphWidth+glyphGap],[leftStart, bottomStart+vglyphWidth+glyphGap],[leftStart, bottomStart+glyphGap]]
                   endelse
                   leftStart = leftStart + hgap + colGlyphWidth
                   ;; Now place the text
                   (*self.pTexts)[index]->SetProperty, LOCATIONS = [leftStart, bottomStart+MAX(descFix)]
                   ;; next column
                   leftStart = leftStart + textWidths[index-startIndex] + hgap
               endfor
               bottomStart = bottomStart - textHeight - vgap
               leftStart   = hborderGap
               startIndex  = endIndex + 1
               endIndex    = startIndex + self.Columns - 1
               if (endIndex ge maxTags) then endIndex = maxTags -1
           endrep until startIndex gt maxTags-1
        endif
    endif
    self->GetProperty, XRANGE = xRange, YRANGE = yRange, ZRANGE = zRange
    self.bRecompute = 0
    return, [xRange[1]-xrange[0], yRange[1]-yrange[0], 0]
end

pro dm_Legend::settextrendermethod,render_method=render_method
    for index=0,N_ELEMENTS((*self.pItem_Name))-1 do (*self.pTexts)[index]->SetProperty,render_method=render_method
    if (self.oTitle ne OBJ_NEW()) then self.oTitle->SetProperty,render_method=render_method
end

pro dm_Legend__Define
    struct = {dm_Legend,INHERITS IDLgrLegend}
end

;if widget is killed
pro dm_plot_Exit,tlb
    widget_control,tlb,get_uvalue=self
    if obj_valid(self) then begin
       self->getproperty,group_leader=group_leader,tlb=tlb,parenthandler=parenthandler,parentobj=parentobj,parent_events=parent_events
       if keyword_set(parent_events) then begin
          sendevent={dm_plot_kill,ID:tlb,TOP:group_leader,HANDLER:tlb,object:self}
          if obj_valid(parentobj) then $                           ;notify parent object
             call_method,parenthandler,parentobj,sendevent $
          else if widget_info(group_leader,/valid_id) ne 0 then $  ;notify the group leader
             widget_control,group_leader,send_event=sendevent,/no_copy
       endif
       obj_destroy,self
    endif
end

;event handler
pro dm_plot_event,event
    compile_opt IDL2
    ;catch and ignore all errors in this program
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(!error_state.msg,/error,/center)
       if widget_info(event.top,/valid_id) then widget_control,event.top,/update
       return
    end
    widget_control,event.handler,get_uvalue=self
    if obj_valid(self) then begin
       self->getproperty,enotebook=enotebook
       if keyword_set(enotebook) then begin
          IF DAVE_SET_FOCUS(EVENT) THEN RETURN
       endif
       self->event,event   ;actual event handler
    endif
end

;draws arc going through p_start and p_end with origion at p_origin, or a full circle if circle keyword is set
;keywords:
;   arcs:        save the points of the arcs
;   circle:      if set, draws a full circle
;   color:       color of the arc
;   conv_matrix: a 3x3 matrix to convert point coordinates, default is an identity matrix
;   layer:       layer, 2d plot only
;   linestyle:   linestyle of the arc
;   npoint:      number of points of the arc, default is 60 or 120 for circle
;   p_origin:    center of the circle, default is [0,0,0]
;   radius:      radius of the arc, default is calculated from the points
;   thick:       line thickness
pro dm_plot::add_arc,p_start,p_end,arcs=arcs,circle=circle,color=color,conv_matrix=conv_matrix,layer=layer,linestyle=linestyle,npoint=npoint,p_origin=p_origin,radius=radius,thick=thick
    if n_elements(npoint)      eq 0 then npoint = ([60,120])[keyword_set(circle)]
    if n_elements(p_origin)    eq 0 then p0 = [0.,0.,0.] else p0 = ([p_origin,0.])[0:2]
    if n_elements(conv_matrix) ne 9 then conv_matrix = Identity(3,/double)
    p1 = conv_matrix#(([p_start,0.])[0:2]-p0)
    p2 = conv_matrix#(([p_end,0.])[0:2]-p0)
    p_axis = crossp(p1,p2)
    if p_axis[2] lt 0 then p_axis = -p_axis
    r_ang = acos(p_axis[2]/norm(p_axis))/!dtor
    if r_ang eq 0 then begin  ;p1 and p2 on xy plane
       R = Identity(3)
    endif else begin
       r_axis = crossp([0,0,1.],p_axis)
       R = self->rotmatrix(r_axis,r_ang)
    endelse
    if keyword_set(circle) then begin
       ang2 = !pi*2
       ang1 = 0
    endif else begin
       p1 = p1##R
       p2 = p2##R
       ang1 = atan(p1[1],p1[0])
       ang2 = atan(p2[1],p2[0])
       if abs(ang1-ang2) gt !pi then begin
          ang1 = (ang1 lt 0)?(ang1+2*!pi):ang1
          ang2 = (ang2 lt 0)?(ang2+2*!pi):ang2
       endif
    endelse
    R   = transpose(R)
    i_r = invert(conv_matrix)
    if n_elements(radius) ne 0 then rho = radius else rho = (norm(p1)+norm(p2))/2.0
    arcs = fltarr(3,npoint+1)
    for i=0,npoint do begin
        ang = ang1+float(i)/npoint*(ang2-ang1)
        arcs[*,i] = i_r#(([rho*cos(ang),rho*sin(ang),0.0])##R)+p0
    endfor
    if n_elements(p_start) eq 2 then self->add_plot,arcs[0,*],arcs[1,*],linestyle=linestyle,color=color,thick=thick,layer=layer $
    else self->add_plot,arcs[0,*],arcs[1,*],arcs[2,*],linestyle=linestyle,color=color,thick=thick
end

;add a plot to dm_plot
;keywords:
;   formula: a string to describe the line plot formula, which can then be editted from cs-menu later.
pro dm_plot::add_plot,xdat,ydat,zdat,idat,xerr=xerr,yerr=yerr,zerr=zerr,ierr=ierr,zmin=zmin,zpos=zpos,irange=irange,ititle=ititle,addarrow=addarrow,arrowangle=arrowangle,$
    arrowlength=arrowlength,color=color,coldefine=coldefine,coltable=coltable,contourplot=contourplot,draw=draw,error=error,formula=formula,hideaxes=hideaxes,$
    hideintbar=hideintbar,interpolate=interpolate,layer=layer,legend=legend,linestyle=linestyle,no_copy=no_copy,opacity=opacity,plotobj=plotobj,psym=psym,shading=shading,surfplot=surfplot,$
    symsize=symsize,thick=thick,usepolygon=usepolygon
    self.animation[0] = 0b & error = 0b
    ;check data
    nxdat = n_elements(xdat) & nydat = n_elements(ydat) & nzdat = n_elements(zdat) & nidat = n_elements(idat) 
    nxerr = n_elements(xerr) & nyerr = n_elements(yerr) & nzerr = n_elements(zerr) & nierr = n_elements(ierr)
    if (nxdat eq 0) or (nydat eq 0) then begin
       ok = dialog_message(['Wrong number of parameters for dm_plot::add_plot.','dm_plot::add_plot,xdat,ydat,zdat,idat,xerr=xerr,yerr=yerr,zerr=zerr,ierr=ierr...'],/error,$
            dialog_parent=self.tlb,/center)
       error = 1b & return
    endif
    case n_params() of
        2: begin
           if nxdat ne nydat then begin
              mesg  = 'xdat and ydat must have the same size.'
              fatal = 1b & break
           endif
           if (nxerr ne 0) then begin
              if (nxerr ne nxdat) then begin
                 mesg  = 'xerr and xdat must have the same size.'
                 fatal = 1b & break
              endif
              ind_xerr = where(finite(xerr),nefin)
              if nefin ne nxerr then begin
                 ;remove those data
                 if nefin eq 0 then begin
                    mesg  = 'xerr are all non-finite values.'
                    fatal = 1b & break
                 endif else begin
                    mesg = 'The non-finite values in xerr have been removed.'
                    if nyerr ne 0 then begin
                       if nyerr ne nydat then begin
                          mesg  = 'yerr and ydat must have the same size.'
                          fatal = 1b & break
                       endif else begin
                          yerr = yerr [ind_xerr] & nyerr = nefin
                       endelse
                    endif
                    xdat = xdat[ind_xerr] & nxdat = nefin
                    ydat = ydat[ind_xerr] & nydat = nefin
                    xerr = xerr[ind_xerr] & nxerr = nefin
                 endelse
              endif
              ind_xerr = -1
           endif
           if (nyerr ne 0) then begin
              if (nyerr ne nydat) then begin
                 mesg  = 'yerr and ydat must have the same size.'
                 fatal = 1b & break
              endif
              ind_yerr = where(finite(yerr),nefin)
              if nefin ne nyerr then begin
                 ;remove those data
                 if nefin eq 0 then begin
                    mesg  = 'yerr are all non-finite values.'
                    fatal = 1b & break
                 endif else begin
                    mesg0 = 'The non-finite values in yerr have been removed.'
                    xdat = xdat[ind_yerr] & nxdat = nefin
                    ydat = ydat[ind_yerr] & nydat = nefin
                    yerr = yerr[ind_yerr] & nyerr = nefin
                    if nxerr ne 0 then begin
                       xerr = xerr[ind_yerr] & nexerr = nefin
                    endif
                    if n_elements(mesg) ne 0 then mesg = [mesg,mesg0] else mesg = mesg0 
                 endelse
              endif
              ind_yerr = -1
           endif
           ind_xfin = where(finite(xdat),nxfin)
           if nxfin ne nxdat then begin
              ;remove those data
              if nxfin eq 0 then begin
                 mesg  = 'xdat are all non-finite values.'
                 fatal = 1b & break
              endif else begin
                 mesg0 = 'The non-finite values in xdat have been removed.'
                 xdat = xdat[ind_xfin] & nxdat = nxfin
                 ydat = ydat[ind_xfin] & nydat = nxfin
                 if nxerr ne 0 then begin
                    xerr = xerr[ind_xfin] & nxerr = nxfin
                 endif
                 if nyerr ne 0 then begin
                    yerr = yerr[ind_xfin] & nyerr = nxfin
                 endif
                 if n_elements(mesg) ne 0 then mesg = [mesg,mesg0] else mesg = mesg0
              endelse
           endif
           ind_yfin = where(finite(ydat),nyfin)
           if nyfin ne nydat then begin
              ;remove those data
              if nyfin eq 0 then begin
                 mesg  = 'ydat are all non-finite values.'
                 fatal = 1b & break
              endif else begin
                 mesg0 = 'The non-finite values in ydat have been removed.'
                 xdat = xdat[ind_yfin] & nxdat = nyfin
                 ydat = ydat[ind_yfin] & nydat = nyfin
                 if nxerr ne 0 then begin
                    xerr = xerr[ind_yfin] & nxerr = nyfin
                 endif
                 if nyerr ne 0 then begin
                    yerr = yerr[ind_yfin] & nyerr = nyfin
                 endif
                 if n_elements(mesg) ne 0 then mesg = [mesg,mesg0] else mesg = mesg0
              endelse
           endif
           if keyword_set(usepolygon) then begin
              xdat = reform(xdat) 
              ydat = reform(ydat)
           endif
           end
        3: begin
           if nzdat eq 0 then begin
              mesg  = 'Wrong number of parameters for dm_plot::add_plot.'
              fatal = 1b
              break
           endif
           if (nxdat eq nydat) and (nxdat eq nzdat) and (~keyword_set(surfplot)) and (~keyword_set(contourplot)) then begin ;3d line or filled polygon 
              xdat = reform(xdat,nxdat,/overwrite)
              ydat = reform(ydat,nydat,/overwrite)
              zdat = reform(zdat,nzdat,/overwrite)
              line3d = 1b
              break
           endif
           tmp = size(zdat,/dimension)
           if n_elements(tmp) ne 2 then begin
              if keyword_set(surfplot) then begin
                 fatal = 1b
              endif else if (nxdat ne nzdat) or (nydat ne nzdat) then begin
                 fatal = 1b
              endif
           endif else begin
              if (tmp[0] ne nxdat) or (tmp[1] ne nydat) and (nxdat ne nzdat) and (nydat ne nzdat) then begin
                 fatal = 1b
              endif else begin
                 if ~keyword_set(usepolygon) and (nxdat eq nzdat) then begin
                    xdat = xdat[*,0]
                    ydat = reform(ydat[0,*])
                 endif
              endelse
           endelse
           if keyword_set(fatal) then begin
              if n_elements(mesg) eq 0 then mesg = ['Incorrect data format.','xdat=[nx], ydat=[ny], zdat=[nx,ny].','or xdat=[nx,ny],ydat=[nx,ny],zdat=[nx,ny].']
              if keyword_set(usecontour) then mesg = [mesg,'or xdat=[ndat],ydat=[ndat],zdat=[ndat].']
           endif
           if ~keyword_set(fatal) and (nzdat ne nxdat) then begin ;sort xdat and ydat just in case
              index = sort(xdat)
              if total(abs(index-lindgen(nxdat))) ne 0 then begin
                 xdat = xdat[index]
                 zdat = zdat[index,*]
              endif
              index = sort(ydat)
              if total(abs(index-lindgen(nydat))) ne 0 then begin
                 ydat = ydat[index]
                 zdat = zdat[*,index]
              endif
              index = 0
           endif
           end
        4: begin
           if (nzdat eq 0) or (nidat eq 0) then begin
              mesg  = 'Wrong number of parameters for dm_plot::add_plot.'
              fatal = 1b
              break
           endif
           tmpz = size(zdat,/dimension)
           tmpi = size(idat,/dimension)
           if keyword_set(surfplot) then begin   ;surface plot
              if nidat ne nzdat then begin
                 fatal = 1b
                 mesg  = 'idat and zdat must have the same size.'
              endif else if nzdat ne nxdat then begin
                 if n_elements(tmpz) ne 2 then begin
                    fatal = 1b
                    mesg  = ['Incorrect data format.','xdat=[nx], ydat=[ny], zdat=[nx,ny], idat=[nx,ny].']
                 endif else begin
                    if (tmpz[0] ne nxdat) or (tmpz[1] ne nydat) then begin
                       fatal = 1b
                       mesg  = ['Incorrect data format.','xdat=[nx], ydat=[ny], zdat=[nx,ny], idat=[nx,ny].']
                    endif
                 endelse
                 if ~keyword_set(fatal) then begin  ;sort xdat and ydat just in case
                    index = sort(xdat)
                    if total(abs(index-lindgen(nxdat))) ne 0 then begin
                       xdat = xdat[index]
                       zdat = zdat[index,*]
                       idat = idat[index,*]
                    endif
                    index = sort(ydat)
                    if total(abs(index-lindgen(nydat))) ne 0 then begin
                       ydat = ydat[index]
                       zdat = zdat[*,index]
                       idat = idat[*,index]
                    endif
                    index = 0
                 endif
              endif
           endif else begin                      ;volume plot
              if n_elements(tmpi) ne 3 then begin
                 fatal = 1b
                 mesg  = ['Incorrect data format.','xdat=[nx], ydat=[ny], zdat=[nz], idat=[nx,ny,nz].']
              endif else begin
                 if (tmpi[0] ne nxdat) or (tmpi[1] ne nydat) or (tmpi[2] ne nzdat) then begin
                    fatal = 1b
                    mesg  = ['Incorrect data format.','xdat=[nx], ydat=[ny], zdat=[nz], idat=[nx,ny,nz].']
                 endif
                 if ~keyword_set(fatal) then begin ;sort xdat, ydat, and zdat just in case
                    index = sort(xdat)
                    if total(abs(index-lindgen(nxdat))) ne 0 then begin
                       xdat = xdat[index]
                       idat = idat[index,*,*]
                    endif
                    index = sort(ydat)
                    if total(abs(index-lindgen(nydat))) ne 0 then begin
                       ydat = ydat[index]
                       idat = idat[*,index,*]
                    endif
                    index = sort(zdat)
                    if total(abs(index-lindgen(nzdat))) ne 0 then begin
                       zdat = zdat[index]
                       idat = idat[*,*,index]
                    endif
                    index = 0
                 endif
              endelse
           endelse
           end
        else:
    endcase
    if n_elements(mesg) ne 0 then ok = dialog_message(mesg,error=keyword_set(fatal),dialog_parent=self.tlb,/center)
    if keyword_set(fatal) then begin
       error = 1b & return
    endif
    ;get rid of blinking
    self.drawView->setproperty,/hide    
    self.drawView->getproperty,zclip=zclip
    if nxdat eq 1 then xdat=[xdat]
    if nydat eq 1 then ydat=[ydat]
    if nzdat eq 1 then zdat=[zdat]
    if nidat eq 1 then idat=[idat]
    if self.idl_version ge 6.0 then begin ;register_properties keyword for IDL6.0 or later
       reg_extra    = {register_properties:1}    ;register_property keyword
       regant_extra = {register_properties:1}    ;register_property keyword and antialias keyword
    endif
    if self.idl_version ge 8.0 then begin ;antialias keyword for IDL8.0 or later
       regant_extra = {register_properties:1,antialias:1}
    endif
    if n_elements(color) eq 0 then color=self.default[6:8]
    if n_elements(zpos)  eq 0 then zpos=!values.f_nan
    mycolor = self->getcolor(color,define=coldefine)
    wbcolor = self->getcolor((['white','black'])[self.bgcol])
    if total(abs(mycolor-(255-wbcolor))) eq 0 then mycolor = wbcolor  ;just in case that the plot color is the same as background color
    nplot = n_elements(*self.plotInfo) & n3d = 0
    if nplot gt 0 then begin
       onedplot = where((*self.plotInfo)[*].type eq 0,count0)
       if count0 gt 0 then tmp = where(obj_isa((*self.plotInfo)[onedplot].obj,'IDLgrPolyline'),n3d)
       if n3d eq 0 then begin
          polyplot = where((*self.plotInfo)[*].type eq 3,count3)
          if count3 gt 0 then tmp = where(ptr_valid((*self.plotInfo)[polyplot].zPtr),n3d) 
       endif
       if n3d eq 0 then sufplot = where((*self.plotInfo)[*].type eq 2,n3d)
       if n3d eq 0 then volplot = where((*self.plotInfo)[*].type eq 4,n3d)
    endif
    threedplot = (keyword_set(surfplot) or (n_elements(idat) ne 0) or keyword_set(line3d))
    zaxisexist = obj_valid(self.drawzAxis)
    if threedplot or zaxisexist then cshift = 0.5 else cshift = 0.0
    if (~threedplot) and (zaxisexist) and (n3d eq 0) then cshift = 0.0
    if total(finite(self.xran[*,0])) ne 2 then begin
       xmax = max(xdat,min=xmin,/nan)
       self.xran[*,0] = [temporary(xmin),temporary(xmax)]
       if self.xran[0,0] eq self.xran[1,0] then begin
          tmp = (self.xran[0,0] eq 0)? 0.5:abs(self.xran[0,0]/2.)
          self.xran[0,0] = self.xran[0,0]-tmp
          self.xran[1,0] = self.xran[1,0]+tmp
       endif
    endif
    if total(finite(self.xran[*,1])) ne 2 then begin   ;set the correct x log range from the data
       poselts = where(xdat gt 0,count)
       if count gt 0 then begin
          xmax = max(xdat[temporary(poselts)],min=xmin)
       endif else begin
          xmin = 1.0 & xmax = 10.0
       endelse
       self.xran[0,1] = (xmin gt self.xran[0,0])?((self.xran[0,0] gt 0)?(self.xran[0,0]):(xmin)):(self.xran[0,0])
       self.xran[1,1] = (xmax gt self.xran[1,0])?((self.xran[1,0] gt 0)?(self.xran[1,0]):(xmax)):(self.xran[1,0])
       if self.xran[1,1] le self.xran[0,1] then begin
          self.xran[0,1] = self.xran[0,1]/8.0
          self.xran[1,1] = self.xran[0,1]*10.0
       endif
    endif
    if total(finite(self.yran[*,0])) ne 2 then begin
       if nyerr eq nydat then begin
          ymin = min(ydat-abs(yerr),/nan)
          ymax = max(ydat+abs(yerr),/nan)
       endif else begin
          ymax = max(ydat,min=ymin,/nan)
       endelse
       self.yran[*,0] = [temporary(ymin),temporary(ymax)]
       if self.yran[0,0] eq self.yran[1,0] then begin
          tmp = (self.yran[0,0] eq 0)? 0.5:abs(self.yran[0,0]/2.)
          self.yran[0,0] = self.yran[0,0]-tmp
          self.yran[1,0] = self.yran[1,0]+tmp
       endif
    endif
    if total(finite(self.yran[*,1])) ne 2 then begin   ;set the correct y log range from the data
       poselts = where(ydat gt 0,count)
       if count gt 0 then begin
          ymax = max(ydat[temporary(poselts)],min=ymin)
       endif else begin
          ymin = 1.0 & ymax = 10.0
       endelse
       self.yran[0,1] = (ymin gt self.yran[0,0])?((self.yran[0,0] gt 0)?(self.yran[0,0]):(ymin)):(self.yran[0,0])
       self.yran[1,1] = (ymax gt self.yran[1,0])?((self.yran[1,0] gt 0)?(self.yran[1,0]):(ymax)):(self.yran[1,0])
       if self.yran[1,1] le self.yran[0,1] then begin
          self.yran[0,1] = self.yran[0,1]/8.0
          self.yran[1,1] = self.yran[0,1]*10.0
       endif
    endif
    if nzdat gt 0 then begin
       if n_elements(zmin) ne 0 then self.zmin = zmin[0]
       if total(finite(self.zran[*,0])) ne 2 then begin
          if nzerr eq nzdat then begin
             zmin = min(zdat-zerr,/nan)
             zmax = max(zdat+zerr,/nan) 
          endif else $
             zmax = max(zdat,min=zmin,/nan)
          self.zran[*,0] = [zmin,zmax]
          if self.zran[0,0] eq self.zran[1,0] then begin
             tmp = (self.zran[0,0] eq 0)? 0.5:abs(self.zran[0,0]/2.)
             self.zran[0,0] = self.zran[0,0]-tmp
             self.zran[1,0] = self.zran[1,0]+tmp
          endif
          if (nplot-n3d) gt 0 then self.zran[0,0] = (-0.015)<(self.zran[0,0])
       endif
       if total(finite(self.zran[*,1])) ne 2 then begin  ;set the correct z log range from the data
          finelts = where(finite(zdat),count)
          if count gt 0 then poselts = where(zdat[finelts] gt 0,count)
          if count gt 0 then begin
             zmax = max(zdat[finelts[poselts]],min=zmin)
          endif else begin
             zmin = 1.0 & zmax = 10.0
          endelse
          finelts = -1 & poselts = -1
          self.zran[0,1] = (zmin gt self.zran[0,0])?((self.zran[0,0] gt 0)?(self.zran[0,0]):(zmin)):(self.zran[0,0])
          self.zran[1,1] = (zmax gt self.zran[1,0])?((self.zran[1,0] gt 0)?(self.zran[1,0]):(zmax)):(self.zran[1,0])
          if self.zran[1,1] le self.zran[0,1] then begin
             self.zran[0,1] = self.zran[0,1]/8.0
             self.zran[1,1] = self.zran[0,1]*10.0
          endif
       endif
    endif
    ;create x & y axis if nonexistent
    if (~obj_valid(self.drawxAxis[0])) or (~obj_valid(self.drawxAxis[1])) then begin
       if n3d eq 0 then self.drawGroup->reset
       if n_elements(hideaxes) gt 0 then begin
          self.hideAxes = keyword_set(hideaxes[0])
          id = self->my_widget_id('dm_cs_hideaxes')
          dm_set_button,id,~self.hideAxes,onstring='Hide Axes',offstring='Show Axes'
       endif
       ;x axis
       if (~obj_valid(self.drawxAxis[0])) then begin
          self.drawxAxis[0] = obj_new('IDLgrAxis',0,range=self.xran[*,0],title=self.xtit,_extra=regant_extra,hide=self.hideaxes,$
             major=self.tickmajor[0+4*self.xlog],minor=self.tickminor[0+4*self.xlog],color=wbcolor,ticklen=self.ticklen[0+4*self.isotropic],$
             subticklen=self.subticklen[0+4*self.isotropic],/exact,location=[0,-cshift,0],name='axis')                        ;bottom
          self.drawGroup->add,self.drawxAxis[0]
       endif
       if (~threedplot) and (n3d eq 0) and (~obj_valid(self.drawxAxis[1])) then begin
          self.title->getproperty,strings=title & obj_destroy,self.title
          self.title = obj_new('IDLgrText',title,recompute_dimensions=2,font=self.font[4],/enable_formatting,_extra=reg_extra,color=wbcolor,render_method=self.render_method,name='title')
          self.drawxAxis[1] = obj_new('IDLgrAxis',0,range=self.xran[*,0],color=wbcolor,_extra=regant_extra,/use_text_color,hide=self.hideaxes,$
             major=self.tickmajor[0+4*self.xlog],minor=self.tickminor[0+4*self.xlog],/tickdir,location=[1,1,0],/exact,name='axis',title=self.title,textpos=1,$
             textalignments=[0.5,0],ticklen=self.ticklen[0+4*self.isotropic],subticklen=self.subticklen[0+4*self.isotropic])  ;top
          self.drawGroup->add,self.drawxAxis[1]
       endif
       ;y axis
       if (~obj_valid(self.drawyAxis[0])) then begin
          self.drawyAxis[0] = obj_new('IDLgrAxis',1,range=self.yran[*,0],title=self.ytit,_extra=regant_extra,hide=self.hideaxes,$
             major=self.tickmajor[1+4*self.ylog],minor=self.tickminor[1+4*self.ylog],color=wbcolor,ticklen=self.ticklen[1+4*self.isotropic],$
             subticklen=self.subticklen[1+4*self.isotropic],location=[-cshift,0,0],/exact,name='axis')                        ;left
          self.drawGroup->add,self.drawyAxis[0]
       endif
       if (~threedplot) and (n3d eq 0) and (~obj_valid(self.drawyAxis[1])) then begin
          self.drawyAxis[1] = obj_new('IDLgrAxis',1,range=self.yran[*,0],color=wbcolor,_extra=regant_extra,hide=self.hideaxes,$
             major=self.tickmajor[1+4*self.ylog],minor=self.tickminor[1+4*self.ylog],ticklen=self.ticklen[1+4*self.isotropic],$
             subticklen=self.subticklen[1+4*self.isotropic],/tickdir,location=[1,1,0],/exact,/notext,name='axis')             ;right
          self.drawGroup->add,self.drawyAxis[1]
       endif
    endif
    ;creat z axis if needed
    if threedplot and (~zaxisexist) then begin
       self.drawzAxis = obj_new('IDLgrAxis',2,range=self.zran[*,0],title=self.ztit,name='axis',_extra=regant_extra,hide=self.hideaxes,location=[-cshift,1-cshift,1],/exact,$
            major=self.tickmajor[2+4*self.zlog],minor=self.tickminor[2+4*self.zlog],color=wbcolor,ticklen=self.ticklen[2],subticklen=self.subticklen[2])
       self.drawGroup->add,self.drawzAxis
       self.title->getproperty,strings=title & obj_destroy,self.title
       self.title = obj_new('IDLgrText',title,recompute_dimensions=2,font=self.font[4],/enable_formatting,_extra=reg_extra,color=wbcolor,render_method=self.render_method,alignment=0.5,$
            location=[0,1.2,zclip[0]-0.09],name='title')
       self.drawModel->add,self.title
    endif
    if (~threedplot) and (zaxisexist) and (n3d eq 0) then obj_destroy,self.drawzAxis
    if (n_params() ge 3) and (~keyword_set(line3d)) then begin        ;2d data or 3d data, not a line plot
       if n_elements(shading)  ne 0 then shading  = keyword_set(shading[0]) else shading=round(self.default[2]) ;default flat shading
       if n_elements(coltable) ne 0 then coltable = 0>(fix(coltable[0]))<(n_elements(self->getpalette(/list))-1) else coltable=round(self.default[3]) ;default viridis color table
       drawPal = self->getpalette(coltable)
       if nidat ne 0 then begin
          if total(finite(self.iran[*,1])) ne 2 then begin
             finelts = where(finite(idat),count)
             if count gt 0 then poselts = where(idat[finelts] gt 0,count)
             if count gt 0 then begin
                imax = max(idat[finelts[poselts]],min=imin)
             endif else begin
                imin = 1.0 & imax = 10.0
             endelse
             finelts = -1 & poselts = -1
             self.iran[0,1] = (imin gt self.iran[0,0])?((self.iran[0,0] gt 0)?(self.iran[0,0]):(imin)):(self.iran[0,0])
             self.iran[1,1] = (imax gt self.iran[1,0])?((self.iran[1,0] gt 0)?(self.iran[1,0]):(imax)):(self.iran[1,0])
             if self.iran[1,1] le self.iran[0,1] then self.iran[1,1] = self.iran[0,1]*10.0
          endif
       endif else if total(finite(self.iran[*,0])) ne 2 then self.iran = self.zran
       if finite(self.zmin,/nan) then self.zmin = self.iran[0,self.ilog]
       if finite(self.zmax,/nan) then self.zmax = self.iran[1,self.ilog]
       if n_elements(irange) eq 2 then begin
          if (total(finite(irange)) eq 2) then begin
             if irange[1] gt irange[0] then begin
                if self.ilog then begin
                   if irange[0] gt 0 then self.iran[0,1] = irange[0]
                   if irange[1] gt 0 then self.iran[1,1] = irange[1]
                endif else self.iran[*,0]=irange
             endif
          endif
       endif
       if (n_params() eq 4) and (~keyword_set(surfplot)) then begin
          type = 4   ;volume plot
          plotobj = obj_new('idlgrvolume',uvalue=drawPal,name='vol',alpha_channel=opacity,interpolate=interpolate,_extra=reg_extra,hints=2,/zbuffer) ;hints=2 enables multiple CPU accleration
       endif else if keyword_set(surfplot) then begin
          type = 2   ;surface plot
          plotobj = obj_new('idlgrsurface',style=2,color=[255,255,255],shading=shading,palette=drawPal,name='surf',_extra=reg_extra)
       endif else begin
          type = 1   ;contour plot
          if n_elements(layer) eq 0 then begin
             layer = nplot
             if layer gt 0 then onedplot=where((*self.plotInfo)[*].type eq type,layer)
          endif else begin
             if nplot gt 0 then begin
                onedplot = where((*self.plotInfo)[*].type eq type,count1)
                if count1 gt 0 then begin ;avoid plots with the same layer
                   for i=0,count1-1 do begin
                       if (*self.plotInfo)[onedplot[i]].layer ge layer then $
                          (*self.plotInfo)[onedplot[i]].layer = (*self.plotInfo)[onedplot[i]].layer+1
                   endfor
                endif
             endif
          endelse
          if keyword_set(usepolygon) then begin
             ;use idlgrpolygon object instead of idlgrcontour object to speed up plotting
             plotobj = obj_new('IDLgrPolygon',palette=drawPal,shading=shading,style=2,shade_range=[1,255],name='twod',_extra=reg_extra)
          endif else begin
             plotobj = obj_new('IDLgrContour',/fill,name='twod',c_color=1b+bindgen(255),palette=drawPal,shade_range=[1,255],shading=shading,_extra=regant_extra)
          endelse
       endelse
       if n_elements(layer) eq 0 then layer = 0L  ;doesn't matter
       newplotInfo = {dm_plot_info,obj:plotobj,type:type,coltable:coltable,shading:shading,legend:'',color:wbcolor,psym:'',symsize:0e,thick:0e,linestyle:0,$
                      xPtr:ptr_new(xdat,no_copy=no_copy),yPtr:ptr_new(ydat,no_copy=no_copy),zPtr:ptr_new(zdat,no_copy=no_copy),iPtr:ptr_new(idat,no_copy=no_copy),$
                      dxPtr:ptr_new(),dyPtr:ptr_new(),dzPtr:ptr_new(zerr,no_copy=no_copy),diPtr:ptr_new(ierr,no_copy=no_copy),zpos:zpos,layer:long(layer),hide:0b}
       ;colorbar
       ;check if the colorbar axis exists
       if (~obj_valid(self.drawxAxis[2])) then begin
          if n_elements(hideintbar) gt 0 then self.hideIntbar = keyword_set(hideintbar[0])
          ;x
          self.drawxAxis[2] = obj_new('IDLgrAxis',0,range=1+self.cbarpos-cshift/2.,hide=self.hideIntbar,_extra=reg_extra,$
             color=wbcolor,ticklen=0.0,/exact,location=[1+self.cbarpos[0]-cshift/2.,-cshift/4.,zclip[0]-0.1],/notext,name='cbar')      ;bottom
          self.drawxAxis[3] = obj_new('IDLgrAxis',0,range=1+self.cbarpos-cshift/2.,hide=self.hideIntbar,_extra=reg_extra,$
             color=wbcolor,ticklen=0.0,location=[1+self.cbarpos[1]-cshift/2.,1-cshift/4.,zclip[0]-0.1],/exact,name='cbar',/notext)   ;top
          self.drawModel->add,self.drawxAxis[2]
          self.drawModel->add,self.drawxAxis[3]
          ;y
          self.drawyAxis[2] = obj_new('IDLgrAxis',1,range=self.iran[*,0],/notext,hide=self.hideIntbar,major=self.tickmajor[3+4*self.ilog],minor=self.tickminor[3+4*self.ilog],$
             color=wbcolor,ticklen=self.ticklen[3],subticklen=self.subticklen[3],location=[1+self.cbarpos[0]-cshift/2.,-cshift/4.,zclip[0]-0.1],/exact,_extra=reg_extra,name='axis')   ;left
          if n_elements(ititle) ne 0 then self->setproperty,ititle=ititle,/nodraw
          self.drawyAxis[3] = obj_new('IDLgrAxis',1,range=self.iran[*,0],title=self.cbtit,color=wbcolor,major=self.tickmajor[3+4*self.ilog],minor=self.tickminor[3+4*self.ilog],$
             hide=self.hideIntbar,ticklen=self.ticklen[3],subticklen=self.subticklen[3],/tickdir,location=[1+self.cbarpos[1]-cshift/2.,-cshift/4.,zclip[0]-0.1],/exact,textpos=1,$
             _extra=reg_extra,name='cbar')  ;right
          self.drawModel->add,self.drawyAxis[2]
          self.drawModel->add,self.drawyAxis[3]
          i_level = self.iran[0,0]+findgen(256)/255.0*(self.iran[1,0]-self.iran[0,0])
          self.colBar = obj_new('IDLgrContour',transpose([[i_level],[i_level]]),geomy=i_level,geomz=zclip[0]-0.11,$
             geomx=1+self.cbarpos-cshift/2.,/plan,/fill,name='cbar',c_color=1b+bindgen(255),palette=drawPal,shading=shading,hide=self.hideIntbar,_extra=reg_extra)
          self.drawModel->add,self.colBar
       endif 
    endif else begin  ;1d data or filled polygon or 3d line
       if keyword_set(usepolygon) then $
          type = 3 $    ;filled polygon
       else $
          type = 0      ;1d or 3d line
       if ~keyword_set(line3d) then begin
          if n_elements(layer) eq 0 then begin
             layer = nplot
             if layer gt 0 then onedplot=where((*self.plotInfo)[*].type eq type,layer)
          endif else begin
             if nplot gt 0 then begin
                onedplot = where((*self.plotInfo)[*].type eq type,count1)
                if count1 gt 0 then begin ;avoid plots with the same layer
                   for i=0,count1-1 do begin
                       if (*self.plotInfo)[onedplot[i]].layer ge layer then begin
                          (*self.plotInfo)[onedplot[i]].layer = (*self.plotInfo)[onedplot[i]].layer+1
                          if (*self.plotInfo)[(onedplot[i]+1)<(nplot-1)].type eq -1 then (*self.plotInfo)[onedplot[i]+1].layer = (*self.plotInfo)[onedplot[i]+1].layer+1 ;error bar
                          if (*self.plotInfo)[(onedplot[i]-1)>0].type eq -3 then (*self.plotInfo)[onedplot[i]-1].layer = (*self.plotInfo)[onedplot[i]-1].layer+1         ;arrow
                       endif
                   endfor
                endif
             endif
          endelse
       endif else layer = 0
       if keyword_set(usepolygon) then begin
          plotobj = obj_new('IDLgrPolygon',name='poly',color=mycolor,_extra=reg_extra)
          newplotInfo = {dm_plot_info,obj:plotobj,type:type,coltable:-1,shading:-1,legend:'',color:mycolor,psym:'',symsize:0e,thick:0e,linestyle:0,xPtr:ptr_new(xdat,no_copy=no_copy),$
                         yPtr:ptr_new(ydat,no_copy=no_copy),zPtr:ptr_new(zdat,no_copy=no_copy),iPtr:ptr_new(),dxPtr:ptr_new(),dyPtr:ptr_new(),dzPtr:ptr_new(),diPtr:ptr_new(),zpos:zpos,$
                         layer:long(layer),hide:0b}
       endif else begin
          if n_elements(symsize)   eq 0 then symsize=self.default[0] else symsize=(0.0>(symsize[0])<1.0)
          if n_elements(linestyle) eq 0 then linestyle=0 else linestyle=self->getlinestyle(linestyle[0])
          if n_elements(thick)     eq 0 then thick=self.default[1] else thick=(([1.0,0.0])[self.idl_version ge 8.1])>(thick[0])<10.0
          if n_elements(psym)      eq 0 then psym='no symbol' else psym=self->getpsym(psym,/name)
          self.font[5]->getproperty,name=fontname
          if n_elements(legend)    eq 0 then legend='' else legend=self->textadjust(strtrim(legend,2),fontname=fontname)
          drawPsym = self->getpsym(psym,symsize,thick,mycolor)
          if keyword_set(addarrow) then begin
             arrowobj = obj_new('IDLgrPolygon',name='arrow',color=mycolor,_extra=regant_extra)
             if n_elements(arrowangle) eq 0  then arrowangle = 0.0
             if n_elements(arrowlength) eq 0 then arrowlength = 0.0
             arrowplotInfo = {dm_plot_info,obj:arrowobj,type:-3,coltable:-1,shading:-1,legend:'',color:mycolor,psym:'',symsize:0e,thick:0e,linestyle:0,xPtr:ptr_new(xdat,no_copy=no_copy),$
                         yPtr:ptr_new(ydat,no_copy=no_copy),zPtr:ptr_new(zdat,no_copy=no_copy),iPtr:ptr_new(),dxPtr:ptr_new(arrowangle),dyPtr:ptr_new(arrowlength),dzPtr:ptr_new(),$
                         diPtr:ptr_new(),zpos:zpos,layer:long(layer),hide:0b}
             self.drawGroup->add,arrowobj
          endif
          if keyword_set(line3d) then begin ;3d line plot    
             plotobj = obj_new('IDLgrPolyline',xdat,ydat,zdat,color=mycolor,symbol=drawPsym,linestyle=linestyle,thick=thick,name='plot',_extra=regant_extra)
          endif else begin
             plotobj = obj_new('IDLgrPlot',xdat,ydat,color=mycolor,symbol=drawPsym,linestyle=linestyle,zvalue=(-1.0e-4)*(1+layer),$
                       /use_zvalue,thick=thick,xrange=self.xran[*,0],yrange=self.yran[*,0],name='plot',_extra=regant_extra)
          endelse
          newplotInfo = {dm_plot_info,obj:plotobj,type:type,coltable:-1,shading:-1,legend:legend,color:mycolor,psym:psym,symsize:symsize,thick:thick,linestyle:linestyle,$
                         xPtr:ptr_new(xdat,no_copy=no_copy),yPtr:ptr_new(ydat,no_copy=no_copy),zPtr:ptr_new(zdat,no_copy=no_copy),iPtr:((n_elements(formula) eq 1)?ptr_new(formula):ptr_new()),$
                         dxPtr:ptr_new(),dyPtr:ptr_new(),dzPtr:ptr_new(),diPtr:ptr_new(),zpos:zpos,layer:long(layer),hide:0b}
          if n_elements(arrowplotInfo) ne 0 then newplotInfo = [arrowplotInfo,newplotInfo]
          if (nyerr eq nydat) or (nxerr eq nxdat) or ((nzerr eq nzdat) and (nzdat ne 0)) then begin
             errorPlot = obj_new('idlgrpolyline',color=mycolor,thick=thick,name='error',_extra=regant_extra)
             self.drawGroup->add,errorPlot
             newplotInfo = [newplotInfo,{dm_plot_info,obj:errorPlot,type:-1,coltable:-1,shading:-1,legend:'',color:mycolor,psym:'',symsize:0e,thick:thick,linestyle:0,$
                            xPtr:ptr_new(),yPtr:ptr_new(),zPtr:ptr_new(),iPtr:ptr_new(),dxPtr:ptr_new(xerr,no_copy=no_copy),dyPtr:ptr_new(yerr,no_copy=no_copy),$
                            dzPtr:ptr_new(zerr,no_copy=no_copy),diPtr:ptr_new(),zpos:zpos,layer:long(layer),hide:0b}]
          endif
       endelse
    endelse
    if obj_valid(self.drawxAxis[2]) and (threedplot and (~zaxisexist)) then begin  ;adjust color bar position
       self.drawxAxis[2]->setproperty,location=[1+self.cbarpos[0]-cshift/2.,-cshift/4.,zclip[0]-0.1],range=1+self.cbarpos-cshift/2.
       self.drawyAxis[2]->setproperty,location=[1+self.cbarpos[0]-cshift/2.,-cshift/4.,zclip[0]-0.1]
       self.drawxAxis[3]->setproperty,location=[1+self.cbarpos[1]-cshift/2.,1-cshift/4.,zclip[0]-0.1],range=1+self.cbarpos-cshift/2.
       self.drawyAxis[3]->setproperty,location=[1+self.cbarpos[1]-cshift/2.,-cshift/4.,zclip[0]-0.1]
       self.colBar->setproperty,geomx=1+self.cbarpos-cshift/2.
    endif
    self.drawGroup->add,plotobj
    if n_elements(*self.plotInfo) eq 0 then $
       *self.plotInfo = newplotInfo $
    else $
       *self.plotInfo = [*self.plotInfo,newplotInfo]
    if ((type eq 2) or (type eq 4) or keyword_set(line3d)) and ((~zaxisexist) or (n3d eq 0))then self->reset3d    ;initial rotation for surface and volume plot
    onedplot = where((*self.plotInfo)[*].type eq 0,count0)
    twodplot = where(((*self.plotInfo)[*].type gt 0) and ((*self.plotInfo)[*].type ne 3),count1)
    conplot  = where((*self.plotInfo)[*].type eq 1,count2)
    sufplot  = where((*self.plotInfo)[*].type eq 2,count3)
    polyplot = where((*self.plotInfo)[*].type eq 3,count4)
    volplot  = where((*self.plotInfo)[*].type eq 4,count5)
    ;allow(disallow) changing ztitle,zran,colortable, disallow(allow) changing color,psym,and linestyle
    sensitive = obj_valid(self.drawzAxis)
    self->my_widget_control,['dm_zaxismenu','dm_zgridBut'],sensitive=sensitive
    self->my_widget_control,['dm_showcposBut','dm_gridpositionmenu'],sensitive=1-sensitive
    if (~sensitive) then self->setproperty,zlog=0,/nodraw else self.zgrid->setproperty,hide=(~self.showzgrid)
    self->my_widget_control,'dm_vtcolmenu',sensitive=(count2 gt 0)
    sensitive = (count1 gt 0)
    self->my_widget_control,'dm_'+['iaxismenu','cs_coltable','cs_gamma','cs_shade','cs_hidecbar'],sensitive=sensitive
    id = self->my_widget_id('dm_cs_hidecbar') 
    if sensitive then dm_set_button,id,~self.hideIntbar,onstring='Hide Colorbar',offstring='Show Colorbar'
    self->my_widget_control,'dm_'+['ititBut','cbarfontBut','imajorBut','iminorBut','iticklenBut','isubticklenBut'],sensitive=(~self.hideIntbar)
    sensitive = (count0 gt 0)
    self->my_widget_control,'dm_'+['psymBut','lineBut','lgndmenu'],sensitive=sensitive
    id = self->my_widget_id('dm_cs_hidelegend')
    if id gt 0 then widget_control,id,sensitive=sensitive
    new_yconv = [self.legdpos[1],1]
    new_xconv = [self.legdpos[0]-cshift,1]
    if sensitive then begin
       self.drawLegend->setproperty,hide=self.hideLegend,ycoord_conv=new_yconv,xcoord_conv=new_xconv
       dm_set_button,id,~self.hideLegend,onstring='Hide Legend',offstring='Show Legend'
    endif else $
       self.drawLegend->setproperty,/hide,ycoord_conv=new_yconv,xcoord_conv=new_xconv
    ;for volume plot,disallow x,y,zlog
    if count5 gt 0 then begin
       self->my_widget_control,'dm_'+['xlogBut','ylogBut','zlogBut'],sensitive=0
       self->setproperty,xlog=0,ylog=0,zlog=0,/nodraw
    endif else $
       self->my_widget_control,'dm_'+['xlogBut','ylogBut','zlogBut'],sensitive=1 
    ;for surfplot, disallow x,ylog in some casese
    if count3 gt 0 then begin
       if n_elements(*(*self.plotInfo)[sufplot[0]].xptr) eq n_elements(*(*self.plotInfo)[sufplot[0]].zptr) then begin
          self->my_widget_control,'dm_'+['xlogBut','ylogBut'],sensitive=0
          self->setproperty,xlog=0,ylog=0,/nodraw
       endif
    endif
    sensitive = (count5 gt 0)
    self->my_widget_control,'dm_'+['cs_volinterp','cs_volopacity','cs_volclip'],sensitive=sensitive
    if count5 gt 0 then self->my_widget_control,'dm_cs_shade',sensitive=~sensitive
    sensitive = (count0 gt 0) or (count4 gt 0)
    self->my_widget_control,'dm_pcolBut',sensitive=sensitive
    sensitive = (count0 gt 0) or (count1 gt 0)
    self->my_widget_control,'dm_saveasc',sensitive=sensitive
    if ~obj_valid(self.drawzAxis) then self.zran[*] = !values.f_nan
    tooltip = 'Right click or left double click over the plot to change its properties'+(self.compound?', over the upper left corner to show the plot menu.':'.')
    if ~self.tooltip[0] then widget_control,self.plotWin,tooltip = tooltip
    ;reconfigure save animation menu
    sensitive = obj_valid(self.drawzAxis) or (count2 gt 0) 
    self->my_widget_control,'dm_'+['animmenu','cs_animdir','cs_animspd'],sensitive=sensitive
    anim_spin  = obj_valid(self.drawzAxis)
    anim_slice = (count5 gt 0)
    anim_cut   = ((count2 gt 0) and (~anim_spin)) 
    if sensitive then begin
       anim_type = ['gif']
       if self.idl_version ge 8.1 then anim_type = [anim_type,'mp4','avi'] $
       else if self.mpeglicense then   anim_type = [anim_type,'mpg']
       if self.idl_version ge 6.3 then anim_type = [anim_type,'mj2']
       anim_menu = self->my_widget_id('dm_'+anim_type+'menu')
       self->destroy_menu,anim_menu,sensitiveonly=self.compound,nkid=nkid
       values = ['Spin',['X','Y','Z']+'-slice',['X','Y','Z']+'-slice (Dual Plots)',['X','Y']+'-cut']+'...'
       for i=0,n_elements(anim_menu)-1 do begin
           unames = 'dm_saveanim'+anim_type[i]+['spin',['x','y','z']+'slice',['x','y','z']+'slice2d',['x','y']+'cut']
           if nkid eq 0 and self.compound then begin  ;in compound mode, the context sensitive menu content can not be changed in some IDL versions.
              for j=0,8 do void = widget_button(anim_menu[i],value=values[j],uname=unames[j],sensitive=0)
           endif 
           if anim_spin then begin
              if self.compound then self->my_widget_control,unames[0],anim_menu[i],/sensitive $
              else void = widget_button(anim_menu[i],value=values[0],uname=unames[0])
           endif
           if anim_slice then begin
              if self.compound then self->my_widget_control,unames[1:6],anim_menu[i],/sensitive $
              else for j=1,6 do void = widget_button(anim_menu[i],value=values[j],uname=unames[j])
           endif
           if anim_cut then begin
              if self.compound then self->my_widget_control,unames[7:8],anim_menu[i],/sensitive $
              else for j=7,8 do void = widget_button(anim_menu[i],value=values[j],uname=unames[j])
           endif
       endfor
    endif
    self->setproperty,showxgrid=self.showxgrid,/nodraw  ;need to reset the grid menu
    if keyword_set(draw) then self->draw
end

;add a text to the object
;parameters:
;   xpos,ypos:          position of the text in the plot window, can be normalized (default) or in data unit.
;keywords:
;   alignment:          0:left justified (default) 1:right justified
;   description:        a string description of the text object
;   normalize:          0:xypos are in data unit (both default alignemnts will be 0.5), 1:xypos are in normalized unit (default)
;   orientation:        the angle of the baseline orientation, used to calculate baseline and updir if those keywords are not specified
;   baseline,updir:     baseline and updir vector for the text
;   vertical_alignment: 0:bottom justified 1:top justified (default)
;   offset:             the text will be placed by an offset*[updir] amount
;   otext:              output the text object 
pro dm_plot::add_text,text,xpos,ypos,zpos,alignment=alignment,color=color,coldefine=coldefine,normalize=normalize,fontname=fontname,fontsize=fontsize,orientation=orientation,$
    vertical_alignment=vertical_alignment,description=description,baseline=baseline,updir=updir,offset=offset,otext=otext
    if n_elements(text) eq 0 then return
    if n_elements(xpos) gt 1 then begin
       if n_elements(xpos) gt 2 then zpos = xpos[2]
       ypos = xpos[1]
       xpos = xpos[0]
    endif else begin
       if n_elements(xpos) eq 0 then xpos = 0.04
       if n_elements(ypos) eq 0 then ypos = 0.95 else ypos = ypos[0]
       if n_elements(zpos) ne 0 then zpos = zpos[0]
    endelse
    if n_elements(offset)  eq 0 then offset = 0.0 
    if n_elements(normalize) eq 0 then normalize = 1b
    if n_elements(alignment) eq 0 then alignment = ([0.5,0])[keyword_set(normalize)]
    if n_elements(vertical_alignment) eq 0 then vertical_alignment = ([0.5,1.0])[keyword_set(normalize)]
    if self.idl_version ge 6.0 then reg_extra = {register_properties:1}   ;register_properties keyword for IDL6.0 or later
    if n_elements(fontname) eq 0 then fontname = 'helvetica'
    if n_elements(fontsize) eq 0 then fontsize = self.fsize[1]
    if n_elements(color)    eq 0 then color    = (['white','black'])[self.bgcol]
    text = self->textadjust(text,fontname=fontname)
    self->getproperty,xconv=xcoord_conv,yconv=ycoord_conv,zconv=zcoord_conv,clip_planes=clip_planes,dimension=dim,zclip=zclip
    nsize = fix((1>min(dim/self.default[4:5]))*fontsize)
    ofont = obj_new('idlgrfont',fontname,size=nsize,substitute='Helvetica')
    if n_elements(zpos) eq 0 then begin
       if n_elements(orientation) eq 0 then orie = 0.0 else orie = orientation*!dtor
       orie_cos = cos(orie) & orie_sin = sin(orie)
       if n_elements(baseline) eq 0 then baseline = [orie_cos,orie_sin]
       if n_elements(updir) eq 0 then updir = [-orie_sin,orie_cos]
    endif else begin
       if n_elements(orientation) eq 0 then begin
          if n_elements(baseline) eq 0 then baseline =[1,0,0.]##self->rotmatrix([0,0,1],23)
          if n_elements(updir) eq 0 then updir = [0.,0.,1]
       endif else begin
          orie = orientation*!dtor   
          orie_cos = cos(orie) & orie_sin = sin(orie)
          if n_elements(baseline) eq 0 then baseline = [orie_cos,orie_sin,0]
          if n_elements(updir) eq 0 then updir = [-orie_sin,orie_cos,0]
       endelse
    endelse
    if keyword_set(normalize) then begin
       xcoord_conv = [xpos,1]
       ycoord_conv = [ypos,1]
       zcoord_conv = [zclip[0],zclip[0]]-0.09
    endif else begin
       if n_elements(zpos) ne 0 then begin
          locations = [xpos,ypos,zpos]+offset*updir
          if n_elements(reg_extra) ne 0 then reg_extra = create_struct(reg_extra,'CLIP_PLANES',clip_planes) else reg_extra = create_struct('CLIP_PLANES',clip_planes)
       endif else begin
          locations = [xpos,ypos]+offset*updir[0:1]
          zcoord_conv = [zclip[0],zclip[0]]-0.11
       endelse
    endelse
    otext = obj_new('idlgrtext',text,font=ofont,color=self->getcolor(color,define=coldefine),xcoord_conv=xcoord_conv,ycoord_conv=ycoord_conv,zcoord_conv=zcoord_conv,$
            vertical_alignment=vertical_alignment,recompute_dimensions=2,locations=locations,alignment=alignment,/enable_formatting,baseline=baseline,updir=updir,$
            _extra=reg_extra,uvalue={normalize:keyword_set(normalize)},description=description,render_method=self.render_method,name='text')
    if n_elements(zpos) ne 0 then self.drawGroup->add,otext else self.drawModel->add,otext
    self->showview
    help,ofont,output=id & id=strsplit(id,' ',/extract) & id=id[n_elements(id)-1]
    if n_elements(*self.textsize) eq 0 then *self.textsize=[id,dm_to_string(fontsize)] $
    else *self.textsize=[*self.textsize,id,dm_to_string(fontsize)]
end

;align the cut and slice plot window
pro dm_plot::aligncsplot
    if ~obj_valid(self.csplotobj) then return
    self.csplotobj->getproperty,tlb=tlb
    dm_center_kid,tlb,self.tlb,/side,space=5
end

;animate a surface or volume object
;parameters:
;   type:   0:spin 1:x-slice 2:y-slice 3:z-slice 4:x-slice(dual plot) 5:y-slice(dual plot) 6:z-slice(dual plot) 7:x-cut 8:y-cut   
pro dm_plot::animation,type
    if (type gt 8) or (type lt 0) then return
    index = where((*self.plotInfo)[*].obj eq self.select,count)
    if (type ne 0) and (count ne 1) then return
    if (type gt 0) and (type lt 4) then self->getaxislabel,type-1,label=label,unit=unit
    self->setproperty,/keyboard_events
    self.animation[0] = 1b & self.animation[1] = 0b
    if type eq 0 then begin
       interval = self.default[9]
    endif else if type lt 4 then begin
       self.select->getproperty,data0=idat
       tmp   = size(idat,/dimension) & nx = tmp[type-1]
       idat0 = idat
       ix = ([0L,nx-1L])[abs((type eq 3)-fix(self.animdir))]
       case type of   
            1:  xdat = *(*self.plotInfo)[index].xPtr
            2:  xdat = *(*self.plotInfo)[index].yPtr
            3:  xdat = *(*self.plotInfo)[index].zPtr
            else:
       endcase
       interval = self.default[10]
    endif else begin
       ind_step = 0L
       kill_csp = ~obj_valid(self.csplotobj)
       case type of 
            4: self->slice,0,ind_step=ind_step,n_step=n_step,/askinterval
            5: self->slice,1,ind_step=ind_step,n_step=n_step,/askinterval
            6: self->slice,2,ind_step=ind_step,n_step=n_step,/askinterval
            7: self->cut,0,ind_step=ind_step,n_step=n_step,/askinterval
            8: self->cut,1,ind_step=ind_step,n_step=n_step,/askinterval
       endcase
       if n_elements(n_step) eq 0 then return
       interval = self.default[11]
       wait,interval
    endelse 
    current = systime(/sec) & start = current
    while self.animation[0] do begin
          if (~self.animation[1]) then begin
             case type of
                  0:  self.drawGroup->rotate,[0,0,1],1-2*self.animdir,/premultiply
                  1:  if self.animdir then idat0[abs(ix):(nx-1),*,*] = 0 else idat0[0:abs(ix),*,*] = 0
                  2:  if self.animdir then idat0[*,abs(ix):(nx-1),*] = 0 else idat0[*,0:abs(ix),*] = 0
                  3:  if self.animdir then idat0[*,*,0:abs(ix)] = 0    else idat0[*,*,abs(ix):(nx-1)] = 0
                  4:  self->slice,0,ind_step=ind_step,/noquestion,/nototop
                  5:  self->slice,1,ind_step=ind_step,/noquestion,/nototop
                  6:  self->slice,2,ind_step=ind_step,/noquestion,/nototop
                  7:  self->cut,0,ind_step=ind_step,/noquestion,/nototop
                  8:  self->cut,1,ind_step=ind_step,/noquestion,/nototop
                  else:    
             endcase
             if ((current-start) gt 5) or self.animation[2] then tmp = '' else tmp = 'Press Esc to stop, press any other key to pause. '
             if (type eq 0) or (type gt 3) then strings = tmp $
             else strings = tmp+label+'='+dm_to_string(xdat[abs(ix)])+' '+unit
             if (type gt 0) and (type lt 4) then begin
                self.select->setproperty,data0=idat0
                self.select->computebounds
                ix = ix+1
                if ix eq nx then ix = -(nx-2) ;reverse direction
                if (ix lt 0) eq (~abs((type eq 3)-fix(self.animdir))) then idat0 = idat
             endif
             self->set_cursortxt,strings
          endif
          event = widget_event(/nowait)                   ;listening to all events
          if (~obj_valid(self)) then return               ;in case self or group_leader is destroyed
          wait,0.>(interval-(systime(/sec)-current))      ;restrict the animation speed
          current = systime(/sec)  
    endwhile        
    if obj_valid(self) then begin
       if keyword_set(kill_csp) and obj_valid(self.csplotobj) then begin
          if type ge 4 and type le 6 then self->slice,-1 $
          else if type ge 7 then self->cut,-1
       endif
       if (self.cuttype lt 0) and (self.slicetype lt 0) then self->setproperty,keyboard_events=0  ;no slice or cut
       self->set_cursortxt,''
       if type ne 0 then self->draw
       self.animation[2] = 1b   ;animation has started at least once
    endif
end


;returns an arrow for a line from p_start to p_end
;keywords:
;   angle: arrow angle, default is 20 degrees
;   length: arrow length, default=0.18<(0.2*(p_start to p_end distance))
function dm_plot::arrow,p_start,p_end,angle=angle,length=length
    self->getproperty,xran=xran,yran=yran,zran=zran,dimension=dim,is3d=is3d
    p0 = ([p_start,0.])[0:2]
    p1 = ([p_end,0.])[0:2]-p0
    r  = norm(p1) & theta = asin((-1.0)>(p1[2]/r)<1.0)/!dtor & phi = atan(p1[1],p1[0])/!dtor
    if n_elements(angle)  eq 0 then angle0 = 20.0 else angle0 = angle[0]
    if n_elements(length) eq 0 then length0 = 0.0 else length0 = length[0]
    if angle0  eq 0 then angle0 = 20.0
    if length0 eq 0 then length0 = ([0.03d,0.04d])[is3d]*norm([xran[1]-xran[0],([yran[1]-yran[0],zran[1]-zran[0]])[is3d]])
    cosarr = cos(angle0*!dtor) & sinarr = sin(angle0*!dtor) ;arrow angle
    ps = [[r-length0*cosarr,length0*sinarr,0.],[r,0.,0],[r-length0*cosarr,-length0*sinarr,0.],[r-length0*cosarr/2.0,0.,0]]
    rm = self->rotmatrix([0,1,0],theta)##self->rotmatrix([0,0,1],-phi)
    for i=0,n_elements(ps[0,*])-1 do ps[*,i] = ps[*,i]##rm+p0
    if ~self.isotropic then begin ;adjust arrow according to aspect ratio
       self.isotropic = 1b
       aspect = (yran[1]-yran[0])*float(1>(dim[0]))/(xran[1]-xran[0])/float(1>(dim[1]))
       center = (ps[*,0]+ps[*,2])/2.0
       index  = (abs(ps[0,0]-center[0]) le abs(ps[1,0]-center[1]))
       ratio1 = aspect^(2*index-1)
       ratio2 = sqrt((ps[0,0]-center[0])^2+(ps[1,0]-center[1])^2)/sqrt(((ps[index,0]-center[index])^2*ratio1)+(ps[1-index,0]-center[1-index])^2)
       ps     = self->arrow(p0,p1+p0,angle=angle0,length=(length0*ratio2))
       center = (ps[*,0]+ps[*,2])/2.0
       ps[index,[0,2]] = (ps[index,[0,2]]-center[index])*ratio1+center[index]
       self.isotropic = 0b
    endif
    return,ps[0:(n_elements(p_start)-1),*]
end


pro dm_plot::build_menu,menuid,menuname=menuname,value=value,uname=uname,ischeck=ischeck,ismenu=ismenu,issensitive=issensitive,isseparator=isseparator,propsheet=propsheet,kidmenu=kidmenu
    n_item = n_elements(value)
    if ((n_elements(menuid) eq 0) and (n_elements(menuname) eq 0)) or (n_item eq 0) then return
    if n_elements(uname)       ne n_item then return
    if n_elements(ischeck)     ne n_item then ischeck     = bytarr(n_item)
    if n_elements(ismenu)      ne n_item then ismenu      = bytarr(n_item)
    if n_elements(issensitive) ne n_item then issensitive = bytarr(n_item)+1b
    if n_elements(isseparator) ne n_item then isseparator = bytarr(n_item)
    if n_elements(menuid) eq 0 then menuid = widget_base(self.plotWin,/context_menu,uname=menuname)
    ind_kid = 0
    for i=0,n_item-1 do begin
        if ischeck[i] then begin
           void = dm_widget_button(menuid,value=value[i],uname=uname[i],separator=isseparator[i],menu=ismenu[i],sensitive=issensitive[i])
        endif else begin
           void = widget_button(menuid,value=value[i],uname=uname[i],separator=isseparator[i],menu=ismenu[i],sensitive=issensitive[i])
        endelse
        if (ismenu[i]) and (n_elements(kidmenu) gt ind_kid) then begin
           self->build_menu,void,value=(*(kidmenu[ind_kid])).value,uname=(*(kidmenu[ind_kid])).uname,ischeck=(*(kidmenu[ind_kid])).ischeck,ismenu=(*(kidmenu[ind_kid])).ismenu,$
                 issensitive=(*(kidmenu[ind_kid])).issensitive,isseparator=(*(kidmenu[ind_kid])).isseparator
           ind_kid = ind_kid+1
        endif
    endfor
    if (self.idl_version ge 6.0) and keyword_set(propsheet) then psheet = widget_button(menuid,value='Property Sheet...',uname='dm_cs_propsheet',/separator)
    if n_elements(kidmenu) ne 0 then ptr_free,kidmenu
end

;change color of certain objects
;keyword:
;   fill_color: if set, change the fill color
;   lineplot:   if set, change line plot color
;   onedplot:   if set, change 1-d plot colors
;   name:       a string used in the dilaog input title
pro dm_plot::change_color,object,fill_color=fill_color,lineplot=lineplot,name=name,onedplot=onedplot,cancel=cancel
    if keyword_set(onedplot) then begin
       index = where(((*self.plotInfo)[*].type eq 0) or ((*self.plotInfo)[*].type eq 3) ,count)
       if count eq 0 then return else object = (*self.plotInfo)[index].obj
    endif
    if n_elements(object) eq 0 then object = self.select
    if ~obj_valid(object[0]) then return
    if keyword_set(lineplot) then begin
       index = where((*self.plotInfo)[*].obj eq object[0],count)
       if count ne 1 then return else index = index[0]
       if (*self.plotInfo)[(index+1)<(n_elements(*self.plotInfo)-1)].type eq -1 then object = [object,(*self.plotInfo)[(index+1)<(n_elements(*self.plotInfo)-1)].obj] ;error bar
       if (*self.plotInfo)[(index-1)>0].type eq -3 then object = [object,(*self.plotInfo)[(index-1)>0].obj]                                                           ;arrow
       if n_elements(name) eq 0 then name = (['plot','polygon'])[(*self.plotInfo)[index].type eq 3]
    endif
    if n_elements(name) eq 0 then name=(['','fill','plot'])[keyword_set(fill_color)+2*(keyword_set(lineplot) or keyword_set(onedplot))]
    if keyword_set(fill_color) then begin
       object[0]->getproperty,fill_color=color
       if color[0] eq -1 then color = [255b,255b,255b]*self.bgcol
    endif else object[0]->getproperty,color=color
    all_col = self->getcolor(/list,keepbgcolor=keyword_set(fill_color))
    if keyword_set(onedplot) then begin
       iname = strarr(count) & default = intarr(count) & is_droplist = bytarr(count)+1b
       old  = self->getcolor((*self.plotInfo)[index].color,/name)
       for i=0,count-1 do begin
           iname[i] = (['line ','polygon '])[(*self.plotInfo)[index[i]].type eq 3]+dm_to_string(i)+':'
           default[i] = 0>(where(all_col eq old[i]))
       endfor
       if count eq 1 then iname=['color:']
       new = dm_dialog_input(iname,title='Set '+name+' color',default=default,is_droplist=is_droplist,droplist_content=ptr_new(all_col),xsize=100,dialog_parent=self.tlb,cancel=cancel,coldefine=color)
    endif else begin
       old = self->getcolor(color,/name)
       new = dm_dialog_input('color:',title='Set '+name+' color',default=0>(where(all_col eq old)),is_droplist=[1],droplist_content=ptr_new(all_col),xsize=100,dialog_parent=self.tlb,$
             parentobject=self,object=object,property=(['color','fill_color'])[keyword_set(fill_color)],apply=apply,cancel=cancel,coldefine=color)
    endelse
    if keyword_set(cancel) then begin
       if keyword_set(apply) then self->setproperty,_extra=(keyword_set(fill_color)?{fill_color:color}:{color:color}),object=object
       return
    endif
    if keyword_set(onedplot) then begin
       changeid = -1
       for i=0,count-1 do begin
           if (new[i] ne old[i]) or (new[i] eq 'user define') then begin
              if new[i] eq 'user define' then define = self->getdefinecolor(default=(*self.plotInfo)[index[i]].color,title=(count gt 1?iname[i]:'Define color'))
              (*self.plotInfo)[index[i]].color = self->getcolor(new[i],define=define)
              changeid = [changeid,index[i]]
           endif
       endfor
    endif else begin
       if new eq 'user define' then begin
          apply = 1b
          color = self->getdefinecolor(default=color)
       endif
    endelse
    if keyword_set(apply) or (new[0] ne old[0]) or (n_elements(changeid) gt 1) then begin
       new = self->getcolor(new[0],define=color)
       if keyword_set(lineplot) then begin
          (*self.plotInfo)[index].color = new
          changeid = [-1,index]
       endif
       if n_elements(changeid) gt 1 then self->setproperty,plotInfo=(*self.plotInfo),changeid=changeid[1:*] $
       else self->setproperty,_extra=(keyword_set(fill_color)?{fill_color:new}:{color:new}),object=object
    endif
end

;change the font size
;parameter:
;    index: -1-text, select keyword needs to be specified
;            0-tick text 1-x title 2-y title 3-z title 4-title 5-legend 6-cursorpos 7-corner text 8-color bar title
;keyword:
;    select: the selected text object
;    usehershey: 0-all fonts switched to ttf, 1-all fonts switched to hershey font, if present, all other keywords and parameters are ignored
;    fsize,all: combined to change the font size of all text
pro dm_plot::change_font,index,select=select,usehershey=usehershey,fsize=fsize,all=all
    redraw = 1b
    if n_elements(fsize) ne 0 and keyword_set(all) then begin
       for i=0,n_elements(self.font)-1 do self.font[i]->setproperty,size=fsize[0]
       self.fsize[*] = fsize[0] & self.fsize[6] = (10>(fix(fsize[0]-2))) & self.fsize[7] = (8>(fix(fsize[0]-2)))
       for j=0,1 do begin
           oChildArr = ([self.drawModel,self.drawGroup])[j]->IDL_Container::Get(/ALL, COUNT=nKids)  ;texts
           if nKids gt 0 then ind = where(obj_isa(oChildArr,'IDLgrText'),nKids)
           for i=0,nKids-1 do begin
               oChildArr[ind[i]]->getproperty,name=name,font=ofont 
               if name eq 'text' then begin
                  help,ofont,output=id & id=strsplit(id,' ',/extract) & id=id[n_elements(id)-1]
                  tmpid  = where(*self.textsize eq id)
                  (*self.textsize)[tmpid[0]+1] = dm_to_string(fsize[0])
               endif
           endfor
       endfor
    endif else if n_elements(usehershey) ne 0 then begin ;switch btw hershey font and ttf
       fonts = self.font & objs = [obj_new(),self.xtit,self.ytit,self.ztit,self.title,self.drawlegend,self.cursorpos,self.cornertxt,self.cbtit] ;axes
       for j=0,1 do begin
           oChildArr = ([self.drawModel,self.drawGroup])[j]->IDL_Container::Get(/ALL, COUNT=nKids)  ;texts
           if nKids gt 0 then ind = where(obj_isa(oChildArr,'IDLgrText'),nKids)
           for i=0,nKids-1 do begin
               oChildArr[ind[i]]->getproperty,name=name,font=ofont
               if name eq 'text' then begin
                  fonts = [fonts,ofont] & objs = [objs,oChildArr[ind[i]]]
               endif
           endfor
       endfor
       for i=0,n_elements(fonts)-1 do begin
           fonts[i]->getproperty,name=old,uvalue=uvalue
           if n_elements(uvalue) eq 0 then uvalue=['','']   ;font uvalue stores [previous ttf, previous hershey font]
           if stregex(old,'hershey',/boolean,/fold_case) then uvalue[1] = old else uvalue[0] = old
           if i ne 0 then begin
              fonts[i]->getproperty,name=old
              if i eq 5 then begin      ;legend
                 onedplot = where((*self.plotInfo)[*].type eq 0,onedcount)
                 if onedcount eq 0 then text = '' else text = (*self.plotInfo)[onedplot].legend
              endif else objs[i]->getproperty,strings=text
              text = self->textadjust(text,/reverse,fontname=old)
           endif
           if (~keyword_set(usehershey)) and (uvalue[0] ne '') then ttf = uvalue[0] else ttf='helvetica' 
           if keyword_set(usehershey) and (uvalue[1] ne '') then hshf = uvalue[1] else hshf='hershey*3'
           fonts[i]->setproperty,name=([ttf,hshf])[keyword_set(usehershey)],substitute='Helvetica'
           if i ne 0 then begin
              fonts[i]->getproperty,name=tmp & tmp = strlowcase(tmp)
              text = self->textadjust(text,fontname=tmp)
              if i eq 5 then begin  ;legend
                 if onedcount gt 0 then (*self.plotInfo)[onedplot].legend = text
              endif else objs[i]->setproperty,strings=text
           endif
           fonts[i]->setproperty,uvalue=uvalue
       endfor
    endif else begin
       if (index lt -1) or (index ge n_elements(self.font)) then return
       if index eq -1 then begin
          if n_elements(select) eq 0 then return
          if ~obj_valid(select) then return
          if ~obj_isa(select,'IDLgrText') then return
          select->getproperty,font=ofont,strings=text
          ofont->getproperty,name=old
          help,ofont,output=id & id=strsplit(id,' ',/extract) & id=id[n_elements(id)-1]
          tmpid  = where(*self.textsize eq id)
          fsize  = float((*self.textsize)[tmpid[0]+1])
          name   = 'text'
          text   = self->textadjust(text,/reverse,fontname=old)
       endif else begin
          ofont  = self.font[index]
          ofont->getproperty,name=old
          fsize  = self.fsize[index]
          name   = (['tick text','x title','y title','z title','title','legend','cursor status','corner text','color bar title'])[index]
          if (index gt 0) and (index lt n_elements(self.font)) then begin
             select = ([self.xtit,self.ytit,self.ztit,self.title,self.drawlegend,self.cursorpos,self.cornertxt,self.cbtit])[index-1]
             if index eq 5 then begin      ;legend
                onedplot = where((*self.plotInfo)[*].type eq 0,onedcount) 
                if onedcount eq 0 then text = '' else text = (*self.plotInfo)[onedplot].legend
             endif else begin
                select->getproperty,strings=text 
             endelse
             text = self->textadjust(text,/reverse,fontname=old)
          endif
       endelse
       old       = strlowcase(old)
       all_fonts = strlowcase(*self.fname0)
       tmp_fonts = *self.fname1          
       default   = dm_to_string([0>(where(all_fonts eq old)),fsize])
       old       = [old,dm_to_string(fsize)]
       new       = dm_dialog_input(['font name:','font size:'],title='Set '+name+' font',default=default,is_droplist=[1,0],droplist_content=ptr_new(tmp_fonts),xsize=130,$
                   dialog_parent=self.tlb,/return_number,cancel=cancel)
       if keyword_set(cancel) then return
       ind       = where(strlen(new) eq 0,count)
       if count gt 0 then new[ind]=old[ind]
       new[0]    = all_fonts[dm_to_number(new[0],/int)]
       if new[0] ne old[0] then begin
          ofont->setproperty,name=new[0],substitute='Helvetica'
          ofont->getproperty,name=tmp & tmp = strlowcase(tmp)
          if n_elements(text) ne 0 then begin
             text = self->textadjust(text,fontname=tmp) 
             if index eq 5 then begin  ;legend
                if onedcount gt 0 then (*self.plotInfo)[onedplot].legend = text
             endif else begin
                select->setproperty,strings=text
             endelse
          endif 
       endif
       if new[1] ne old[1] then begin
          if index ge 0 then $
             self.fsize[index]=(4>(dm_to_number(new[1],/int))) $
          else $
             (*self.textsize)[tmpid[0]+1]=dm_to_string(4>dm_to_number(new[1],/int))   
       endif
       redraw = ((new[0] ne old[0]) or (new[1] ne old[1]))
    endelse
    if redraw then self->draw       ;draw will update legend
end

;change title string
;parameter:
;    index:  0-text, select keyword needs to be specified
;            1-x title 2-y title 3-z title 4-title 5-legend title 6-color bar title 7-corner text title
;keyword:
;    select: the selected text object
;    new:    the new text, if absent, an input dialog window will appear
;    textobjdescp: description string of the text object for index=0, select doesn't need to be present
pro dm_plot::change_title,index,select=select,new=new,textobjdescp=textobjdescp
    if (index lt 0) or (index gt 7) then return
    if index eq 0 then begin
       if (n_elements(select) eq 0) and (n_elements(textobjdescp) eq 1) then begin
          for j=0,1 do begin
              oChildArr = ([self.drawModel,self.drawGroup])[j]->IDL_Container::Get(/ALL, COUNT=nKids)
              for i=0,nKids-1 do begin
                  if obj_isa(oChildArr[i],'IDLgrText') then begin
                     oChildArr[i]->getproperty,description=description
                     if description eq textobjdescp then begin
                        select = oChildArr[i]
                        break
                     endif
                  endif
              endfor
              if n_elements(select) ne 0 then break
          endfor
       endif
       if n_elements(select) ne 1 then return
       if ~obj_valid(select) then return
       if ~obj_isa(select,'IDLgrText') then return
    endif else $
       select = ([self.xtit,self.ytit,self.ztit,self.title,self.ltit,self.cbtit,self.cornertxt])[index-1]   
    name = (['text',['x ','y ','z','','legend ','colorbar ']+'title','corner text'])[index]
    select->getproperty,strings=title,font=ofont
    ofont->getproperty,name=fontname   
    title = self->textadjust(title,/reverse,fontname=fontname)
    if n_elements(new) eq 0 then new = dm_dialog_input(name+':',title='Set '+name,xsize=150,default=title,dialog_parent=self.tlb,info=self.textadjustinfo,cancel=cancel)
    if (new ne title) and (~keyword_set(cancel)) then begin
       case index of
            0: begin
               if strlen(new) eq 0 then obj_destroy,[ofont,select] $ 
               else select->setproperty,string=self->textadjust(new,fontname=fontname) 
               self->draw,/view
               end
            1: self->setproperty,xtit=new
            2: self->setproperty,ytit=new
            3: self->setproperty,ztit=new
            4: self->setproperty,title=new
            5: self->setproperty,ltitle=new
            6: self->setproperty,ititle=new
            7: self->setproperty,cornertxt=new
         else:
       endcase
    endif
end

;this function checks the presence of embedded format code(efc) in strings that might affect the draw view
;parameter:
;   new: a string
;   old: a string
;returns: 0-if the format code is absent in both new and old strings
;         1-otherwise
function dm_plot::checktextefc,new,old
    checks = '\![abdeilu]'
    if n_elements(new) ne 0 then in_new = stregex(new,checks,/fold_case,/boolean) else return,0
    if n_elements(old) ne 0 then in_old = stregex(old,checks,/fold_case,/boolean) else return,in_new
    return,(in_new or in_old)
end

;clear the motion events
pro dm_plot::clearmotionevent,no_kbrd=no_kbrd
    is3d = obj_valid(self.drawzAxis)    
    widget_control,self.plotWin,draw_motion_events=(self.motion_events or (self.showcpos and (~is3d)))
    widget_control,self.plotWin,/clear_events
    if keyword_set(no_kbrd) then self->setproperty,keyboard_events=0  ;remove keybord input events
    self.moveLegend = 0b
    if self.select eq self.title then begin
       self->set_view
       self->showview
    endif
end

;cut for 2d contour plots
;parameter:
;   type:        0:cut along x axis 1:cut along y axis 2:cut along arbitrary direction -1:disable
;keyword: 
;   askinterval: if set, ask for the animation interval
;   noquestion:  if set, no dialog window for the cut thickness and step
;   nototop:     if set, the cut plot window will not be push to the top
;   ind_step:    integer, used for saving animation, the returned value is |ind_step|++ or -(|ind_step|--) depending on the animation direction 
;   n_step:      returns the number of steps of animation
pro dm_plot::cut,type,askinterval=askinterval,noquestion=noquestion,nototop=nototop,ind_step=ind_step,n_step=n_step
    if (type lt -1) or (type gt 2) then return
    arb_cut = (type eq 2) ;arbitrary direction
    if type eq -1 then begin
       if obj_valid(self.zoomBox) then obj_destroy,[self.zoomBox,self.tranModel]
       self.cuttype = -1
       if obj_valid(self.csplotobj) then obj_destroy,self.csplotobj
       self->clearmotionevent,/no_kbrd
       self->set_cursortxt,''
       return
    endif
    self->getproperty,xran=xran,yran=yran
    if ~keyword_set(noquestion) then begin
       self->getaxislabel,1-(type mod 2),label=tlabel
       self->getaxislabel,(type mod 2),label=slabel
       info = 'Use 0 '+(['','or empty '])[arb_cut]+tlabel+' thickness to go through the '+(['intrinsic steps.','nearest points.'])[arb_cut]
       if obj_valid(self.csplotobj) then info = ['Clear the '+(['thickness','slope'])[arb_cut]+'value to remove the cut.',info]
       info = [info,slabel+([' step',' width'])[type eq 2]+' and decimal place are optional.']
       if obj_valid(self.select) then begin
          index = where((*self.plotInfo).obj eq self.select,count)
          if count ne 0 then begin
             if type eq 1 then tmpmax = max(*(*self.plotInfo)[index[0]].xPtr,min=tmpmin) $
             else tmpmax = max(*(*self.plotInfo)[index[0]].yPtr,min=tmpmin)
             res = (1>(ceil(2-alog10(abs([tmpmin,tmpmax])+1e-7))))
             info = [info,tlabel+' range=['+dm_to_string(tmpmin,res=res[0])+', '+dm_to_string(tmpmax,res=res[1])+']']
          endif
       endif
       if keyword_set(askinterval) then begin
          name = [tlabel,slabel,'','','']+[' thickness:',' step:','animation interval:','decimal place:','automatic range:']
          info = [info,'The interval is in seconds.','Press Esc button to stop the animation.']
          default = [self.cutinfo[0:1],self.default[11],self.cs_resl[type],self.fixcutrange]
          is_droplist = [0,0,0,0,1]
       endif else begin
          name = [tlabel,slabel,'','']+[' thickness:',([' step:',' width:'])[type eq 2],'decimal place:','automatic range:']
          default = [self.cutinfo[0:1],self.cs_resl[type],self.fixcutrange]
          is_droplist = [0,0,0,1]
       endelse
       if arb_cut then begin ;arbitray direction
          name = ['slope ('+tlabel+'/'+slabel+'):',name]
          default = [self.cutinfo[2],default]
          is_droplist = [0,is_droplist]
       endif
       answer = dm_dialog_input(name,default=default,/float,cancel=cancel,info=info,dialog_parent=self.tlb,is_droplist=is_droplist,droplist_content=ptr_new(['Yes','No']),/align_center,$
               /return_number)
       if keyword_set(cancel) then return
       if finite(answer[0],/nan)  then begin
          self->cut,-1
          return
       endif 
       self.cutinfo[0:1] = abs(answer[arb_cut:(arb_cut+1)])
       if arb_cut then self.cutinfo[2] = answer[0]
       self.fixcutrange = round(answer[3+keyword_set(askinterval)+arb_cut])
       if keyword_set(askinterval) and finite(answer[2]) then begin
          if answer[2] gt 0 then self.default[11] = answer[2]
       endif
       if finite(answer[2+keyword_set(askinterval)+arb_cut]) then begin
          if round(answer[2+keyword_set(askinterval)+arb_cut]) eq answer[2+keyword_set(askinterval)+arb_cut] then self.cs_resl[type] = answer[2+keyword_set(askinterval)+arb_cut] 
       endif
       if (~self.animation[0]) and (~self.animation[3]) then begin
          self->set_cursortxt,'Drag the cut '+(['box','line'])[self.cutinfo[0] eq 0]+' or use arrow keys to move it.',/nodraw
          self.animation[3] = 1b
       endif          
    endif else if obj_valid(self.zoomBox) then begin
       self.zoomBox->getproperty,data=data
       obj_destroy,[self.zoomBox,self.tranModel]
       self.drawWin->draw,self.tranView,/draw_instance
       tmpxmax = max(data[0,*],min=tmpxmin)
       tmpymax = max(data[1,*],min=tmpymin)
       if self.xlog then begin
          tmpxmax = 10.0^tmpxmax
          tmpxmin = 10.0^tmpxmin
       endif
       if self.ylog then begin
          tmpymax = 10.0^tmpymax
          tmpymin = 10.0^tmpymin
       endif
       xy0 = [(tmpxmax+tmpxmin)/2.0,(tmpymax+tmpymin)/2.0]
       if self.xlog then xy0[0] = alog10(xy0[0])
       if self.ylog then xy0[1] = alog10(xy0[1])
       if (xy0[0] gt xran[1]) or (xy0[0] lt xran[0]) then xy0[0] = mean(xran)
       if (xy0[1] gt yran[1]) or (xy0[1] lt yran[0]) then xy0[1] = mean(yran)
    endif
    self.cuttype = type
    if n_elements(xy0) eq 0 then xy0 = [mean(xran),mean(yran)]
    if n_elements(ind_step) ne 0 then begin
       log  = ([self.ylog,self.xlog])[(type mod 2)]
       ran1 = reform(([[yran],[xran]])[*,(type mod 2)])
       if log then ran1 = 10.0^ran1
       if self.cutinfo[0] eq 0 then begin
          index = where((*self.plotInfo)[*].type eq 1,count)
          if type eq 0 then begin
             uniqv = *(*self.plotInfo)[index[0]].yPtr
             for i=1,count-1 do uniqv = [uniqv,*(*self.plotInfo)[index[i]].yPtr]
          endif else begin
             uniqv = *(*self.plotInfo)[index[0]].xPtr
             for i=1,count-1 do uniqv = [uniqv,*(*self.plotInfo)[index[i]].xPtr]
          endelse
          index = where(uniqv ge ran1[0] and uniqv le ran1[1],count)
          if count ne 0 then uniqv = uniqv[index]
          uniqv = uniqv[uniq(uniqv,sort(uniqv))] & n_step = n_elements(uniqv)
          if self.animdir then xy0[1-(type mod 2)] = uniqv[n_step-1-abs(ind_step)] else xy0[1-(type mod 2)] = uniqv[abs(ind_step)]
       endif else begin
          n_step = fix((ran1[1]-ran1[0])/self.cutinfo[0]+0.5)
          if self.animdir then xy0[1-(type mod 2)] = ran1[1]-(abs(ind_step)+0.5)*self.cutinfo[0] else xy0[1-(type mod 2)] = ran1[0]+(abs(ind_step)+0.5)*self.cutinfo[0]
       endelse
       if log then xy0[1-(type mod 2)] = alog10(xy0[1-(type mod 2)])
       ind_step = ind_step+1
       if ind_step eq n_step then ind_step = -(n_step-2) ;reverse direction
    endif
    xys = self->cutzoombox(xy0,cutran=cutran)
    if ~obj_valid(self.zoomBox) then begin ;initialize the range zoombox
       self.zoomBox = obj_new('IDLgrPolyline',xys,color=self->zoomboxcolor(),xcoord_conv=norm_coord(xran),ycoord_conv=norm_coord(yran),thick=2)
       self.tranModel = obj_new('IDLgrModel')
       self.tranModel->add,self.zoomBox
       ;take a snap shot of current image
       self.drawWin->draw,self.drawView,/create_instance
       self.tranView->add,self.tranModel
    endif else begin
       self.zoomBox->setproperty,data=xys
    endelse
    self.drawWin->draw,self.tranView,/draw_instance
    self->cutdata,cutran=cutran,xdat=xdat,ydat=ydat,yerr=yerr,title=title,xtit=xtit,ytit=ytit,ylog=ylog,xran=xran,yran=yran,linestyle=linestyle,color=color,iregrid=iregrid
    if ~self.fixcutrange then begin
       xran = [!values.f_nan,!values.f_nan] & yran = [!values.f_nan,!values.f_nan]
    endif
    if keyword_set(iregrid) then begin
       ok = dialog_message('Cut is not available for irregular grid data.',dialog_parent=self.tlb,/info,/center)
       self->cut,-1
       tmp = temporary(n_step)  ;remove n_step, for saveanimation
       return
    endif
    if ~obj_valid(self.csplotobj) then begin
       self.drawView->getproperty,dimension=dim
       if self.idl_version ge 5.6 then scr_size = get_screen_size() else device,get_screen_size=scr_size
       if dim[0] eq scr_size[0] then dim = self.default[4:5]
       self.csplotobj = obj_new('dm_plot',xdat,ydat,yerr=yerr,title=title,xtit=xtit,ytit=ytit,ylog=ylog,xran=xran,yran=yran,parentobj=self,/nokeepcurrent,color=color,psym='circle',$
           linestyle=linestyle,background=(['black','white'])[self.bgcol],wtitle='Cut',xsize=dim[0],ysize=dim[1],render_method=self.render_method)
       self->aligncsplot   ;align plot windows
       selftotop = 1b
    endif else begin
       if n_elements(xdat) eq 0 then self.csplotobj->erase,/keepaxes,title=title,nototop=nototop $
       else self.csplotobj->setproperty,xdat=xdat,ydat=ydat,yerr=yerr,ylog=ylog,xran=xran,yran=yran,title=title,xtit=xtit,ytit=ytit,color=color,psym='circle',linestyle=linestyle,$
           bgcolor=self.bgcol,wtitle='Cut',nototop=nototop
    endelse
    self.csplotobj->draw,nototop=nototop
    self->setproperty,/keyboard_events,nototop=(keyword_set(nototop) and ~keyword_set(selftotop))
end

;get cut data for contour plots
;input keywords:
;    cutran: xran for y cuts, yran for xcuts, and a passthrough point for arbi cuts, if cutran[0]=cutran[1] then choose the closest single slice of the data
;output keywords:
;    xdat,xran,ydat,yerr,title,xtit,ytit,ylog,yran,linestyle,color
pro dm_plot::cutdata,cutran=cutran,xdat=xdat,xran=xran,ydat=ydat,yerr=yerr,ylog=ylog,yran=yran,title=title,xtit=xtit,ytit=ytit,linestyle=linestyle,color=color,iregrid=iregrid
    indcon = where((*self.plotInfo)[*].type eq 1,ncon)
    if ncon eq 0 then return
    grid  = bytarr(ncon)+(1b)
    if self.cutcolor then color = self->getcolor((['white','black'])[self.bgcol]) else color = self->getpalette((*self.plotInfo)[indcon[0]].coltable,/coloravg)
    tmp_color = color
    if (self.cuttype lt 0) or (self.cuttype gt 2) then return
    if self.cuttype eq 2 then begin
       xy0 = cutran
       cutran = [cutran[1],cutran[1]]
       if finite(self.cutinfo[0]) then cutran = ([-0.5,0.5])*abs(self.cutinfo[0]) else cutran = [0.0,0.0]
       if self.cutinfo[2] eq 0 then cutran = xy0[1]+cutran
    endif
    ran0 = [self.yran[0,self.ylog],self.xran[0,self.xlog]]
    ran1 = [self.yran[1,self.ylog],self.xran[1,self.xlog]]
    self->getproperty,xtit=xtit0,ytit=ytit0,itit=itit,xinfo=xinfo,yinfo=yinfo
    self->getaxislabel,1-(self.cuttype mod 2),label=title0,unit=unit
    if n_elements(cutran) eq 2 then begin
       if finite(cutran[0],/nan) then cutran[0] = ran0[self.cuttype mod 2]
       if finite(cutran[1],/nan) then cutran[1] = ran1[self.cuttype mod 2]
       xtit = ([xtit0,ytit0])[self.cuttype mod 2]
       count = 0 & okerr = 1b
       for i=0,ncon-1 do begin
           if n_elements(tmpx) eq n_elements((*(*self.plotInfo)[indcon[i]].zPtr)) then continue
           if ~grid[i] then continue 
           if okerr then okerr = ptr_valid((*self.plotInfo)[indcon[i]].dzPtr) 
           if okerr then begin
              if n_elements(*(*self.plotInfo)[indcon[i]].dzPtr) eq 0 then okerr = 0b
           endif
           if (self.cuttype mod 2) eq 0 then begin
              tmpx = (*(*self.plotInfo)[indcon[i]].xPtr)
              tmpy = (*(*self.plotInfo)[indcon[i]].yPtr)
           endif else begin
              tmpx = (*(*self.plotInfo)[indcon[i]].yPtr)
              tmpy = (*(*self.plotInfo)[indcon[i]].xPtr)
           endelse
           ;check xrange
           ind1 = where((tmpx ge ran0[1-(self.cuttype mod 2)]) and (tmpx le ran1[1-(self.cuttype mod 2)]),count1)
           if count1 eq 0 then continue
           ind2 = where((tmpy ge ran0[self.cuttype mod 2]) and (tmpy le ran1[self.cuttype mod 2]),count2)
           if count2 eq 0 then continue
           if (self.cuttype eq 2) and (self.cutinfo[2] ne 0) then begin
              tmpz = (*(*self.plotInfo)[indcon[i]].zPtr)
              if okerr then tmpe = (*(*self.plotInfo)[indcon[i]].dzPtr)
              if count1 ne n_elements(tmpx) then begin
                 tmpx = tmpx[ind1]
                 tmpz = tmpz[ind1,*]
                 if okerr then tmpe = tmpe[ind1,*]
              endif
              if count2 ne n_elements(tmpy) then begin
                 tmpy = tmpy[ind2]
                 tmpz = tmpz[*,ind2]
                 if okerr then tmpe = tmpe[*,ind2]
              endif
              ind1 = 0 & ind2 = 0
              tmpymax = max(tmpy,min=tmpymin) & ntmpy = n_elements(tmpy)
              tmpxmax = max(tmpx,min=tmpxmin) & ntmpx = n_elements(tmpx)
              if cutran[0] eq cutran[1] then begin   
                 loopx = (ntmpx gt (tmpxmax-tmpxmin)*self.cutinfo[2]/(tmpymax-tmpymin)*ntmpy) 
                 if loopx then begin
                    tmp = tmpy 
                    if ntmpy gt 1 then tmp[1:(ntmpy-1)] = (tmp[1:(ntmpy-1)]+tmp[0:(ntmpy-2)])/2.   
                    tmpy1 = xy0[1]+(tmpx-xy0[0])*self.cutinfo[2]
                    for j=0LL,ntmpx-1 do begin
                        if (tmpy1[j] le tmpymax) and (tmpy1[j] ge tmpymin) then begin
                           ind = where(tmp le tmpy1[j] ,count)
                           if count gt 0 then begin
                              if n_elements(xdat) eq 0 then begin
                                 xdat = tmpx[j]
                                 ydat = tmpz[j,ind[count-1]]
                                 if okerr then yerr = tmpe[j,ind[count-1]]
                              endif else begin
                                 xdat = [xdat,tmpx[j]]
                                 ydat = [ydat,tmpz[j,ind[count-1]]]
                                 if okerr then yerr = [yerr,tmpe[j,ind[count-1]]]
                              endelse
                           endif
                        endif
                    endfor
                 endif else begin
                    tmpx1 = xy0[0]+(tmpy-xy0[1])/self.cutinfo[2]
                    tmp = tmpx
                    if ntmpx gt 1 then tmp[1:(ntmpx-1)] = (tmp[1:(ntmpx-1)]+tmp[0:(ntmpx-2)])/2.   
                    for j=0LL,ntmpy-1 do begin
                        if (tmpx1[j] le tmpxmax) and (tmpx1[j] ge tmpxmin) then begin
                           ind = where(tmp le tmpx1[j] ,count)
                           if count gt 0 then begin
                              if n_elements(xdat) eq 0 then begin
                                 xdat = tmpx[ind[count-1]]
                                 ydat = tmpz[ind[count-1],j]
                                 if okerr then yerr = tmpe[ind[count-1],j]
                              endif else begin
                                 xdat = [xdat,tmpx[ind[count-1]]]
                                 ydat = [ydat,tmpz[ind[count-1],j]]
                                if okerr then yerr = [yerr,tmpe[ind[count-1],j]]
                              endelse
                           endif
                        endif
                    endfor
                 endelse   
              endif else begin   
                 tmpy1 = xy0[1]+(tmpx-xy0[0])*self.cutinfo[2]
                 for j=0LL,n_elements(tmpx)-1 do begin
                     ind = where((tmpy ge tmpy1[j]+cutran[0]) and (tmpy le tmpy1[j]+cutran[1]),count)
                     if count ne 0 then begin
                        if n_elements(xdat) eq 0 then begin
                           xdat = tmpx[j]
                           if count eq 1 then begin
                              ydat = tmpz[j,ind]
                              if okerr then yerr = tmpe[j,ind]
                           endif else begin
                              if self.idl_version ge 8.0 then $
                                 ydat = mean(tmpz[j,ind],dim=2,/nan) $ ;mean(dimension=dimension) is implemented in IDL 8.0
                              else $
                                 ydat = total(tmpz[j,ind],2,/nan)/(1.0>(total(finite(tmpz[j,ind]),2)))
                              if okerr then yerr = sqrt(total((tmpe[j,ind])^2,2,/nan))/(1.0>(total(finite(tmpe[j,ind]),2)))
                           endelse
                        endif else begin
                           xdat = [xdat,tmpx[j]]
                           if count eq 1 then begin
                              ydat = [ydat,tmpz[j,ind]]
                              if okerr then yerr = [yerr,tmpe[j,ind]]
                           endif else begin
                              if self.idl_version ge 8.0 then $
                                 ydat = [ydat,mean(tmpz[j,ind],dim=2,/nan)] $ ;mean(dimension=dimension) is implemented in IDL 8.0
                              else $
                                 ydat = [ydat,total(tmpz[j,ind],2,/nan)/(1.0>(total(finite(tmpz[j,ind]),2)))]
                              if okerr then yerr = [yerr,sqrt(total((tmpe[j,ind])^2,2,/nan))/(1.0>(total(finite(tmpe[j,ind]),2)))]
                           endelse
                        endelse
                     endif
                 endfor
              endelse
              if n_elements(uniqx) ne 0 then uniqx = [uniqx,tmpx] else uniqx = tmpx
           endif else begin
              if cutran[0] eq cutran[1] then begin
                 if cutran[0] le max(tmpy) then begin
                    tmp = tmpy & ntmp = n_elements(tmpy)
                    if ntmp gt 1 then tmp[1:(ntmp-1)] = (tmp[1:(ntmp-1)]+tmp[0:(ntmp-2)])/2.
                    ind = where(tmp le cutran[0],count)
                    if count gt 0 then begin
                       ind   = ind[count-1]
                       count = 1
                       tmpcv = tmpy[ind[0]]
                    endif
                 endif else count = 0
              endif else begin
                 ind = where((tmpy le cutran[1]) and (tmpy ge cutran[0]),count) 
              endelse
              if count ne 0 then begin
                 if count eq 1 then begin
                    if self.cuttype eq 0 then tmpy = reform((*(*self.plotInfo)[indcon[i]].zPtr)[*,ind]) $
                    else tmpy = reform((*(*self.plotInfo)[indcon[i]].zPtr)[ind,*])
                    if okerr then begin
                       if self.cuttype eq 0 then tmpe = reform((*(*self.plotInfo)[indcon[i]].dzPtr)[*,ind]) $
                       else tmpe = reform((*(*self.plotInfo)[indcon[i]].dzPtr)[ind,*])
                    endif
                 endif else begin
                    if self.idl_version ge 8.0 then begin ;mean(dimension=dimension) is implemented in IDL 8.0
                       if self.cuttype eq 0 then tmpy = mean((*(*self.plotInfo)[indcon[i]].zPtr)[*,ind],dim=2,/nan) $
                       else tmpy = mean((*(*self.plotInfo)[indcon[i]].zPtr)[ind,*],dim=1,/nan)
                    endif else begin
                       if self.cuttype eq 0 then tmpy = total((*(*self.plotInfo)[indcon[i]].zPtr)[*,ind],2,/nan)/(1.0>(total(finite((*(*self.plotInfo)[indcon[i]].zPtr)[*,ind]),2))) $
                       else tmpy = total((*(*self.plotInfo)[indcon[i]].zPtr)[ind,*],1,/nan)/(1.0>(total(finite((*(*self.plotInfo)[indcon[i]].zPtr)[ind,*]),1)))
                    endelse
                    if okerr then begin
                       if self.cuttype eq 0 then begin
                          tmpe = sqrt(total(((*(*self.plotInfo)[indcon[i]].dzPtr)[*,ind])^2,2,/nan))
                          nerr = total(finite((*(*self.plotInfo)[indcon[i]].dzPtr)[*,ind]),2) 
                       endif else begin
                          tmpe = sqrt(total(((*(*self.plotInfo)[indcon[i]].dzPtr)[ind,*])^2,1,/nan))
                          nerr = total(finite((*(*self.plotInfo)[indcon[i]].dzPtr)[ind,*]),1) 
                       endelse
                       nerr = 1>(nerr)
                       tmpe = tmpe/nerr
                    endif
                 endelse
                 if (i ne ncon-1) or (n_elements(uniqx) ne 0) then begin
                    if n_elements(uniqx) ne 0 then uniqx = [uniqx,tmpx] else uniqx = tmpx 
                 endif
                 if n_elements(xdat) ne 0 then begin
                    xdat = [xdat,temporary(tmpx)]
                    ydat = [ydat,temporary(tmpy)]
                    if okerr then yerr = [yerr,temporary(tmpe)]
                 endif else begin
                    xdat = temporary(tmpx)
                    ydat = temporary(tmpy)
                    if okerr then yerr = temporary(tmpe)
                 endelse
              endif
           endelse
       endfor
       if (~okerr) and (n_elements(yerr) ne 0) then tmp = temporary(yerr)
       if cutran[0] eq cutran[1] then begin
          if count eq 0 then tmpcv = float(cutran[0])
          res   = finite(self.cs_resl[self.cuttype])?self.cs_resl[self.cuttype]:((abs(tmpcv) ge 1)?3:(1>(ceil(3-alog10(abs(tmpcv)+1e-7)))))
          title = title0+'='+dm_to_string(tmpcv,res=res)
       endif else begin
          res   = finite(self.cs_resl[self.cuttype])?self.cs_resl[self.cuttype]:(1>(ceil(2-alog10(abs(cutran[1]-cutran[0])+1e-7))))   ;+1e-7 to avoid float uncertainty
          title = title0+'=['+dm_to_string(cutran[0],res=res)+', '+dm_to_string(cutran[1],res=res)+']'
          if abs(cutran[1]-cutran[0]) le self.qoffsetthreshold then tmpcv = mean(cutran)
       endelse
       if strlen(unit) ne 0 then title = title+ ' '+unit
       if (self.cuttype lt 2) and (total(abs(xinfo.vaxis)) ne 0) and (total(abs(yinfo.vaxis)) ne 0) and (n_elements(tmpcv) ne 0) then begin
          if self.cuttype eq 0 then xtit = dm_set_viewlabel(xinfo.label,xinfo.vaxis,xinfo.offset+dm_to_number(dm_to_string(tmpcv,res=res))*yinfo.vaxis,xinfo.unit)
          if self.cuttype eq 1 then xtit = dm_set_viewlabel(yinfo.label,yinfo.vaxis,yinfo.offset+dm_to_number(dm_to_string(tmpcv,res=res))*xinfo.vaxis,yinfo.unit)
       endif else if (self.cuttype eq 2) and (self.cutinfo[2] ne 0) then begin
          res = (1>(ceil(2-alog10(abs(xy0)+1e-7))))
          title = 'through ('+dm_to_string(xy0[0],res=res[0])+', '+dm_to_string(xy0[1],res=res[1])+'), slope='+dm_to_string(self.cutinfo[2])
       endif
    endif
    iregrid = total(grid eq 0)
    if n_elements(xdat) eq 0 then return
    ind = where(finite(ydat),count)      ;remove nan
    if count ne n_elements(ydat) then begin
       if count eq 0 then begin
          if n_elements(yerr) eq n_elements(ydat) then tmp = temporary(yerr)
          tmp = temporary(xdat) & tmp = temporary(ydat)
          return
       endif else begin
          if n_elements(yerr) eq n_elements(ydat) then yerr = yerr[ind]
          xdat = xdat[ind]
          ydat = ydat[ind]
       endelse
    endif
    ;apply xrange
    ind = where((xdat ge ran0[1-(self.cuttype mod 2)]) and (xdat le ran1[1-(self.cuttype mod 2)]),count)
    if count eq 0 then begin
       tmp = temporary(xdat) & return
    endif
    if (count ne n_elements(xdat)) then begin
       if n_elements(yerr) eq n_elements(ydat) then yerr = yerr[ind]
       xdat = xdat[ind]
       ydat = ydat[ind]
    endif  
    ;rebin according to the cut step
    if finite(self.cutinfo[1]) then begin   
       if (self.cutinfo[1] ne 0) then begin
          dm_step_bin,self.cutinfo[1],xdat,ydat=ydat,yerr=yerr,/checkfinite,group_leader=self.tlb
          rebinned = 1b
       endif
    endif 
    if ~keyword_set(rebinned) and (n_elements(uniqx) ne 0) then begin
       uniqx = uniqx[uniq(uniqx,sort(uniqx))]
       dm_step_bin,1,xdat,ydat=ydat,yerr=yerr,/checkfinite,uniq_val=uniqx,group_leader=self.tlb
    endif
    if strlen(itit) eq 0 then ytit = 'Intensity' else ytit=itit
    linestyle = (['no line','solid'])[keyword_set(rebinned)]
    xran = [!values.f_nan,!values.f_nan] & yran = [!values.f_nan,!values.f_nan]
    if obj_valid(self.csplotobj) then self.csplotobj->getproperty,ylog=ylog,linecolor=color else ylog = self.ilog
    if total(abs(color-tmp_color)) ne 0 then begin
       self.cutcolor = ~self.cutcolor
       if obj_isa(self.parentobj,'dcs_mslice') then self.parentobj->setproperty,slice_cutcolor=self.cutcolor
    endif
    if obj_valid(self.csplotobj) and self.fixcutrange then begin
       self.csplotobj->getproperty,yran=yran,xran=xran,nplot=nplot
       if nplot eq 0 then self->getproperty,iran=yran,ilog=ylog
    endif else if self.fixcutrange then begin
       self->getproperty,iran=yran
       if (self.cuttype mod 2) eq 0 then xran = self.xran[*,self.xlog] $
       else xran = self.yran[*,self.ylog]
    endif
    if ylog and (total(finite(yran,/nan)) eq 0) then yran = 10.0^yran
end

;cutting step for key press events
pro dm_plot::cutstep,xy0,key
    if n_elements(key) ne 1 then return
    if n_elements(xy0) ne 2 then return
    negative = (key eq 5) or (key eq 8)
    y_dir = (self.cuttype eq 0) or ((self.cuttype eq 2) and ((key eq 7) or (key eq 8)))
    step = abs(self.cutinfo[0]) 
    if (self.cuttype eq 2) and (~y_dir) then begin
       if finite(self.cutinfo[1]) then step = abs(self.cutinfo[1]) $
       else begin
          if self.cutinfo[2] eq 0 then y_dir = 1b $
          else step = abs(self.cutinfo[0]/self.cutinfo[2])
       endelse
    endif
    if finite(step,/nan) then step = 0
    indcon = where((*self.plotInfo)[*].type eq 1,ncon)
    if ncon eq 0 then return
    if step eq 0 then begin
       self->getproperty,xran=xran,yran=yran
       nend = 0
       for i=0,ncon-1 do begin
           if (self.cuttype eq 2) and (self.cutinfo[2] ne 0) then begin
              xmin = min((*(*self.plotInfo)[indcon[i]].xPtr),max=xmax)
              ymin = min((*(*self.plotInfo)[indcon[i]].yPtr),max=ymax)
              tmpxran = [(xmin)>(xran[0]),(xmax)<(xran[1])]
              tmpyran = [(ymin)>(yran[0]),(ymax)<(yran[1])]
              tmpxys = reform([[[tmpxran,xy0[0]+(tmpyran-xy0[1])/self.cutinfo[2]]],[[xy0[1]+self.cutinfo[2]*(tmpxran-xy0[0]),tmpyran]]])
              ind = where((tmpxys[*,0] ge tmpxran[0]) and (tmpxys[*,0] le tmpxran[1]) and (tmpxys[*,1] ge tmpyran[0]) and (tmpxys[*,1] le tmpyran[1]),count)
              if count ne 0 then xy0 = [mean(tmpxys[*,0]),mean(tmpxys[*,1])]
           endif
           if y_dir then tmp = (*(*self.plotInfo)[indcon[i]].yPtr) $
           else tmp = (*(*self.plotInfo)[indcon[i]].xPtr)
           tmin = min(abs(tmp-xy0[y_dir]),indmin)
           ntmp = n_elements(tmp)
           if keyword_set(negative) then begin
              if n_elements(xytmp) ne 0 then xytmp = ((tmp[0>(indmin-1)])>(xytmp)) $
              else xytmp = (tmp[0>(indmin-1)])
              nend = nend+(indmin eq 0)
           endif else begin
              if n_elements(xytmp) ne 0 then xytmp = ((tmp[(ntmp-1)<(indmin+1)])<(xytmp)) $
              else xytmp = (tmp[(ntmp-1)<(indmin+1)])
              nend = nend+(indmin eq ntmp-1)
           endelse
       endfor
       xy0[y_dir] = xytmp
    endif else begin
       xy0[y_dir] = xy0[y_dir]+([1,-1])[negative]*step
       if self.cuttype ne 2 then begin
          nend = 0
          for i=0,ncon-1 do begin
              if y_dir then tmp = (*(*self.plotInfo)[indcon[i]].yPtr) $
              else tmp = (*(*self.plotInfo)[indcon[i]].xPtr)
              itmp = where((tmp le xy0[y_dir]+step/2.) and (tmp ge xy0[y_dir]-step/2.),count)
              if count ne 0 then break else begin
                 if negative then itmp = (where(tmp le xy0[y_dir]-step/2.0,count))[-1] $
                 else itmp = (where(tmp ge xy0[y_dir]+step/2.0,count))[0]
                 if count eq 0 then nend = nend+1 else begin
                    xy0[y_dir] = tmp[itmp]
                    break
                 endelse
              endelse
          endfor
       endif
    endelse
    if n_elements(nend) ne 0 then end_reached = (nend eq ncon)
    if keyword_set(end_reached) and (self.cuttype eq 2) and (self.cutinfo[2] ne 0) then begin ;to make sure the same xy0 is returned when end_reached
       for i=0,ncon-1 do begin
           if y_dir then tmp = (*(*self.plotInfo)[indcon[i]].yPtr) $
           else tmp = (*(*self.plotInfo)[indcon[i]].xPtr)
           ind = where(tmp eq xy0[y_dir],count)
           if count ne 0 then begin
              if y_dir then tmp = (*(*self.plotInfo)[indcon[i]].xPtr) $
              else tmp = (*(*self.plotInfo)[indcon[i]].yPtr)
              tmin = min(abs(tmp-xy0[1-y_dir]),indmin)
              xy0[1-y_dir] = tmp[indmin]
              break
           endif
       endfor
    endif
end

;calculate the zoombox coordinates for cuts
function dm_plot::cutzoombox,xy0,cutran=cutran,end_reached=end_reached
    self->getproperty,xran=xran,yran=yran
    stp = (finite(self.cutinfo[0])?(self.cutinfo[0]):0.0)
    xys = fltarr(3,5)
    xys[(self.cuttype mod 2),*] = reform(([[xran,xran[1],xran[0],xran[0]],[yran,yran[1],yran[0],yran[0]]])[*,(self.cuttype mod 2)])
    if self.cuttype eq 2 then begin
       if self.cutinfo[2] eq 0 then begin
          xys[1,*] = (yran[0])>(xy0[1]+[0.5,0.5,-0.5,-0.5,0.5]*stp)<(yran[1])
       endif else begin
          xys = [0,0,0]
          yls = xy0[1]+stp/2.*[-1.0,1.0]+(xran[0]-xy0[0])*self.cutinfo[2]
          yls = reverse(yls[sort(yls)])
          ind = where((yls ge yran[0]) and (yls le yran[1]),count)
          if count ne 0 then begin
             if ind[0] eq 1 then begin
                xys = [[xys],[[xran[0],yran[1],0.0]],[[xran[0],yls[ind[0]],0.0]]]
             endif else begin
                xys = [[xys],[[xran[0],yls[ind[0]],0.0]]]
                if count eq 2 then xys = [[xys],[[xran[0],yls[ind[1]],0.0]]] $
                else xys = [[xys],[[xran[0],yran[0],0.0]]]
             endelse
          endif
          xds = xy0[0]+(yran[0]-xy0[1]+stp/2.*[-1.0,1.0])/self.cutinfo[2]
          xds = xds[sort(xds)]
          ind = where((xds ge xran[0]) and (xds le xran[1]),count)
          for i=0,count-1 do xys = [[xys],[[xds[ind[i]],yran[0],0.0]]]
          yrs = xy0[1]+stp/2.*[-1.0,1.0]+(xran[1]-xy0[0])*self.cutinfo[2]
          yrs = yrs[sort(yrs)]
          ind = where((yrs ge yran[0]) and (yrs le yran[1]),count)
          if count ne 0 then begin
             if ind[0] eq 1 then begin
                xys = [[xys],[[xran[1],yran[0],0.0]],[[xran[1],yrs[ind[0]],0.0]]]
             endif else begin
                xys = [[xys],[[xran[1],yrs[ind[0]],0.0]]]
                if count eq 2 then xys = [[xys],[[xran[1],yrs[ind[1]],0.0]]] $
                else xys = [[xys],[[xran[1],yran[1],0.0]]]
             endelse
          endif
          xus = xy0[0]+(yran[1]-xy0[1]+stp/2.*[-1.0,1.0])/self.cutinfo[2]
          xus = reverse(xus[sort(xus)])
          ind = where((xus ge xran[0]) and (xus le xran[1]),count)
          for i=0,count-1 do xys = [[xys],[[xus[ind[i]],yran[1],0.0]]]
          if n_elements(xys) eq 3 then begin
             if arg_present(end_reached) then end_reached = 1b
             return,xys
          endif
          xys = [[xys[*,1:*]],[xys[*,1]]]
       endelse
       cutran = xy0
    endif else begin
       log = ([self.ylog,self.xlog])[self.cuttype]
       ran  = reform(([[[self.yran]],[[self.xran]]])[*,*,self.cuttype])
       ran1 = reform(([[yran],[xran]])[*,self.cuttype])
       if n_elements(xy0) eq 2 then xy0 = xy0[1-self.cuttype]
       if log then cutran = 10.0^xy0+[-0.5,0.5]*self.cutinfo[0] $
       else cutran = xy0+[-0.5,0.5]*self.cutinfo[0]
       if cutran[1] gt ran[1,log] then cutran[0] = ran[1,log]-self.cutinfo[0] $
       else if cutran[0] lt ran[0,log] then cutran[1] = ran[0,log]+self.cutinfo[0]
       xys[1-self.cuttype,*] = [0,0,1,1,0]*cutran[0]+[1,1,0,0,1]*cutran[1]
       if log then xys[1-self.cuttype,*] = alog10((1e-20)>(xys[1-self.cuttype,*]))
       xys[1-self.cuttype,*] = (ran1[0])>(xys[1-self.cuttype,*])<(ran1[1])  
       cutran = (ran[0,log])>(cutran)<(ran[1,log])
    endelse
    xys[2,*] = 0.2
    if arg_present(end_reached) and obj_valid(self.zoomBox) then begin
       self.zoomBox->getproperty,data=data
       end_reached = (total(abs(float(data)-float(xys))) eq 0)
    endif
    return,xys
end

;destroy all entries in a menu, the menu itself is kept. if sensitiveonly keyword is set, only change to insensitive
pro dm_plot::destroy_menu,menuid,sensitiveonly=sensitiveonly,nkid=nkid
    nkid = 0L
    if n_elements(menuid) eq 0 then return
    for i=0,n_elements(menuid)-1 do begin
        if ~widget_info(menuid[i],/valid_id) then continue
        wid_child = widget_info(menuid[i],/child) 
        while wid_child ne 0 do begin
              wid_sibling = wid_child
              wid_child = widget_info(wid_child,/sibling)
              if keyword_set(sensitiveonly) then widget_control,wid_sibling,sensitive=0 $
              else widget_control,wid_sibling,/destroy
              nkid = nkid+1
        endwhile
    endfor
end

;draw the data using object graphics
pro dm_plot::draw,nototop=nototop,view=view,zoom=zoom
    if keyword_set(view) then begin ;show the view only
       self.drawView->setproperty,hide=0
       self->showview
       if ~keyword_set(nototop) then self->totop ;push the drawwindow to the top
       return
    endif
    nplot = n_elements(*self.plotInfo)
    if nplot eq 0 then begin
       if obj_valid(self.drawxAxis[0]) then self->set_view else self.drawView->setproperty,hide=0,color=[255b,255b,255b]*self.bgcol
       self->showview
       if ~keyword_set(nototop) then self->totop ;push the drawwindow to the top
       return
    endif

    widget_control,self.tlb,update=0
    widget_control,self.plotWin,/DRAW_EXPOSE_EVENTS
    widget_control,/hourglass

    self->getproperty,xran=xran,yran=yran,zran=zran,iran=iran,xconv=xconv,yconv=yconv,zconv=zconv,iconv=iconv,is3d=is3d,clip_planes=clipplane,zclip=zclip
    if is3d then begin
       cshift = [-0.5,0]
       ;remove certain axes
       if obj_valid(self.drawxAxis[1]) then obj_destroy,self.drawxAxis[1]
       if obj_valid(self.drawyAxis[1]) then obj_destroy,self.drawyAxis[1]
    endif else begin
       cshift = [0,0]
       zconv  = [0.0,1.0]
    endelse
    self.drawxAxis[0]->setproperty,location=[0,cshift]
    self.drawyAxis[0]->setproperty,location=[cshift,0]

    ;set x,y coordinate conversions
    oChildArr = self.drawModel->IDL_Container::Get(/ALL, COUNT=nKids)
    for i=0,nKids-1 do begin
        if obj_isa(oChildArr[i],'IDLgrAxis') then begin                 ;axis
           oChildArr[i]->getproperty,direction=dir
           if dir eq 1 then begin
              oChildArr[i]->setproperty,ycoord_conv=iconv+cshift/4.,range=self.iran[*,self.ilog],major=self.tickmajor[3+4*self.ilog],minor=self.tickminor[3+4*self.ilog],log=self.ilog
           endif
           oChildArr[i]->getproperty,ticktext=tick
           if obj_valid(tick) then tick->setproperty,font=self.font[0],recompute_dimensions=2
           oChildArr[i]->setproperty,ticktext=tick,thick=self.axisthick
        endif else if obj_isa(oChildArr[i],'IDLgrContour') then begin   ;contour
           i_level = iran[0]+findgen(256)/255.0*(iran[1]-iran[0])
           oChildArr[i]->setproperty,ycoord_conv=iconv+cshift/4.,data_value=transpose([[i_level],[i_level]]),c_value=i_level,geomy=i_level,shading=max((*self.plotInfo)[*].shading)
        endif else if obj_isa(oChildArr[i],'IDLgrText') then begin      ;text
           oChildArr[i]->getproperty,name=name,uvalue=uvalue,location=location
           if name eq 'text' then begin
              if ~uvalue.normalize then begin ;position is in data unit
                 if is3d then oChildArr[i]->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,clip_planes=clipplane $ 
                 else oChildArr[i]->setproperty,xcoord_conv=xconv,ycoord_conv=yconv,clip_planes=clipplane 
              endif
           endif
        endif
    endfor

    oChildArr = self.drawGroup->IDL_Container::Get(/ALL, COUNT=nKids)
    for i=0,nKids-1 do begin
        if obj_isa(oChildArr[i],'IDLgrAxis') then begin
           oChildArr[i]->getproperty,direction=dir
           if dir eq 0 then begin
              oChildArr[i]->setproperty,xcoord_conv=xconv+cshift,range=self.xran[*,self.xlog],log=self.xlog,$
                  major=self.tickmajor[0+4*self.xlog],minor=self.tickminor[0+4*self.xlog],ticklen=self.ticklen[0+4*self.isotropic],subticklen=self.subticklen[0+4*self.isotropic]
           endif else if dir eq 1 then begin
              oChildArr[i]->setproperty,ycoord_conv=yconv+cshift,range=self.yran[*,self.ylog],log=self.ylog,$
                  major=self.tickmajor[1+4*self.ylog],minor=self.tickminor[1+4*self.ylog],ticklen=self.ticklen[1+4*self.isotropic],subticklen=self.subticklen[1+4*self.isotropic]
           endif else begin
              oChildArr[i]->setproperty,zcoord_conv=zconv,range=self.zran[*,self.zlog],log=self.zlog,major=self.tickmajor[2+4*self.zlog],minor=self.tickminor[2+4*self.zlog]
           endelse
           oChildArr[i]->getproperty,ticktext=tick
           if (oChildArr[i] ne self.drawxAxis[1]) and (oChildArr[i] ne self.drawyAxis[1]) and obj_valid(tick) then tick->setproperty,recompute_dimensions=2,font=self.font[0]
           oChildArr[i]->setproperty,ticktext=tick,thick=self.axisthick
        endif else if obj_isa(oChildArr[i],'IDLgrText') then begin      ;text
           oChildArr[i]->getproperty,name=name,uvalue=uvalue,location=location
           if name eq 'text' then begin
              if ~uvalue.normalize then begin ;position is in data unit
                 if is3d then oChildArr[i]->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,clip_planes=clipplane $
                 else oChildArr[i]->setproperty,xcoord_conv=xconv,ycoord_conv=yconv,clip_planes=clipplane
              endif
           endif
         endif
    endfor
    
    for i=0,n_elements(*self.plotInfo)-1 do begin
        case (*self.plotInfo)[i].type of
           ;arrow, IDLgrPolygon object
           -3:  begin
                x    = (*(*self.plotInfo)[i].xPtr)
                y    = (*(*self.plotInfo)[i].yPtr)
                if n_elements(*(*self.plotInfo)[i].zPtr) ne 0 then begin
                   z = (*(*self.plotInfo)[i].zPtr) & nz = n_elements(z)
                endif else nz = 0
                layer = (*self.plotInfo)[i].layer
                if self.xlog then begin
                   ind_x = where(x le 0,count_x)
                   if count_x gt 0 then break ;no arrow if any point is negative
                endif
                if self.ylog then begin
                   ind_y = where(y le 0,count_y)
                   if count_y gt 0 then break
                endif
                if (nz gt 0) and self.zlog then begin
                   ind_z = where(z le 0,count_z)
                   if count_z gt 0 then break
                endif
                if self.xlog then x = alog10(x)
                if self.ylog then y = alog10(y)
                if (nz gt 0) and self.zlog then z = alog10(z)
                zpos = 0.0
                if finite((*self.plotInfo)[i].zpos) then zpos = (*self.plotInfo)[i].zpos
                if self.zlog then begin
                   if zpos gt 0 then zpos = alog10(zpos) $
                   else if finite(self.zran[0,1]) then zpos = alog10(self.zran[0,1])
                endif
                if (~is3d) and (nz eq 0) then begin
                   zpos = (-1.0e-4)*(1+layer)+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)
                endif
                arrowangle = (*(*self.plotInfo)[i].dxPtr)
                arrowlength = (*(*self.plotInfo)[i].dyPtr)
                for j=0,n_elements(x)-2 do begin
                    if nz gt 0 then arrow = self->arrow([x[j],y[j],z[j]],[x[j+1],y[j+1],z[j+1]],angle=arrowangle,length=arrowlength) $
                    else arrow = self->arrow([x[j],y[j]],[x[j+1],y[j+1]],angle=arrowangle,length=arrowlength)
                    if n_elements(data) eq 0 then begin
                       data = arrow
                       conn = [3,0,1,3,3,1,2,3] 
                    endif else begin
                       conn = [conn,3,[0,1,3]+n_elements(data[0,*]),3,[1,2,3]+n_elements(data[0,*])]
                       data = [[data],[arrow]]
                    endelse
                endfor
                tmp  = size(data,/dimension)
                if tmp[0] eq 2 then data = transpose([[transpose(data)],[fltarr(tmp[1])+zpos]])
                (*self.plotInfo)[i].obj->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,data=temporary(data),polygons=temporary(conn)            
                end
           ;error bars,IDLgrPolyline object
           -1:  begin
                x = 0 & tmp = temporary(x) & zdat=0 & tmp=temporary(zdat) & xerr=0 & tmp=temporary(xerr) & yerr=0 & tmp=temporary(yerr) & zerr=0 & tmp=temporary(zerr)
                layer = (*self.plotInfo)[i].layer 
                xdat  = (*(*self.plotInfo)[i-1].xPtr)  
                ydat  = (*(*self.plotInfo)[i-1].yPtr) 
                if ptr_valid((*self.plotInfo)[i-1].zPtr) then begin
                   if n_elements((*(*self.plotInfo)[i-1].zPtr)) gt 0 then zdat  = (*(*self.plotInfo)[i-1].zPtr) 
                endif
                if ptr_valid((*self.plotInfo)[i].dxPtr)  then begin
                   if n_elements((*(*self.plotInfo)[i].dxPtr)) gt 0  then xerr  = (*(*self.plotInfo)[i].dxPtr)
                endif
                if ptr_valid((*self.plotInfo)[i].dyPtr)  then begin
                   if n_elements((*(*self.plotInfo)[i].dyPtr)) gt 0  then yerr  = (*(*self.plotInfo)[i].dyPtr)
                endif
                if ptr_valid((*self.plotInfo)[i].dzPtr)  then begin
                   if n_elements((*(*self.plotInfo)[i].dzPtr)) gt 0  then zerr  = (*(*self.plotInfo)[i].dzPtr) 
                endif
                nxdat = n_elements(xdat) & nzdat = n_elements(zdat) & nxerr = n_elements(xerr) & nyerr = n_elements(yerr) & nzerr = n_elements(zerr)
                if self.xlog then begin
                   index = where(xdat gt 0,nxdat)
                   if nxdat ne 0 then begin
                      xdat = xdat[index]
                      ydat = ydat[index]
                      if nzdat gt 0 then zdat = zdat[index]
                      if nxerr gt 0 then xerr = xerr[index]
                      if nyerr gt 0 then yerr = yerr[index]
                      if nzerr gt 0 then zerr = zerr[index]
                   endif else tmp = temporary(xdat)
                endif
                if self.ylog and (nxdat gt 0) then begin
                   index = where(ydat gt 0,nxdat)
                   if nxdat ne 0 then begin
                      xdat = xdat[index]
                      ydat = ydat[index]
                      if nzdat gt 0 then zdat = zdat[index]
                      if nxerr gt 0 then xerr = xerr[index]
                      if nyerr gt 0 then yerr = yerr[index]
                      if nzerr gt 0 then zerr = zerr[index]
                   endif else tmp = temporary(xdat)
                endif
                if self.zlog and (nzdat gt 0) and (nxdat gt 0) then begin
                   index = where(zdat gt 0,nxdat)
                   if nxdat ne 0 then begin
                      xdat = xdat[index]
                      ydat = ydat[index]
                      zdat = zdat[index]
                      if nxerr gt 0 then xerr = xerr[index]
                      if nyerr gt 0 then yerr = yerr[index]
                      if nzerr gt 0 then zerr = zerr[index]
                   endif else tmp = temporary(xdat)
                endif
                nzdat = n_elements(zdat) & nxerr = n_elements(xerr) & nyerr = n_elements(yerr) & nzerr = n_elements(zerr) 
                if nxdat eq 0 then begin
                   data = [0,0,0] & con = -1
                endif else begin
                   idx = lindgen(nxdat)
                   if nzdat eq 0 then begin
                      if finite((*self.plotInfo)[i].zpos) then zpos = (*self.plotInfo)[i].zpos else zpos = 0.0
                      if self.zlog then begin
                         if zpos gt 0 then zpos = alog10(zpos) $
                         else if finite(self.zran[0,1]) then zpos = alog10(self.zran[0,1])
                      endif
                      if ~is3d then begin
                         zpos = (-1.0e-4)*(0.5+layer)+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)
                      endif
                      zdat = fltarr(nxdat)+zpos
                   endif 
                   if nxerr eq nxdat then begin
                      x = fltarr(nxdat*2) & y = x & z = x
                      x[idx*2L]   = xdat-xerr
                      x[idx*2L+1] = xdat+xerr
                      y[idx*2L]   = ydat
                      y[idx*2l+1] = ydat
                      z[idx*2L]   = zdat
                      z[idx*2L+1] = zdat
                   endif
                   if nyerr eq nxdat then begin
                      x0 = fltarr(nxdat*2) & y0 = x0 & z0 = x0
                      x0[idx*2L]   = xdat
                      x0[idx*2L+1] = xdat
                      y0[idx*2L]   = ydat-yerr
                      y0[idx*2L+1] = ydat+yerr
                      z0[idx*2L]   = zdat
                      z0[idx*2L+1] = zdat
                      if n_elements(x) ne 0 then begin
                         x = [x,temporary(x0)] & y = [y,temporary(y0)] & z = [z,temporary(z0)]
                      endif else begin
                         x = temporary(x0) & y = temporary(y0) & z = temporary(z0)
                      endelse
                   endif
                   if nzerr eq nxdat then begin
                      x0 = fltarr(nxdat*2) & y0 = x0 & z0 = x0
                      x0[idx*2L]   = xdat
                      x0[idx*2L+1] = xdat
                      y0[idx*2L]   = ydat
                      y0[idx*2L+1] = ydat
                      z0[idx*2L]   = zdat-zerr
                      z0[idx*2L+1] = zdat+zerr
                      if n_elements(x) ne 0 then begin
                         x = [x,temporary(x0)] & y = [y,temporary(y0)] & z = [z,temporary(z0)]
                      endif else begin
                         x = temporary(x0) & y = temporary(y0) & z = temporary(z0)
                      endelse
                   endif
                   nx  = n_elements(x)/2 & idx = lindgen(nx)
                   con = lonarr(nx*3)
                   con[idx*3L]   = 2
                   con[idx*3L+1] = 2L*idx
                   con[idx*3L+2] = 2L*idx+1 & idx = -1
                   if self.xlog then begin
                      index_x = where(x le 0,count_x)
                      if count_x ne 0 then x[index_x] = self.xran[0,1]
                      index_x = -1
                   endif
                   if self.ylog then begin
                      index_y = where(y le 0, count_y)
                      if count_y ne 0 then y[index_y] = self.yran[0,1]
                      index_y = -1
                   endif
                   if self.zlog and (nzdat gt 0) then begin
                      index_z = where(z le 0, count_z)
                      if count_z ne 0 then z[index_z] = self.zran[0,1]
                      index_z = -1
                   endif
                   if self.xlog then x = alog10(x)
                   if self.ylog then y = alog10(y)
                   if self.zlog and (nzdat gt 0) then z = alog10(z)
                   x = transpose(x) & y = transpose(y) & z = transpose(z)
                   data = [temporary(x),temporary(y),temporary(z)]
                endelse 
                (*self.plotInfo)[i].obj->setproperty,data=data,polylines=temporary(con),xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv
                end
           ;1d plot,IDLgrPlot or IDLgrPolyline object
           0:   begin
                x     = (*(*self.plotInfo)[i].xPtr)
                y     = (*(*self.plotInfo)[i].yPtr)
                layer = (*self.plotInfo)[i].layer
                type  = size(x,/type)
                if (type lt 4) or (type ge 12) then x = float(x)
                type  = size(y,/type)
                if (type lt 4) or (type ge 12) then y = float(y)
                if obj_isa((*self.plotInfo)[i].obj,'IDLgrPolyline') then begin
                   z  = (*(*self.plotInfo)[i].zPtr)
                   type = size(z,/type)
                   if (type lt 4) or (type ge 12) then z = float(z)
                   if self.zlog then begin
                      index_z = where(z gt 0,count_z)
                      if count_z gt 0 then begin
                         x = x[index_z]
                         y = y[index_z]
                         z = z[index_z] 
                         index_z = -1
                      endif else begin
                         x = self.xran[1,1]*10 ;fake data
                         y = self.yran[1,1]*10
                         z = self.zran[1,1]*10
                      endelse
                   endif
                   line3d = 1b
                endif else line3d = 0b
                if self.xlog then begin
                   index_x = where(x gt 0,count_x)
                   if count_x gt 0 then begin
                      x = x[index_x]
                      y = y[index_x] 
                      if line3d then z = z[index_x]
                      index_x = -1
                   endif else begin
                      x = self.xran[1,1]*10 ;fake data
                      y = self.yran[1,1]*10
                      if line3d then z = self.zran[1,1]*10
                   endelse
                endif
                if self.ylog then begin
                   index_y = where(y gt 0,count_y)
                   if count_y gt 0 then begin
                      x = x[index_y]
                      y = y[index_y] 
                      if line3d then z = z[index_y]
                      index_y = -1
                   endif else begin
                      x = self.xran[1,1]*10 ;fake data
                      y = self.yran[1,1]*10
                      if line3d then z = self.zran[1,1]*10
                   endelse
                endif
                if self.xlog then x = alog10(x)
                if self.ylog then y = alog10(y)
                if line3d and self.zlog then z = alog10(z)
                if ~line3d then begin
                   zpos = 0.0
                   if finite((*self.plotInfo)[i].zpos) then zpos = (*self.plotInfo)[i].zpos
                   if self.zlog then begin
                      if zpos gt 0 then zpos = alog10(zpos) $
                      else if finite(self.zran[0,1]) then zpos = alog10(self.zran[0,1])
                   endif
                   if ~is3d then begin
                      zpos = (-1.0e-4)*(1+layer)+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)
                   endif
                endif
                if n_elements(x) eq 1 then begin
                   x = [x] & y = [y]
                   if line3d then z = [z]
                endif
                if line3d then $
                   (*self.plotInfo)[i].obj->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,data=transpose([[x],[y],[z]]) $
                else $
                   (*self.plotInfo)[i].obj->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,xran=xran,yran=yran,datax=temporary(x),datay=temporary(y),zvalue=zpos
                end
           ;2d plot, IDLgrContour or IDLgrPolygon object
           1:   begin
                xdat  = (*(*self.plotInfo)[i].xPtr) & nx = n_elements(xdat)
                ydat  = (*(*self.plotInfo)[i].yPtr) & ny = n_elements(ydat)
                zdat  = (*(*self.plotInfo)[i].zPtr) & nz = n_elements(zdat)
                layer = (*self.plotInfo)[i].layer
                type  = size(xdat,/type)
                if (type lt 4) or (type ge 12) then xdat = float(xdat)
                type  = size(ydat,/type)
                if (type lt 4) or (type ge 12) then ydat = float(ydat)
                type  = size(zdat,/type)
                if (type lt 4) or (type ge 12) then zdat = float(zdat)
                if (self.idl_version lt 5.6) or (self.xlog) or (self.ylog) then begin               
                   if nx eq nz then begin
                      index = where((xdat ge self.xran[0,self.xlog]) and (xdat le self.xran[1,self.xlog]) and $
                                    (ydat ge self.yran[0,self.ylog]) and (ydat le self.yran[1,self.ylog]),count)
                      if count eq 0 then begin
                         xdat = [self.xran[*,self.xlog],self.xran[*,self.xlog]]
                         ydat = [self.yran[0,self.ylog],self.yran[0,self.ylog],self.yran[1,self.ylog],self.yran[1,self.ylog]]
                         zdat = fltarr(4) & zdat[*] = !values.f_nan
                      endif else begin
                         xdat = xdat[index]
                         ydat = ydat[index]
                         zdat = zdat[index]
                      endelse      
                   endif else begin
                      ind_x = where((xdat ge self.xran[0,self.xlog]) and (xdat le self.xran[1,self.xlog]),count_x)
                      ind_y = where((ydat ge self.yran[0,self.ylog]) and (ydat le self.yran[1,self.ylog]),count_y)
                      if count_x le 1 or count_y le 1 then begin
                         xdat = self.xran[*,self.xlog]
                         ydat = self.yran[*,self.ylog]
                         zdat = fltarr(2,2)  & zdat[*] = !values.f_nan
                      endif else begin
                         xdat = xdat[ind_x]
                         ydat = ydat[ind_y]
                         zdat = zdat[ind_x,*] & zdat = zdat[*,ind_y]
                      endelse
                   endelse
                endif
                if self.xlog then xdat = alog10(xdat)
                if self.ylog then ydat = alog10(ydat)
                if self.ilog then begin
                   tmp = where(finite(zdat),count)
                   if count gt 0 then index = where(zdat[tmp] le 0,count)
                   if count gt 0 then zdat[tmp[index]] = !values.f_nan
                   zdat = alog10(zdat)
                endif
                zpos = 0.0
                if finite((*self.plotInfo)[i].zpos) then zpos = (*self.plotInfo)[i].zpos
                if self.zlog then begin
                   if zpos gt 0 then zpos = alog10(zpos) $
                   else if finite(self.zran[0,1]) then zpos = alog10(self.zran[0,1])
                endif
                if ~is3d then begin
                   zpos = (-1.0e-2)+(-1.0e-4)*(1+layer)+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)
                endif
                nx = n_elements(xdat)
                ny = n_elements(ydat)
                nz = n_elements(zdat)
                if obj_isa((*self.plotInfo)[i].obj,'IDLgrPolygon') then begin
                   if (n_elements(zoom) ne 0) and self.idl_version ge 5.6 then begin  ;zoom or unzoom, no need to recalculate
                      (*self.plotInfo)[i].obj->getproperty,vert_colors=vc,data=data,polygons=conn
                   endif 
                   if n_elements(conn) le 1 then begin
                      if nx eq nz and ny eq nz then begin  ;use Voronoi diagram
                         data = transpose([[reform(xdat,nx,/overwrite)],[reform(ydat,ny,/overwrite)]])   ;[2,ndat]
                         zdat = reform(zdat,nz,/overwrite)
                         current = systime(/sec)
                         uniqx = uniq(xdat[sort(xdat)]) & uniqy = uniq(ydat[sort(ydat)]) & xdat = 0 & ydat = 0
                         chk_x = (n_elements(uniqx) gt nx/10)
                         chk_y = (n_elements(uniqy) gt ny/10)
                         qhull,data,tr,vdiagram=vd,vvert=vv,/delaunay
                         nvv  = n_elements(vv)/2
                         ovv  = bytarr(nvv)
                         zzdt = fltarr(nvv)
                         av   = temporary(vv)
                         mean_dist = mean([total((data[*,tr[0,*]]-data[*,tr[1,*]])^2,1),total((data[*,tr[0,*]]-data[*,tr[2,*]])^2,1),$
                                           total((data[*,tr[1,*]]-data[*,tr[1,*]])^2,1)])*36.0  ;6 times might not be good
                         tr   = 0
                         tmp  = reform(vd[2:3,*],2*n_elements(vd[0,*]))
                         tmp  = [[tmp],[lindgen(2*n_elements(vd[0,*]))/2]]
                         ind  = where(tmp[*,0] ge 0)
                         tmp  = tmp[ind,*]   
                         tst  = sort(tmp[*,0])
                         tunq = uniq(tmp[tst,0])
                         tmp  = tmp[tst,*] 
                         for ii=0LL,nvv-1 do begin
                             ind = tmp[((ii eq 0)?0:(tunq[ii-1]+1)):tunq[ii],1]
                             zzdt[ii] = mean(zdat[reform(vd[0:1,ind],n_elements(ind)*2,/overwrite)],/nan)
                             ;throw away bad verticies
                             dist0 = total((av[*,ii]-data[*,vd[0,ind[0]]])^2)
                             if dist0 gt mean_dist then av[0,ii] = !values.f_nan 
                         endfor
                         av   = [[av],[data]]
                         zzdt = [zzdt,zdat] & zdat = 0
                         tmp  = reform(vd[0:1,*],2*n_elements(vd[0,*]))
                         tmp  = [[tmp],[lindgen(2*n_elements(vd[0,*]))/2]]
                         tst  = sort(tmp[*,0])
                         tunq = uniq(tmp[tst,0])
                         tmp  = tmp[tst,*] 
                         for ii=0LL,nx-1 do begin
                             ind_dat = -1    
                             ind  = tmp[((ii eq 0)?0:(tunq[ii-1]+1)):tunq[ii],1]
                             ev   = reform(vd[2:3,ind],n_elements(ind)*2,/overwrite)
                             pos  = where(ev ge 0)
                             fin  = where(finite(av[0,ev[pos]]),nfin)
                             if nfin lt 3 then continue
                             ev   = ev[pos[fin]]
                             ind  = ind[pos[fin]/2] & nind = n_elements(ind)
                             tmp1 = reform(vd[0:1,ind],2*nind,/overwrite)
                             if chk_x then begin
                                xmin = min(data[0,tmp1],max=xmax)
                                dx   = (xmax-xmin) & xmin = xmin-dx & xmax = xmax+dx
                                tmp0 = where(av[0,ev] lt xmin or av[0,ev] gt xmax,count1)
                             endif else count1 = 0
                             if chk_y then begin
                                ymin = min(data[1,tmp1],max=ymax)
                                dy   = (ymax-ymin) & ymin = ymin-dy & ymax = ymax+dy  
                                tmp0 = where(av[1,ev] lt ymin or av[1,ev] gt ymax,count2)
                             endif else count2 = 0
                             if count1 ne 0 or count2 ne 0 then continue
                             ev = ev[uniq(ev,sort(ev))] & nev = n_elements(ev)
                             if nev lt 2 then continue
                             if nev gt 2 then begin
                                cntr = total(av[*,ev],2)/nev
                                diff = av[*,ev]-cntr#(fltarr(nev)+1)
                                ang1 = reform(diff[1,*]/sqrt((diff[0,*])^2+(diff[1,*])^2),/overwrite)
                                ind  = where(diff[0,*] lt 0,count)
                                if count ne 0 then ang1[ind] = 2.-ang1[ind]
                                ev   = ev[sort(ang1)]
                                ev   = [nvv+ii,ev,ev[0]]
                             endif else ev = [nvv+ii,ev]
                             tmp_conn = [n_elements(ev),ev]
                             if n_elements(conn) eq 0 then conn = tmp_conn else conn = [conn,tmp_conn]
                         endfor
                         vd = 0
                         data = [[transpose(av)],[fltarr(n_elements(av)/2)+zpos]]
                         ind  = where(finite(data,/nan),count)
                         if count ne 0 then data[ind] = 0   ;to avoid Floating illegal operand error message
                         data = transpose(data)
                         zdat = temporary(zzdt)
                      endif else begin
                         nx   = nx+1
                         ny   = ny+1
                         xdat = [xdat[0],(xdat[0:(0>(nx-3L))]+xdat[1:(nx-2L)])/2.,xdat[nx-2L]]
                         ydat = [ydat[0],(ydat[0:(0>(ny-3L))]+ydat[1:(ny-2L)])/2.,ydat[ny-2L]]
                         conn = lonarr(5L*(nx-1L)*(ny-1L))
                         conn_idx = lindgen((nx-1L)*(ny-1L))*5L
                         vert_idx = reform((lindgen(nx,ny))[0:(nx-2L),0:(ny-2L)],(nx-1L)*(ny-1L),/overwrite)
                         conn[conn_idx]   = 4L
                         conn[conn_idx+1] = 0L+vert_idx
                         conn[conn_idx+2] = 1L+vert_idx
                         conn[conn_idx+3] = 1L+vert_idx+nx
                         conn[temporary(conn_idx)+4] = 0L+temporary(vert_idx)+nx
                         dattype = max([size(xdat[0],/type),size(ydat[0],/type)])
                         if dattype eq size(0d,/type) then begin  ;double
                            xdat = xdat#(dblarr(ny)+1d) & ydat = (dblarr(nx)+1d)#ydat
                         endif else begin                         ;float
                            xdat = xdat#(fltarr(ny)+1e) & ydat = (fltarr(nx)+1e)#ydat
                         endelse
                         data = [[reform(temporary(xdat),nx*ny,/overwrite)],[reform(temporary(ydat),nx*ny,/overwrite)],[fltarr(nx*ny)+zpos]]
                         data = transpose(data)
                         zdat = [[zdat],[zdat[*,ny-2]]]
                         zdat = [zdat,zdat[nx-2,*]]
                         if self.vt_col gt 0 then begin  ;use average for empty grid, must have at least two non-empty neighbors
                            ind = where(finite(zdat,/nan),count)
                            if count ne 0 then begin
                               ix = ind mod nx
                               iy = ind/nx
                               nz = finite(zdat[0>(ix-1),iy])+finite(zdat[(ix+1)<(nx-1),iy])+finite(zdat[ix,0>(iy-1)])+finite(zdat[ix,(iy+1)<(ny-1)])
                               ind1 = where(nz gt self.vt_col,count1)
                               if count1 ne 0 then begin
                                  ind = ind[ind1]
                                  ix = ix[ind1]
                                  iy = iy[ind1]
                                  nz = nz[ind1]  
                                  zdat[ind] = total([[zdat[0>(ix-1),iy]],[zdat[(ix+1)<(nx-1),iy]],[zdat[ix,0>(iy-1)]],[zdat[ix,(iy+1)<(ny-1)]]],2,/nan)/nz
                                  ind1 = -1
                               endif
                               ind = -1 & ix = -1 & iy = -1 & nz = -1
                            endif
                         endif
                      endelse
                      vc = intarr(n_elements(zdat))
                      ;finite index
                      index = where(finite(zdat),count)
                      ;convert idat to byte
                      if count ne 0 then begin
                         vc[index] = fix(1>(1.5+254.*(zdat[index]-iran[0])/(iran[1]-iran[0]))<255)
                         index = -1
                      endif
                      zdat = -1
                   endif
                   (*self.plotInfo)[i].obj->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,vert_colors=temporary(vc),data=temporary(data),polygons=temporary(conn)
                endif else begin    ;IDLgrContour
                   if nx ne nz and ny ne nz then begin
                      xdat = (temporary(xdat))#(fltarr(ny)+1.) 
                      ydat = (fltarr(nx)+1.)#(temporary(ydat))
                   endif else begin
                      qhull,xdat,ydat,tr,/delaunay
                      ntr = n_elements(tr)/3
                      conn = reform([replicate(3,1,ntr),tr],4*(ntr),/overwrite)
                   endelse
                   i_level = iran[0]+findgen(256)/255.0*(iran[1]-iran[0])
                   i_level[255] = (self.ilog)?(alog10((self.zmax gt 0)?(self.zmax):(self.iran[1,1]))):(self.zmax)
                   (*self.plotInfo)[i].obj->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,$
                      c_value=i_level,geomx=temporary(xdat),geomy=temporary(ydat),data_values=temporary(zdat),geomz=zpos,/planar,polygon=conn
                endelse
                end
           ;2d plot, IDLgrSurface object
           2:   begin
                xdat = (*(*self.plotInfo)[i].xPtr)
                ydat = (*(*self.plotInfo)[i].yPtr)
                zdat = (*(*self.plotInfo)[i].zPtr)
                if n_elements(*(*self.plotInfo)[i].iPtr) ne 0 then $
                   idat = (*(*self.plotInfo)[i].iPtr) $
                else $
                   idat = zdat
                type = size(xdat,/type)
                if (type lt 4) or (type ge 12) then xdat = float(xdat)
                type = size(ydat,/type)
                if (type lt 4) or (type ge 12) then ydat = float(ydat)
                type = size(zdat,/type)
                if (type lt 4) or (type ge 12) then zdat = float(zdat)
                type = size(idat,/type)
                if (type lt 4) or (type ge 12) then idat = float(idat)
                if (self.idl_version lt 5.6) or (self.xlog) or (self.ylog) then begin
                   ind_x = where((xdat ge self.xran[0,self.xlog]) and (xdat le self.xran[1,self.xlog]),count_x)
                   ind_y = where((ydat ge self.yran[0,self.ylog]) and (ydat le self.yran[1,self.ylog]),count_y)
                   if count_x le 1 or count_y le 1 then begin
                      xdat = self.xran[*,self.xlog]
                      ydat = self.yran[*,self.ylog]
                      zdat = fltarr(2,2) & zdat[*]=!values.f_nan
                      idat = fltarr(2,2) & idat[*]=!values.f_nan
                   endif else begin
                      xdat = xdat[ind_x]
                      ydat = ydat[ind_y]
                      zdat = zdat[ind_x,*] &zdat=zdat[*,ind_y]
                      idat = idat[ind_x,*] &idat=idat[*,ind_y]
                   endelse
                endif
                if self.xlog then xdat = alog10(xdat)
                if self.ylog then ydat = alog10(ydat)
                if self.zlog then zdat = alog10(zdat)
                if self.ilog then idat = alog10(idat)
                vc = intarr(n_elements(idat))
                ;finite index
                index = where(finite(idat),count)
                ;convert idat to byte
                if count ne 0 then begin
                   vc[index] = fix(1>(1.5+254.*(idat[index]-iran[0])/(iran[1]-iran[0]))<255)
                   index = -1
                endif
                idat = -1 ;destroy idat
                (*self.plotInfo)[i].obj->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,$
                   zcoord_conv=zconv,vert_colors=temporary(vc),min_value=zran[0],max_value=zran[1],datax=temporary(xdat),datay=temporary(ydat),dataz=temporary(zdat)
                end
           ;1d polygon fill plot,IDLgrPolygon object
           3:   begin
                x    = (*(*self.plotInfo)[i].xPtr)
                y    = (*(*self.plotInfo)[i].yPtr)
                if n_elements(*(*self.plotInfo)[i].zPtr) ne 0 then begin
                   z = (*(*self.plotInfo)[i].zPtr) & nz = n_elements(z)
                endif else nz = 0
                type = size(x,/type)
                if (type lt 4) or (type ge 12) then x = float(x)
                type = size(y,/type)
                if (type lt 4) or (type ge 12) then y = float(y)
                if nz gt 0 then begin
                   type = size(z,/type)
                   if (type lt 4) or (type ge 12) then z = float(z)
                endif
                layer = (*self.plotInfo)[i].layer
                if self.xlog then begin
                   ind_x = where(x le 0,count_x)
                   if count_x gt 0 then begin
                      x[ind_x] = 1e-16  ;assign a very small number
                      ind_x    = -1
                   endif
                endif
                if self.ylog then begin
                   ind_y = where(y le 0,count_y)
                   if count_y gt 0 then begin
                      y[ind_y] = 1e-16  ;assign a very small number
                      ind_y    = -1
                   endif
                endif
                if (nz gt 0) and self.zlog then begin
                   ind_z = where(z le 0,count_z)
                   if count_z gt 0 then begin
                      z[ind_z] = 1e-16  ;assign a very small number
                      ind_z    = -1
                   endif
                endif
                ;tessellation
                oTess = obj_new('IDLgrTessellator')
                if nz gt 0 then $
                   oTess->AddPolygon,x,y,z $
                else $
                   oTess->AddPolygon,x,y
                result = oTess->Tessellate(data,conn)
                obj_destroy,oTess
                if result eq 0 then break   ;tessellation fails
                if self.xlog then data[0,*] = alog10(data[0,*])
                if self.ylog then data[1,*] = alog10(data[1,*])
                if (nz gt 0) and self.zlog then data[2,*] = alog10(data[2,*])
                zpos = 0.0
                if finite((*self.plotInfo)[i].zpos) then zpos = (*self.plotInfo)[i].zpos
                if self.zlog then begin
                   if zpos gt 0 then zpos = alog10(zpos) $
                   else if finite(self.zran[0,1]) then zpos = alog10(self.zran[0,1])
                endif
                if (~is3d) and (nz eq 0) then begin
                   zpos = (-1.0e-4)*(1+layer)+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)
                endif             
                tmp  = size(data,/dimension)
                if tmp[0] eq 2 then data = transpose([[transpose(data)],[fltarr(tmp[1])+zpos]])
                (*self.plotInfo)[i].obj->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv,data=temporary(data),polygons=temporary(conn)
                end
           ;volume plot, IDLgrVolume object
           4:   begin
                idat  = (*(*self.plotInfo)[i].iPtr)
                xdat  = (*(*self.plotInfo)[i].xPtr)
                index = where(xdat ge xran[0] and xdat le xran[1],count)
                if count ne 0 then begin
                   xdat = xdat[index]
                   idat = idat[index,*,*]
                endif
                xmax  = max(xdat,min=xmin)
                ydat  = (*(*self.plotInfo)[i].yPtr)
                index = where(ydat ge yran[0] and ydat le yran[1],count)
                if count ne 0 then begin
                   ydat = ydat[index]
                   idat = idat[*,index,*]
                endif
                ymax  = max(ydat,min=ymin)
                zdat  = (*(*self.plotInfo)[i].zPtr)
                index = where(zdat ge zran[0] and zdat le zran[1],count)
                if count ne 0 then begin
                   zdat = zdat[index]
                   idat = idat[*,*,index]
                endif
                zmax = max(zdat,min=zmin)
                if self.ilog then idat = alog10(idat)
                ;finite index
                index = where(finite(idat),count,complement=index1,ncomplement=count1)
                ;convert idat to byte
                if count ne 0 then idat[index] = fix(0>(1.5+254.*(idat[index]-iran[0])/(iran[1]-iran[0]))<255)
                if count1 ne 0 then idat[index1] = 0
                index = -1 & index1 = -1
                tmp = size(idat,/dimension)
                if n_elements(tmp) ne 3 then begin
                   nx = n_elements(xdat) & ny = n_elements(ydat) & nz = n_elements(zdat)
                   idat = reform(idat,[nx,ny,nz],/overwrite)
                   tmp  = [nx,ny,nz]
                endif
                ;color table
                (*self.plotInfo)[i].obj->getproperty,uvalue=palette
                palette->getproperty,red_values=r,green_values=g,blue_values=b
                tmp_xran = interpol([0.,tmp[0]],[xmin,xmax],xran)
                tmp_yran = interpol([0.,tmp[1]],[ymin,ymax],yran)
                tmp_zran = interpol([0.,tmp[2]],[zmin,zmax],zran)
                if total(finite(tmp_xran)) ne 2 then tmp_xran = [0,1]
                if total(finite(tmp_yran)) ne 2 then tmp_yran = [0,1]
                if total(finite(tmp_zran)) ne 2 then tmp_zran = [0,1]
                ;clipping
                case self.volclip of
                     -1: volclipplane = -1
                      0: begin
                         volclipplane = -1
                         idat[0:tmp[0]/2,0:tmp[1]/2,tmp[2]/2:tmp[2]-1] = 0
                         end
                      1: begin
                         volclipplane = -1
                         idat[0:tmp[0]/2,*,tmp[2]/2:tmp[2]-1] = 0
                         end
                      2: volclipplane = [-1,0,0,(tmp_xran[0]+tmp_xran[1])/2.]
                      3: volclipplane = [1,0,0,-(tmp_xran[0]+tmp_xran[1])/2.]
                      4: volclipplane = [0,-1,0,(tmp_yran[0]+tmp_yran[1])/2.]
                      5: volclipplane = [0,1,0,-(tmp_yran[0]+tmp_yran[1])/2.]
                      6: volclipplane = [0,0,-1,(tmp_zran[0]+tmp_zran[1])/2.]
                      7: volclipplane = [0,0,1,-(tmp_zran[0]+tmp_zran[1])/2.]
                   else: volclipplane = -1
                endcase
                (*self.plotInfo)[i].obj->setproperty,data0=idat,rgb_table0=[[r],[g],[b]],xcoord_conv=norm_coord(tmp_xran)+cshift,$
                      ycoord_conv=norm_coord(tmp_yran)+cshift,zcoord_conv=norm_coord(tmp_zran),bounds=[tmp_xran[0],tmp_yran[0],tmp_zran[0],tmp_xran[1],tmp_yran[1],tmp_zran[1]]
                end
           else:
        endcase
        if self.idl_version ge 5.6 then (*self.plotInfo)[i].obj->setproperty,clip_planes=(((*self.plotInfo)[i].type eq 4)?volclipplane:clipplane)   
    endfor

    ;update the drawlegend
    self->updatelegend

    ;make grids
    self.drawxAxis[0]->getproperty,major=xmajor 
    self.drawyAxis[0]->getproperty,major=ymajor 
    if xmajor ne 0 then self.drawxAxis[0]->getproperty,tickvalues=xticks & nxtick = n_elements(xticks)
    if ymajor ne 0 then self.drawyAxis[0]->getproperty,tickvalues=yticks & nytick = n_elements(yticks)
    if is3d then begin
       self.drawzAxis->getproperty,major=zmajor
       if zmajor ne 0 then self.drawzAxis->getproperty,tickvalues=zticks & nztick = n_elements(zticks)
    endif else nztick = 0
    if nxtick gt 0 then begin ;remove borders
       if float(xticks[0]) eq self.xran[0,self.xlog] then begin
          nxtick = nxtick-1
          if nxtick gt 0 then xticks = xticks[1:nxtick] else tmp = temporary(xticks)
       endif
       if nxtick gt 0 then begin
          if float(xticks[nxtick-1]) eq self.xran[1,self.xlog] then begin
             nxtick = nxtick-1
             if nxtick gt 0 then xticks = xticks[0:nxtick-1] else tmp = temporary(xticks)
          endif
       endif
    endif
    if nytick gt 0 then begin
       if float(yticks[0]) eq self.yran[0,self.ylog] then begin
          nytick = nytick-1
          if nytick gt 0 then yticks = yticks[1:nytick] else tmp = temporary(yticks)
       endif
       if nytick gt 0 then begin
          if float(yticks[nytick-1]) eq self.yran[1,self.ylog] then begin
             nytick = nytick-1
             if nytick gt 0 then yticks = yticks[0:nytick-1] else tmp = temporary(yticks)
          endif
       endif
    endif
    if nztick gt 0 then begin
       if float(zticks[0]) eq self.zran[0,self.zlog] then begin
          nztick = nztick-1
          if nztick gt 0 then zticks = zticks[1:nztick] else tmp = temporary(zticks)
       endif
       if nztick gt 0 then begin
          if float(zticks[nztick-1]) eq self.zran[1,self.zlog] then begin
             nztick = nztick-1
             if nztick gt 0 then zticks = zticks[0:nztick-1] else tmp = temporary(zticks)
          endif
       endif
    endif
    if is3d then begin
       if nxtick eq 0 then xticks = self.xran[1,self.xlog] else xticks = [xticks,self.xran[1,self.xlog]]
       if nytick eq 0 then yticks = self.yran[1,self.ylog] else yticks = [yticks,self.yran[1,self.ylog]]
       if nztick eq 0 then zticks = self.zran[*,self.zlog] else zticks = [zticks,self.zran[*,self.zlog]]
       nxtick = n_elements(xticks) & nytick = n_elements(yticks) & nztick = n_elements(zticks)
    endif
    if self.xlog and (nxtick gt 0) then xticks = alog10(xticks)
    if self.ylog and (nytick gt 0) then yticks = alog10(yticks)
    if self.zlog and (nztick gt 0) then zticks = alog10(zticks)
    npts = 2+is3d
    xdata = [0,0] & xconn = -1 & ydata = [0,0] & yconn = -1 & zdata = [0,0] & zconn = -1
    if nxtick gt 0 then begin
       xdata = fltarr(3,nxtick*npts+4*is3d) & xconn = intarr((npts+1)*nxtick+6*is3d) & xdata[2,*] = ([zclip[1]/2.0,(-5e-5)])[self.gridontop]
       for i=0,nxtick-1 do xconn[((npts+1)*i):((npts+1)*(i+1)-1)] = [npts,npts*i+indgen(npts)]
    endif
    if nytick gt 0 then begin
       ydata = fltarr(3,nytick*npts+5*is3d) & yconn = intarr((npts+1)*(nytick+is3d)+3*is3d) & ydata[2,*] = ([zclip[1]/2.0,(-5e-5)])[self.gridontop]
       for i=0,nytick+is3d-1 do yconn[((npts+1)*i):((npts+1)*(i+1)-1)] = [npts,npts*i+indgen(npts)]
    endif
    if nztick gt 0 then begin
       zdata = fltarr(3,nztick*npts+4*is3d) & zconn = intarr((npts+1)*nztick+6*is3d) 
       for i=0,nztick-1 do zconn[((npts+1)*i):((npts+1)*(i+1)-1)] = [npts,npts*i+indgen(npts)]
    endif
    for i=0,nxtick-1 do begin
        xdata[0,(npts*i):(npts*(i+1)-1)]   = xticks[i]
        xdata[1,npts*i]                    = (self.ylog)?alog10(self.yran[0,1]):self.yran[0,0]
        xdata[1,(npts*i+1):(npts*(i+1)-1)] = (self.ylog)?alog10(self.yran[1,1]):self.yran[1,0]
    endfor
    for i=0,nytick-1 do begin
        ydata[1,(npts*i):(npts*(i+1)-1)]   = yticks[i]
        ydata[0,npts*i]                    = (self.xlog)?alog10(self.xran[0,1]):self.xran[0,0]
        ydata[0,(npts*i+1):(npts*(i+1)-1)] = (self.xlog)?alog10(self.xran[1,1]):self.xran[1,0]
    endfor
    for i=0,nztick-1 do begin
        zdata[2,(npts*i):(npts*(i+1)-1)]   = zticks[i]
        zdata[0,npts*i]                    = (self.xlog)?alog10(self.xran[0,1]):self.xran[0,0]
        zdata[0,(npts*i+1):(npts*(i+1)-1)] = (self.xlog)?alog10(self.xran[1,1]):self.xran[1,0]
        zdata[1,npts*(i+1)-1]              = (self.ylog)?alog10(self.yran[0,1]):self.yran[0,0]
        zdata[1,(npts*i):(npts*i+1)]       = (self.ylog)?alog10(self.yran[1,1]):self.yran[1,0]    
    endfor
    if is3d then begin
       xdata[2,npts*indgen(nxtick+1)]           = (self.zlog)?alog10(self.zran[0,1]):self.zran[0,0] 
       xdata[2,npts*indgen(nxtick+1)+1]         = (self.zlog)?alog10(self.zran[0,1]):self.zran[0,0] 
       xdata[2,npts*indgen(nxtick+1)+2]         = (self.zlog)?alog10(self.zran[1,1]):self.zran[1,0] 
       xdata[2,(npts*nxtick):(npts*nxtick+3)]   = (self.zlog)?alog10(self.zran[[1,1,0,0],1]):self.zran[[1,1,0,0],0]
       xdata[1,(npts*nxtick):(npts*nxtick+3)]   = (self.ylog)?alog10(self.yran[1,1]):self.yran[1,0]
       xdata[0,(npts*nxtick):(npts*nxtick+3)]   = (self.xlog)?alog10(self.xran[[0,1,0,1],1]):self.xran[[0,1,0,1],0]
       xconn[(npts+1)*nxtick:(npts+1)*nxtick+5] = [2,npts*nxtick,npts*nxtick+1,2,npts*nxtick+2,npts*nxtick+3]   
       ydata[2,npts*indgen(nytick+1)]           = (self.zlog)?alog10(self.zran[0,1]):self.zran[0,0] 
       ydata[2,npts*indgen(nytick+1)+1]         = (self.zlog)?alog10(self.zran[0,1]):self.zran[0,0] 
       ydata[2,npts*indgen(nytick+1)+2]         = (self.zlog)?alog10(self.zran[1,1]):self.zran[1,0]
       ydata[2,(npts*nytick):(npts*nytick+4)]   = (self.zlog)?alog10(self.zran[[1,1,0,0,0],1]):self.zran[[1,1,0,0,0],0]
       ydata[1,(npts*nytick):(npts*nytick+4)]   = (self.ylog)?alog10(self.yran[[1,0,0,1,0],1]):self.yran[[1,0,0,1,0],0]
       ydata[0,(npts*nytick):(npts*nytick+4)]   = (self.xlog)?alog10(self.xran[1,1]):self.xran[1,0]
       yconn[(npts+1)*(nytick+1):(npts+1)*(nytick+1)+2] = [2,npts*(nytick+1),npts*(nytick+1)+1]
       zdata[2,(npts*nztick):(npts*nztick+3)]   = (self.zlog)?alog10(self.zran[[0,1,0,1],1]):self.zran[[0,1,0,1],0]
       zdata[1,(npts*nztick):(npts*nztick+3)]   = (self.ylog)?alog10(self.yran[[0,0,1,1],1]):self.yran[[0,0,1,1],0]
       zdata[0,(npts*nztick):(npts*nztick+3)]   = (self.xlog)?alog10(self.xran[1,1]):self.xran[1,0]
       zconn[(npts+1)*nztick:(npts+1)*nztick+5] = [2,npts*nztick,npts*nztick+1,2,npts*nztick+2,npts*nztick+3]
    endif
    self.xgrid->setproperty,data=xdata,polyline=xconn,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=((is3d)?(zconv):([0.0,1.0]))
    self.ygrid->setproperty,data=ydata,polyline=yconn,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=((is3d)?(zconv):([0.0,1.0]))
    self.zgrid->setproperty,data=zdata,polyline=zconn,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv
    
    ;slicing and cutting zoombox 
    if obj_valid(self.zoomBox) then self.zoomBox->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift
    if self.slicetype ge 0 then self.sliceBox->setproperty,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv
      
    ;set boundary
    self->set_view

    ;draw it
    self->showview

    widget_control,self.tlb,/update
    if ~keyword_set(nototop) then self->totop ;push the drawwindow to the top
end

;erase everything
pro dm_plot::erase,nodraw=nodraw,nototop=nototop,keepaxes=keepaxes,title=title
    if n_elements(title) ne 0 then self->setproperty,title=title,/nodraw $
    else if obj_valid(self.drawzAxis) and obj_valid(self.title) then self.title->setproperty,strings=''
    self->remove_text
    self.xgrid->setproperty,data=[0,0],polyline=-1
    self.ygrid->setproperty,data=[0,0],polyline=-1
    self.zgrid->setproperty,data=[0,0],polyline=-1
    self.sliceBox->setproperty,data=fltarr(2,3),polygons=-1,/hide
    oChildArr = self.drawModel->IDL_Container::Get(/ALL, COUNT=nKids)
    for i=0,nKids-1 do begin
        if (~obj_isa(oChildArr[i],'IDLgrModel')) and (~obj_isa(oChildArr[i],'IDLgrLegend')) and (~obj_isa(oChildArr[i],'IDLgrText')) then obj_destroy,oChildArr[i]
    endfor
    oChildArr = self.drawGroup->IDL_Container::Get(/ALL, COUNT=nKids)
    for i=0,nKids-1 do begin
        if obj_isa(oChildArr[i],'IDLgrPlot') or obj_isa(oChildArr[i],'IDLgrPolyline') then begin
           oChildArr[i]->getproperty,symbol=tmp1
           if obj_valid(tmp1) then begin
              tmp1[0]->getproperty,data=tmp2
              if obj_valid(tmp2) then obj_destroy,tmp2
              obj_destroy,tmp1
           endif
        endif else if obj_isa(oChildArr[i],'IDLgrPolygon') or obj_isa(oChildArr[i],'IDLgrContour') or obj_isa(oChildArr[i],'IDLgrSurface') then begin
           oChildArr[i]->getproperty,palette=tmp
           if obj_valid(tmp) then obj_destroy,tmp
        endif else if obj_isa(oChildArr[i],'IDLgrVolume') then begin
           oChildArr[i]->getproperty,uvalue=tmp
           if obj_valid(tmp) then obj_destroy,tmp
        endif
        if keyword_set(keepaxes) then begin
           if (oChildArr[i] ne self.xgrid) and (oChildArr[i] ne self.ygrid) and (oChildArr[i] ne self.zgrid) and (oChildArr[i] ne self.sliceBox) and ~obj_isa(oChildArr[i],'IDLgrAxis') then $
              obj_destroy,oChildArr[i]
        endif else begin
           if (oChildArr[i] ne self.xgrid) and (oChildArr[i] ne self.ygrid) and (oChildArr[i] ne self.zgrid) and (oChildArr[i] ne self.sliceBox) then obj_destroy,oChildArr[i]
        endelse
    endfor
    if n_elements(*self.plotInfo) ne 0 then begin
       onedplot = where((*self.plotInfo)[*].type eq 0,count0)
       twdplot  = where(((*self.plotInfo)[*].type eq 1) or ((*self.plotInfo)[*].type eq 2),count2)
       cltplot  = where(((*self.plotInfo)[*].type eq 1) or ((*self.plotInfo)[*].type eq 2) or ((*self.plotInfo)[*].type eq 4),count3)
       if count0 ne 0 then self.default[6:8] = (*self.plotInfo)[onedplot[0]].color
       if count2 ne 0 then self.default[2] = (*self.plotInfo)[twdplot[0]].shading
       if count3 ne 0 then self.default[3] = (*self.plotInfo)[cltplot[0]].coltable
       ptr_free,(*self.plotInfo)[*].xPtr,(*self.plotInfo)[*].yPtr,(*self.plotInfo)[*].zPtr,(*self.plotInfo)[*].iPtr,$
                (*self.plotInfo)[*].dxPtr,(*self.plotInfo)[*].dyPtr,(*self.plotInfo)[*].dzPtr,(*self.plotInfo)[*].diPtr
    endif
    ptr_free,self.plotInfo & self.plotInfo=ptr_new(/allocate_heap)
    self.drawGroup->reset
    self.drawModel->reset
    self.drawLegend->getproperty,item_object=item_object
    obj_destroy,item_object
    self.drawLegend->setproperty,item_object=[obj_new()],item_name=[''],item_linestyle=[6]
    if obj_valid(self.csplotobj) then obj_destroy,self.csplotobj
    if obj_valid(self.zoomBox) then obj_destroy,self.zoomBox
    self.cuttype = -1 & self.slicetype = -1 & self.moveLegend = 0
    self->my_widget_control,'dm_'+['animmenu','cs_animdir','cs_animspd'],sensitive=0
    if (~keyword_set(nodraw)) then self->draw,/view,nototop=nototop
end

;handle all events that are passed from dm_plot_event and require access to the internal variables
pro dm_plot::event,event
    eventname = widget_info(event.id,/uname)
    tagname   = strlowcase(tag_names(event,/structure))
    if tagname eq 'widget_kbrd_focus' then begin
       if event.enter and (self.animation[0] or (self.cuttype ge 0) or (self.slicetype ge 0)) then widget_control,self.plotWin,/input_focus,/clear_events
       if ~event.enter then self->clearmotionevent
       return
    endif
    if tagname eq 'widget_tracking' then begin
       if ~event.enter then self->clearmotionevent
       return
    endif
    if strmid(tagname,0,7) eq 'dm_plot' then eventname = tagname  ;for dm_plot_kill and dm_plot_changetitle events
    if eventname eq 'dm_plotWin' then begin
       if (event.type eq 4) or (self.animation[0] and ((event.type eq 5) or (event.type eq 6) or (event.type eq 2))) then begin      ;visibility change event or animation keyboard events
          if event.type eq 4 then self->showview                                                              ;Visibility changed (exposed)
          if event.press then begin
             if (event.ch eq 27b) and (~self.animation[1]) then self.animation[0] = 0b $                      ;ESC button,stop animation
             else self.animation[1] = (~self.animation[1])                                                    ;pause/resume
             if self.animation[0] then begin
                self.cursorpos->getproperty,string=strings
                if stregex(strings,'press',/fold_case,/boolean) then strings=''
                self->set_cursortxt,(self.animation[1]?'Paused. Press any key to resume. '+strings:'')
             endif
          endif
          return
       endif 
       if (event.type eq 2) and self.showcpos and (~obj_valid(self.zoombox) or (~self.moveLegend and self.cuttype ge 0)) then nohourglass = 1b  ;cursor position events
    endif
    if eventname ne 'dm_plot_changetitle' then self.animation[0] = 0b  ;stop the animation for all events other then keyboard press and dm_plot_changetitle event
    if ~keyword_set(nohourglass) then widget_control,/hourglass
    all_col = self->getcolor(/list) & bgcolor = [255b,255b,255b]*self.bgcol
    case eventname of
       'dm_plot_changetitle': return      ;event comes from cut or slice plot window, do nothing
       'dm_plot_kill':begin ;cut or slice plot window is killed
            if (self.compound and (~widget_info(self.plotWin,/valid_id))) or ((~self.compound) and (~widget_info(self.tlb,/valid_id))) then return
            if self.cuttype   ge 0 then self->cut,-1
            if self.slicetype ge 0 then self->slice,-1
            end
       'dm_plotWin':begin
            tmp = widget_info(self.plotWin,/geometry)
            compound_menu = ((event.y gt tmp.scr_ysize*0.75) and (event.x lt tmp.scr_xsize*0.25) and (self.compound))
            right_button  = ((event.release eq 4) or ((event.press eq 1) and (event.clicks eq 2))) and (~obj_valid(self.zoomBox) or (self.cuttype ge 0) or (self.slicetype ge 0))
            is3d = obj_valid(self.drawzAxis) 
            if n_elements(*self.plotInfo) ne 0 then begin
               indsrf = where((*self.plotInfo)[*].type eq 2,nsrf)
               indvol = where((*self.plotInfo)[*].type eq 4,nvol)
               indcon = where((*self.plotInfo)[*].type eq 1,ncon)
            endif else if ~right_button or ~compound_menu then break ;compound menu is allowed without plots
            if right_button then begin
               ;right mouse button clicked or left button double clicked
               self.select = obj_new()
               tmp = self.drawWin->select(self.drawView,[event.x,event.y])
               if obj_valid(tmp[0]) then begin
                  if (tmp[0] eq self.sliceBox) and (n_elements(tmp) ge 2) then if obj_valid(tmp[1]) then tmp[0] = tmp[1]
                  if (tmp[0] eq self.cursorpos) then break
                  self.select = tmp[0]
                  indsel = where((*self.plotInfo).obj eq self.select,nsel)
                  tmp[0]->getproperty,name=name
                  if name eq 'error' then begin    ;special care to error plot
                     name = ''
                     if nsel ne 0 then begin
                        if (*self.plotInfo)[indsel[0]-1].type eq 0 then begin ;double check
                           name = 'plot'
                           self.select = (*self.plotInfo)[indsel[0]-1].obj
                           indsel[0] = indsel[0]-1
                        endif
                     endif
                  endif
                  if nsel gt 0 then hasarrow = ((*self.plotInfo)[indsel[0]-1].type eq -3)
                  if nsel gt 0 then haserror = ((*self.plotInfo)[(indsel[0]+1)<(n_elements(*self.plotInfo)-1)].type eq -1)
                  if strlen(name) ne 0 then begin
                     if self.select eq self.drawxAxis[1] then begin
                        name = 'title' & self.select = self.title
                        self.title->getproperty,strings=tmp
                        if strlen(tmp) eq 0 then break
                     endif
                     if (name eq 'plot') and obj_isa(self.select,'IDLgrPolyline') then name = name+'3d'
                     if (name eq 'poly') and (nsel ne 0) then begin 
                        nz = n_elements(*(*self.plotInfo)[indsel[0]].zPtr)
                        if nz gt 0 then name = name+'3d'
                     endif
                     menuid = widget_info(event.id, find_by_uname='dm_cs_'+name+'Menu')
                     if is3d then allshown = (self.showxgrid and self.showygrid and self.showzgrid) else allshown = (self.showxgrid and self.showygrid)
                     self->my_widget_control,'dm_cs_grid',menuid,set_value=(allshown?'Hide Grid':'Show Grid'),sensitive=(~self.hideAxes)
                     self->my_widget_control,'dm_cs_hidecbar',menuid,set_value=(self.hideIntbar?'Show Colorbar':'Hide Colorbar')
                     self->my_widget_control,'dm_cs_hidelegend',menuid,set_value=(self.hideLegend?'Show Legend':'Hide Legend')
                     self->my_widget_control,'dm_cs_hideaxes',menuid,set_value=(self.hideAxes?'Show Axes':'Hide Axes')
                     case name of    ;for axis and cbar, need to set properly the log scale button
                          'plot': begin
                                  if keyword_set(haserror) then hideerror = (*self.plotInfo)[indsel[0]+1].hide else hideerror = 0
                                  if nsel gt 0 then self->my_widget_control,'dm_cs_formula',menuid,sensitive=ptr_valid((*self.plotInfo)[indsel[0]].iPtr)
                                  self->my_widget_control,'dm_cs_arrMenu',menuid,sensitive=keyword_set(hasarrow)
                                  self->my_widget_control,'dm_cs_hideerror',menuid,sensitive=keyword_set(haserror),set_value=(['Hide','Show']+' Error Bar')[hideerror] 
                                  end
                          'plot3d': begin
                                  if nsel gt 0 then self->my_widget_control,'dm_cs_formula',menuid,sensitive=ptr_valid((*self.plotInfo)[indsel[0]].iPtr)
                                  self->my_widget_control,'dm_cs_arrMenu',menuid,sensitive=keyword_set(hasarrow)
                                  end        
                          'axis': begin
                                  setlog = 1b
                                  self.select->getproperty,direction=direction
                                  log_yn = ([self.xlog,self.ylog,self.zlog])[direction]
                                  if self.select eq self.drawyAxis[2] then log_yn = self.ilog
                                  sensitive = 1b
                                  if nvol gt 0 then sensitive = 0b
                                  if nsrf gt 0 and direction le 1 then begin
                                     if n_elements(*(*self.plotInfo)[indsrf[0]].xptr) eq n_elements(*(*self.plotInfo)[indsrf[0]].zptr) then sensitive = 0b
                                  endif
                                  self->my_widget_control,'dm_cs_title',menuid,sensitive=((self.select ne self.drawyAxis[1]) and (self.select ne self.drawyAxis[2]))
                                  dm_set_button,self->my_widget_id('dm_cs_extragap',menuid),stregex(dm_to_string(self.extragap,sep=''),'[1-9]',/boolean)
                                  end
                          'cbar': begin
                                  setlog = 1b
                                  log_yn = self.ilog
                                  sensitive = 1b
                                  self->my_widget_control,'dm_cs_shade',menuid,sensitive=(nvol eq 0)
                                  dm_set_button,self->my_widget_id('dm_cs_extragap',menuid),stregex(dm_to_string(self.extragap,sep=''),'[1-9]',/boolean)
                                  end
                          'legend':begin
                                  self->my_widget_control,'dm_cs_lgndoutlinethick',menuid,sensitive=self.legdshowoutline
                                  self->my_widget_control,'dm_cs_outline',menuid,set_value=(['Show','Hide']+' Outline')[self.legdshowoutline]
                                  self->my_widget_control,'dm_cs_showfill',menuid,set_value=(['Show','Hide']+' Fill')[self.legdshowfill]
                                  end
                          'text': begin
                                  self.select->getproperty,fill_background=fill_background,uvalue=tmp
                                  self->my_widget_control,'dm_cs_txtshowfill',menuid,set_value=(['Show','Hide']+' Fill')[fill_background],sensitive=(tmp.normalize or fill_background)
                                  self->my_widget_control,'dm_cs_textori',menuid,sensitive=(tmp.normalize or (~keyword_set(is3d)))
                                  end
                          'twod': begin
                                  self.select->getproperty,shading=shading
                                  self->my_menu_toggle,'dm_cs_shade'+['flat','gouraud'],shading,base=menuid
                                  self->my_menu_toggle,['dm_vtcol_none','dm_vtcol_avg2','dm_vtcol_avg3'],self.vt_col,base=menuid
                                  dm_set_button,self->my_widget_id('dm_cs_xcut',menuid),(self.cuttype eq 0),onstring='Along X',offstring='Along X'
                                  dm_set_button,self->my_widget_id('dm_cs_ycut',menuid),(self.cuttype eq 1),onstring='Along Y',offstring='Along Y'
                                  dm_set_button,self->my_widget_id('dm_cs_arbcut',menuid),(self.cuttype eq 2),onstring='Arbitrary Direction',offstring='Arbitrary Direction',sensitive=(~self.xlog and ~self.ylog)
                                  self->my_widget_control,['dm_cs_cutMenu','dm_cs_animMenu'],menuid,sensitive=(~is3d)
                                  end
                          'grid': begin
                                  self->my_widget_control,'dm_gridpositionmenu',menuid,sensitive=(~is3d)
                                  self->my_menu_toggle,['dm_gridpos_bot','dm_gridpos_top'],self.gridontop,base=menuid
                                  end     
                          'vol':  begin
                                  dm_set_button,self->my_widget_id('dm_cs_volxslice',menuid),(self.slicetype eq 0),onstring='X-slice',offstring='X-slice'
                                  dm_set_button,self->my_widget_id('dm_cs_volyslice',menuid),(self.slicetype eq 1),onstring='Y-slice',offstring='Y-slice'
                                  dm_set_button,self->my_widget_id('dm_cs_volzslice',menuid),(self.slicetype eq 2),onstring='Z-slice',offstring='Z-slice'
                                  end
                          else:
                     endcase
                     if keyword_set(setlog) then begin
                        logid = widget_info(menuid,find_by_uname='dm_cs_logscale')
                        dm_set_button,logid,log_yn,onstring='Normal Scale',offstring='Logarithmic Scale',sensitive=sensitive
                        self->my_widget_control,'dm_cs_axistickinterval',menuid,sensitive=(~log_yn)
                     endif
                     animdirid = widget_info(menuid,find_by_uname='dm_cs_animdir') 
                     if animdirid ne 0 then dm_set_button,animdirid,self.animdir
                     if ~self.tooltip[0] then begin
                        widget_control,self.plotWin,tooltip = ''
                        self.tooltip[0] = 1b
                     endif
                     widget_displaycontextmenu,event.id,event.x,event.y,menuid
                  endif
               endif else begin  ;turn off zoom or show the menu bar for the compound widget
                  if compound_menu then begin
                     widget_displaycontextmenu,event.id,event.x,event.y,self.mbar[0]
                     if ~self.tooltip[0] then begin
                        widget_control,self.plotWin,tooltip = ''
                        self.tooltip[0] = 1b
                     endif
                  endif else begin
                     if is3d then self->reset3d,/reset,/redraw $
                     else begin
                        if ptr_valid(self.zoomstack) then begin                   
                           n_stack = n_elements((*self.zoomstack)[0,*])
                           old_ran = (*self.zoomstack)[*,n_stack-1]
                           if n_stack eq 1 then ptr_free,(self.zoomstack) else (*self.zoomstack) = (*self.zoomstack)[*,0:(n_stack-2)]
                           self->setproperty,xran=old_ran[0:1],yran=old_ran[2:3],zoom=0
                        endif
                        if ~self.tooltip[1] then begin
                           tooltip = 'Right click or left double click over the plot to change its properties'+(self.compound?', over the upper left corner to show the plot menu.':'.')
                           widget_control,self.plotWin,tooltip = (~self.tooltip[0])?tooltip:''
                           self.tooltip[1] = 1b
                        endif
                     endelse
                  endelse
               endelse
            endif else begin
               if is3d then self->rotate,event $
               else self->zoom,event
            endelse
            if (event.type eq 2) then begin
               ;figure out the x & y & z values of the cursor
               xval = !values.f_nan & yval = !values.f_nan & zval = !values.f_nan & zerr = !values.f_nan & layer = 1e20
               self->getproperty,xran=xran,yran=yran
               self.drawView->getproperty,dimension=dim
               x = self.viewplane[0]+(0>(event.x/dim[0])<1)*self.viewplane[2]
               y = self.viewplane[1]+(0>(event.y/dim[1])<1)*self.viewplane[3]
               if ~is3d then begin
                  if (x ge 0) and (x le 1) then begin
                     xval = xran[0]+x*(xran[1]-xran[0])
                     if self.xlog then xval = 10.0^xval
                  endif
                  if (y ge 0) and (y le 1) then begin
                     yval = yran[0]+y*(yran[1]-yran[0])
                     if self.ylog then yval = 10.0^yval
                  endif
                  ;update the cursor position string
                  if self.showcpos and (~obj_valid(self.zoombox) or (~self.moveLegend and self.cuttype ge 0)) then begin
                     cursorpos = ''
                     if finite(xval) and finite(yval) then begin
                        cursorpos = cursorpos+'x='+dm_to_string(xval)+' y='+dm_to_string(yval)
                        for i=0,ncon-1 do begin
                            if n_elements(*(*self.plotInfo)[indcon[i]].xPtr) eq n_elements(*(*self.plotInfo)[indcon[i]].zPtr) then continue
                            indx = where(*(*self.plotInfo)[indcon[i]].xPtr lt xval,nx)
                            indy = where(*(*self.plotInfo)[indcon[i]].yPtr lt yval,ny)
                            maxx = max(*(*self.plotInfo)[indcon[i]].xPtr,indmaxx)
                            maxy = max(*(*self.plotInfo)[indcon[i]].yPtr,indmaxy)
                            if (nx gt 0) and (ny gt 0) and (xval le maxx) and (yval le maxy) then begin
                               if indmaxx eq 0 then indx = indx[0] else indx = indx[nx-1] 
                               if indmaxy eq 0 then indy = indy[0] else indy = indy[ny-1]
                               if obj_isa((*self.plotInfo)[indcon[i]].obj,'IDLgrPolygon') then begin
                                  if indmaxx eq 0 then begin  ;x data is in descending order
                                     if indx-1 ge 0 then begin
                                        x1 = (*(*self.plotInfo)[indcon[i]].xPtr)[indx]
                                        x2 = (*(*self.plotInfo)[indcon[i]].xPtr)[indx-1]
                                        if xval gt (x2+x1)*0.5 then indx = indx-1L
                                     endif
                                  endif else begin  ;ascending
                                     if indx+1 le n_elements(*(*self.plotInfo)[indcon[i]].xPtr)-1 then begin
                                        x1 = (*(*self.plotInfo)[indcon[i]].xPtr)[indx]
                                        x2 = (*(*self.plotInfo)[indcon[i]].xPtr)[indx+1]
                                        if xval gt (x2+x1)*0.5 then indx = indx+1L
                                     endif
                                  endelse
                                  if indmaxy eq 0 then begin  ;y data is in descending order
                                     if indy-1 ge 0 then begin
                                        y1 = (*(*self.plotInfo)[indcon[i]].yPtr)[indy]
                                        y2 = (*(*self.plotInfo)[indcon[i]].yPtr)[indy-1]
                                        if yval gt (y2+y1)*0.5 then indy = indy-1L
                                     endif
                                  endif else begin  ;ascending
                                     if indy+1 le n_elements(*(*self.plotInfo)[indcon[i]].yPtr)-1 then begin
                                        y1 = (*(*self.plotInfo)[indcon[i]].yPtr)[indy]
                                        y2 = (*(*self.plotInfo)[indcon[i]].yPtr)[indy+1]
                                        if yval gt (y2+y1)*0.5 then indy = indy+1L
                                     endif
                                  endelse
                               endif
                               if finite((*(*self.plotInfo)[indcon[i]].zPtr)[indx,indy]) and ((*self.plotInfo)[indcon[i]].layer lt layer) then begin
                                  zval  = (*(*self.plotInfo)[indcon[i]].zPtr)[indx,indy]
                                  layer = (*self.plotInfo)[indcon[i]].layer
                                  if n_elements(*(*self.plotInfo)[indcon[i]].dzPtr) eq n_elements(*(*self.plotInfo)[indcon[i]].zPtr) then begin
                                     if finite((*(*self.plotInfo)[indcon[i]].dzPtr)[indx,indy]) then zerr = (*(*self.plotInfo)[indcon[i]].dzPtr)[indx,indy]
                                  endif
                               endif
                            endif
                        endfor
                        if finite(zval) then cursorpos = cursorpos+' int='+dm_to_string(zval)
                        if finite(zerr) then cursorpos = cursorpos+' err='+dm_to_string(zerr)
                     endif
                     self->set_cursortxt,cursorpos
                  endif
               endif
               ;send out motion events
               if self.motion_events then begin
                  ;patch xval and yval to the event
                  event = create_struct(event,"XVAL",xval,"YVAL",yval,name="DM_PLOT_MOTION")
                  if obj_valid(self.parentobj) then $                           ;notify parent object
                     call_method,self.parenthandler,self.parentobj,event $
                  else if widget_info(self.group_leader,/valid_id) ne 0 then $
                     widget_control,self.group_leader,send_event=event
               endif
            endif
            end
       'dm_tlb':         if strlowcase(tag_names(event,/structure)) eq 'widget_base' then begin
                         self->resize,event
                         return
                         endif
       'dm_exitBut':     obj_destroy,self
       'dm_readDAVE':    self->readfile,/dave
       'dm_readBut':     self->readfile,/oned
       'dm_readSpe':     self->readfile,/twod
       'dm_saveps':      self->saveas,'ps'
       'dm_savepdf':     self->saveas,'pdf'
       'dm_savejpg':     self->saveas,'jpeg'
       'dm_savegif':     self->saveas,'gif'
       'dm_savetif':     self->saveas,'tiff'
       'dm_savebmp':     self->saveas,'bmp'
       'dm_savepng':     self->saveas,'png'
       'dm_saveppm':     self->saveas,'ppm'
       'dm_saveasc':     self->saveas,'ascii'
       'dm_saveclipbd':  self->saveas,'clipboard'
       'dm_printBut':    self->saveas,'printer'
       'dm_blackbg':     if self.misscol      then self->setproperty,misscol=0
       'dm_whitebg':     if (~self.misscol)   then self->setproperty,misscol=1
       'dm_blackpaper':  if self.papercol     then self->setproperty,papercol=0
       'dm_whitepaper':  if (~self.papercol)  then self->setproperty,papercol=1
       'dm_isolatyes':   if (~self.isolatin1) then self->setproperty,isolatin1=1
       'dm_isolatno':    if self.isolatin1    then self->setproperty,isolatin1=0
       'dm_vtrm_pr':     if self.vtrm_pt      then self->setproperty,vtrm_pt=0
       'dm_vtrm_tr':     if (~self.vtrm_pt)   then self->setproperty,vtrm_pt=1
       'dm_bitmap':      if self.vector       then self->setproperty,vector=0
       'dm_vector':      if (~self.vector)    then self->setproperty,vector=1
       'dm_bgblack':     if self.bgcol        then self->setproperty,bgcolor=0
       'dm_bgwhite':     if (~self.bgcol)     then self->setproperty,bgcolor=1
       'dm_idltick':     if self.tickstyle    then self->setproperty,tickstyle=0
       'dm_owntick':     if (~self.tickstyle) then self->setproperty,tickstyle=1
       'dm_vtcol_none':  if self.vt_col ne 0  then self->setproperty,vt_col=0
       'dm_vtcol_avg2':  if self.vt_col ne 1  then self->setproperty,vt_col=1
       'dm_vtcol_avg3':  if self.vt_col ne 2  then self->setproperty,vt_col=2
       'dm_mpeglicense':begin
            if lmgr(/runtime) then begin
               defsysv,'!DAVE_DIR',exists=exists
               if (~exists) then begin
                  ok = dialog_message('A license is required to save MPEG files.',dialog_parent=self.tlb,/info,/center)
                  return
               endif
               ;start the license wizard
               if !version.os_family eq 'Windows' then begin
                  dave_dir = !DAVE_DIR+dm_define_pointer(/getpathsep)+'IDL'+dm_to_string(float(!version.release)*10)
                  cmd = '"'+dave_dir+'\bin\bin.x86\idlrt.exe" -em="'+dave_dir+'\lib\hook\ittlicense.sav"'
                  spawn, cmd, /noshell, /nowait
               endif else begin
                  dave_dir = !DAVE_DIR+dm_define_pointer(/getpathsep)+'idl'+dm_to_string(float(!version.release)*10)
                  cmd = dave_dir+'/bin/ittlicense &'
                  spawn, cmd
               endelse
               ;display instructions to request a license
               info = 'A license is required to save MPEG files. To request a free MPEG license:'
               info = [info,'',$
                       'a) In the License Wizard, select the second radio button ("Request a license if you '+"don't"+' have internet access")',$
                       '    and click Next> to view the license request form.','',$
                       'b) Skip "Option 1", copy the contents of the section "Option 2" of the displayed information to an email to send to EXELIS Visual information Solutions.',$
                       '    It is important to fill in all blank fields in the form, where "License number" should be filled in with the comment:','',$
                       '       Request MPEG-only license to use with NIST embedded license application "DAVE" (license #: 99368)','',$
                       'c) Please include your affiliation and postal address (and optionally a phone number) for EXELIS to process your request.','',$
                       'd) Send the license request to support@exelisvis.com. Use as the subject line the text:','',$
                       '       Request MPEG-only license to use with NIST embedded license application "DAVE"','',$
                       'e) When you have received the MPEG license file information, if you have received it in the form of file attachment named "license.dat",',$
                       '    simply save the "license.dat" file attachment into the "license" directory, being sure that the file has read permissions for all users.','',$
                       '    Note: The "license" directory is located underneath your main DAVE installation directory.', '',$
                       '    If the license file information was not delivered as a file attachment, then instead, start the license wizard(click the Save As MPEG File button) again.',$
                       '    Select the third radio button, "Install a license I have received", and click Next>.  With the "Activated license" radio button selected,',$
                       '    eithe copy and paste the license text into the editor window, or click on "Import license text" button to import the license file text ',$
                       '    from a plain text file that you have save to your hard drive.','',$
                       'f)  Restart your program.']
               xdisplayfile,text=info,/editable,group=self.tlb,width=120,title="How to request a MPEG license:",return_id=wid
               dm_center_kid,wid,self.tlb
            endif else begin
               info = ['A license is required to save MPEG files. To request a free MPEG license, see instructions at',$
                       'https://www.exelisvis.com/Support/HelpArticlesDetail/TabId/219/ArtMID/900/ArticleID/5350/5350.aspx']
               ok   = dialog_message(info,dialog_parent=self.tlb,/info,/center)
            endelse
            end
       'dm_keepBut': self->setproperty,keep=1b
       'dm_mkcrBut': self->setproperty,keep=0b
       'dm_show_all':begin
            for i=0,n_elements(*self.plotInfo)-1 do begin
                (*self.plotInfo)[i].obj->setproperty,hide=0
                (*self.plotInfo)[i].hide = 0
            endfor
            if obj_valid(self.title) then self.title->setproperty,hide=0
            ;show all additional text objects
            for j=0,1 do begin
                oChildArr = ([self.drawModel,self.drawGroup])[j]->IDL_Container::Get(/ALL, COUNT=nKids)
                for i=0,nKids-1 do begin
                    if obj_isa(oChildArr[i],'IDLgrText') and (oChildArr[i] ne self.cursorpos) and (oChildArr[i] ne self.cornertxt) then oChildArr[i]->setproperty,hide=0
                endfor
            endfor
            self->draw
            widget_control,event.id,sensitive=0
            end
       'dm_addtextBut':begin
            self->getproperty,xran=xran,yran=yran,zran=zran,is3d=is3d
            self.font[4]->getproperty,name=name
            all_font = *self.fname0
            tmp_font = *self.fname1
            font = 0>(where(all_font eq strlowcase(name)))
            default  = ['',(['0',''])[is3d],dm_to_string(font),dm_to_string(self.fsize[1]),'0','']
            new = dm_dialog_input(['text','orientation','font','font size','color','position']+':',title='Add text',default=default,xsize=130,dialog_parent=self.tlb,cancel=cancel,$
                  is_droplist=[0,0,1,0,1,0],droplist_content=[ptr_new(tmp_font),ptr_new(all_col)],info=['Leave position blank for drag-movable text. For','fixed text, the position is in '+$
                  (['(x,y)','(x,y,z)'])[is3d]+' data coordinates.'])
            if keyword_set(cancel) or (strlen(new[0]) eq 0) then break   ;null string
            if new[4] eq 'user define' then define = self->getdefinecolor()
            fsize = (4>(dm_to_number(new[3],/int)))
            orientation = dm_to_number(new[1],/float)
            if finite(orientation,/nan) then orientation = 0.0
            txtpos = [([-0.05,-0.6])[is3d],1.08-sin(orientation*!dtor)*0.07]
            if strlen(new[5]) ne 0 then begin
               tmp = dm_to_number(strsplit(new[5],',;() '+string(9b),/extract))
               if total(finite(tmp)) gt 1+is3d then begin
                  txtpos = tmp[0:1+is3d] & normalize = 0
                  txtpos[0] = (xran[0])>(txtpos[0])<(xran[1])
                  txtpos[1] = (yran[0])>(txtpos[1])<(yran[1])
                  if is3d then begin
                     txtpos[2] = (zran[0])>(txtpos[2])<(zran[1])
                     tmp = temporary(orientation)
                  endif
               endif
            endif
            ind = where(tmp_font eq new[2],count) & if count eq 0 then ind = 0
            self->add_text,new[0],txtpos,fontname=all_font[ind],fontsize=fsize,orientation=orientation,color=new[4],coldefine=define,normalize=normalize
            if n_elements(orientation) eq 0 then self->draw
            end
       'dm_addlineBut':begin
            if obj_valid(self.drawzAxis) then example='y=2*x & z=x^2+y^2' else example='y=x^2+sin(x)'
            all_sty = self->getlinestyle(/list)
            default = ['y=',dm_to_string(self.xran[*,self.xlog]),'101','0','0','0',dm_to_string(self.default[1]),'']
            path = self.path
            new = dm_dialog_input(['formula','x_start','x_end','# of points','line style','color','add arrow','thickness','legend']+':',title='Add line',default=default,xsize=130,$
                  is_file = [4],is_droplist=[0,0,0,0,1,1,1,0,0],droplist_content=[ptr_new(all_sty),ptr_new(all_col),ptr_new(['no','yes'])],cancel=cancel,duplicate=[0,8],filter='.txt',$
                  path=path,dialog_parent=self.tlb,info=['The formula must be a valid IDL expression, for example:',strjoin(strarr(26)+' ')+example,$
                  'Use & to combine multiple statements in one line.'])
            if path ne self.path then self->setproperty,path=path
            if keyword_set(cancel) or (strlen(new[0]) le 2) then break   ;null string
            x0 = dm_to_number(new[1],/float) & if finite(x0,/nan) then x0 = self.xran[0,self.xlog]
            x1 = dm_to_number(new[2],/float) & if finite(x1,/nan) then x1 = self.xran[1,self.xlog]
            if (x0 eq x1) and finite(new[1]) then ok = dialog_message(['Starting and ending x values are the same: '+new[1]+'.'],dialog_parent=self.tlb,/center)
            if new[5] eq 'user define' then define = self->getdefinecolor()
            nx = dm_to_number(new[3],/long) 
            if finite(nx,/nan) or (nx le 1) then nx = 101
            x = x0+findgen(nx)/(nx-1)*(x1-x0)
            if ~execute(new[0],1,1) then begin
               ok = dialog_message([!error_state.msg,'Please check the formula: '+new[0]],/error,dialog_parent=self.tlb,/center)
               break
            end
            if n_elements(z) ne 0 then begin
               if n_elements(z) eq 1 then z = z+fltarr(n_elements(x))   
            endif
            if n_elements(y) eq 1 then y = y+fltarr(n_elements(x))
            thick = dm_to_number(new[7],/float)
            if finite(thick,/nan) then thick = 1.0
            thick = (([1.0,0.0])[self.idl_version ge 8.1])>(thick)<10.0
            if n_elements(z) ne 0 then $     
               self->add_plot,x,y,z,color=new[5],coldefine=define,legend=new[8],linestyle=new[4],thick=thick,formula=new[0],addarrow=(new[6] eq 'yes') $
            else $
               self->add_plot,x,y,color=new[5],coldefine=define,legend=new[8],linestyle=new[4],thick=thick,formula=new[0],addarrow=(new[6] eq 'yes')
            self->draw
            end
       'dm_pwsizeBut':  begin
            self.drawView->getproperty,dimension=dim
            newdim = dm_dialog_input(['xsize:','ysize:'],title='Set pixel size',xsize=100,default=dim,/float,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) or (total(finite(newdim)) ne 2) or (min(newdim,/nan) lt 0) then break
            newdim = fix(newdim)      
            self.default[4:5] = newdim
            self->resize,{x:newdim[0],y:newdim[1]+self.menumargin}
            end
       'dm_pwTitleBut': begin
            wtitle = dm_dialog_input('base title:',title='Set window title',xsize=100,default=self.wtit,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then break
            self->setproperty,wtitle=wtitle  
            end
       'dm_textrm_0':   self->setproperty,render_method=0     
       'dm_textrm_1':   self->setproperty,render_method=1
       'dm_isoBut':     self->setproperty,isotropic=(~self.isotropic)
       'dm_xgridBut':   self->setproperty,showxgrid=(~self.showxgrid)
       'dm_ygridBut':   self->setproperty,showygrid=(~self.showygrid)
       'dm_zgridBut':   self->setproperty,showzgrid=(~self.showzgrid)
       'dm_gridcolor':  self->change_color,[self.xgrid,self.ygrid,self.zgrid],name='grid'
       'dm_gridlinestyle':begin
            all_lines = self->getlinestyle(/list)
            all_lines = all_lines[0:n_elements(all_lines)-2]
            old = self.gridlinestyle
            object = [self.xgrid,self.ygrid,self.zgrid]
            new = dm_dialog_input('linestyle:',title='Set grid linestyle',default=old,is_droplist=[1],droplist_content=ptr_new(all_lines),xsize=100,dialog_parent=self.tlb,$
                    parentobject=self,object=object,property='linestyle',apply=apply,/return_number,cancel=cancel)
            if keyword_set(cancel) then begin
               if keyword_set(apply) then self->setproperty,gridlinestyle=old
               return
            endif
            if keyword_set(apply) or (new[0] ne old[0]) then self->setproperty,gridlinestyle=new[0]
            end     
       'dm_gridthick':begin
            old = dm_to_string(self.gridthick)
            new = dm_dialog_input('thickness:',title='Set grid thickness',xsize=100,default=old,dialog_parent=self.tlb,info=(['1.0','0.0'])[self.idl_version ge 8.1]+'<thickness<10.0',cancel=cancel)
            if (~keyword_set(cancel)) and (old ne new) then begin
               new = dm_to_number(new)
               if finite(new) then self->setproperty,gridthick=((([1.0,0.0])[self.idl_version ge 8.1])>(new)<10.0)
            endif
            end
       'dm_gridpos_bot':if self.gridontop ne 0 then self->setproperty,gridontop=0
       'dm_gridpos_top':if self.gridontop ne 1 then self->setproperty,gridontop=1
       'dm_showcposBut':self->setproperty,showcursorpos=(~self.showcpos)
       'dm_titlBut':    self->change_title,4
       'dm_titlfontBut':self->change_font,4
       'dm_ctxtBut':    self->change_title,7
       'dm_ctxtfontBut':self->change_font,7
       'dm_ititBut':    self->change_title,5
       'dm_cbarfontBut':self->change_font,8
       'dm_xranBut':begin
            new = dm_dialog_input(['from:','to:'],title='Set x range',xsize=100,default=float(self.xran[*,self.xlog]),/float,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then break 
            if total(finite(new)) eq 2 then begin
               if total(abs(new-self.xran[*,self.xlog])) ne 0 then begin
                  if new[1] gt new[0] then  self->setproperty,xran=new
               endif
            endif
            end
       'dm_xlogBut':    self->setproperty,xlog=(~self.xlog)
       'dm_xtitBut':    self->change_title,1
       'dm_xtitfontBut':self->change_font,1
       'dm_xmajorBut':begin
            old = self.tickmajor[0+4*self.xlog]
            new = dm_dialog_input(['major tick number:'],title='x axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set major tick number to -1 for default major tickmarks.','Setting it to 0 suppresses major tickmarks entirely.'])    
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,xtickmajor=new    
            end    
       'dm_xminorBut':begin
            old = self.tickminor[0+4*self.xlog]
            new = dm_dialog_input(['minor tick number:'],title='x axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set minor tick number to -1 for default minor tickmarks.','Setting it to 0 suppresses minor tickmarks entirely.'])    
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,xtickminor=new    
            end
       'dm_xticklenBut':begin
            old = self.ticklen[0+4*self.isotropic]
            new = dm_dialog_input(['major tick length:'],title='x axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,xticklen=new  
            end      
       'dm_xsubticklenBut':begin
            old = self.subticklen[0+4*self.isotropic]
            new = dm_dialog_input(['minor tick length:'],title='x axis',xsize=100,default=old,dialog_parent=self.tlb,$
                    info='This value is the ratio of the minor and major tick mark lengths.',cancel=cancel)      
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,xsubticklen=new    
            end   
       'dm_xtickintervalBut':begin
            if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->getproperty,tickinterval=old
            new = dm_dialog_input(['tick interval:'],title='x axis',xsize=100,default=old,dialog_parent=self.tlb,info='Set it to 0 for default interval.',cancel=cancel)
            if ~finite(new) then new = 0.0
            if (~keyword_set(cancel)) then self->setproperty,xtickinterval=abs(new)
            end
       'dm_yranBut':begin
            new = dm_dialog_input(['from:','to:'],title='Set y range',xsize=100,default=float(self.yran[*,self.ylog]),/float,dialog_parent=self.tlb)
            if total(finite(new)) eq 2 then begin
               if total(abs(new-self.yran[*,self.ylog])) ne 0 then begin
                  if new[1] gt new[0] then self->setproperty,yran=new
               endif
            endif
            end
       'dm_ylogBut':    self->setproperty,ylog=(~self.ylog)
       'dm_ytitBut':    self->change_title,2
       'dm_ytitfontBut':self->change_font,2
       'dm_ymajorBut':begin
            old = self.tickmajor[1+4*self.ylog]
            new = dm_dialog_input(['major tick number:'],title='y axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set major tick number to -1 for default major tickmarks.','Setting it to 0 suppresses major tickmarks entirely.'])
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,ytickmajor=new    
            end    
       'dm_yminorBut':begin
            old = self.tickminor[1+4*self.ylog]
            new = dm_dialog_input(['minor tick number:'],title='y axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set minor tick number to -1 for default minor tickmarks.','Setting it to 0 suppresses minor tickmarks entirely.'])
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,ytickminor=new    
            end
       'dm_yticklenBut':begin
            old = self.ticklen[1+4*self.isotropic]
            new = dm_dialog_input(['major tick length:'],title='y axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,yticklen=new  
            end      
       'dm_ysubticklenBut':begin
            old = self.subticklen[1+4*self.isotropic]
            new = dm_dialog_input(['minor tick length:'],title='y axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info='This value is the ratio of the minor and major tick mark lengths.')
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,ysubticklen=new    
            end  
       'dm_ytickintervalBut':begin
            if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->getproperty,tickinterval=old
            new = dm_dialog_input(['tick interval:'],title='y axis',xsize=100,default=old,dialog_parent=self.tlb,info='Set it to 0 for default interval.',cancel=cancel)
            if ~finite(new) then new = 0.0
            if (~keyword_set(cancel)) then self->setproperty,ytickinterval=abs(new)
            end                  
       'dm_ztitBut':    self->change_title,3
       'dm_ztitfontBut':self->change_font,3
       'dm_zranBut':begin
            new = dm_dialog_input(['from:','to:'],title='Set z range',xsize=100,default=float(self.zran[*,self.zlog]),/float,dialog_parent=self.tlb)
            if total(finite(new)) eq 2 then begin
               if total(abs(new-self.zran[*,self.zlog])) ne 0 then begin
                  if new[1] gt new[0] then self->setproperty,zran=new
               endif
            endif
            end
       'dm_zlogBut':self->setproperty,zlog=(~self.zlog)
       'dm_zmajorBut':begin
            old = self.tickmajor[2+4*self.zlog]
            new = dm_dialog_input(['major tick number:'],title='z axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set major tick number to -1 for default major tickmarks.','Setting it to 0 suppresses major tickmarks entirely.'])
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,ztickmajor=new    
            end    
       'dm_zminorBut':begin
            old = self.tickminor[2+4*self.zlog]
            new = dm_dialog_input(['minor tick number:'],title='z axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set minor tick number to -1 for default minor tickmarks.','Setting it to 0 suppresses minor tickmarks entirely.'])
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,ztickminor=new    
            end
       'dm_zticklenBut':begin
            old = self.ticklen[2]
            new = dm_dialog_input(['major tick length:'],title='z axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,zticklen=new  
            end      
       'dm_zsubticklenBut':begin
            old = self.subticklen[2]
            new = dm_dialog_input(['minor tick length:'],title='z axis',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info='This value is the ratio of the minor and major tick mark lengths.')
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,zsubticklen=new    
            end
       'dm_ztickintervalBut':begin
            if obj_valid(self.drawzAxis) then self.drawzAxis->getproperty,tickinterval=old
            new = dm_dialog_input(['tick interval:'],title='z axis',xsize=100,default=old,dialog_parent=self.tlb,info='Set it to 0 for default interval.',cancel=cancel)
            if ~finite(new) then new = 0.0
            if (~keyword_set(cancel)) then self->setproperty,ztickinterval=abs(new)
            end          
       'dm_iranBut':begin
            new = dm_dialog_input(['from:','to:'],title='Set i range',xsize=100,default=float(self.iran[*,self.ilog]),/float,dialog_parent=self.tlb)
            if total(finite(new)) eq 2 then begin
               if total(abs(new-self.iran[*,self.ilog])) ne 0 then begin
                  if new[1] gt new[0] then self->setproperty,iran=new
               endif
            endif
            end
       'dm_ilogBut':self->setproperty,ilog=(~self.ilog)
       'dm_imajorBut':begin
            old = self.tickmajor[3+4*self.ilog]
            new = dm_dialog_input(['major tick number:'],title='color bar',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set major tick number to -1 for default major tickmarks.','Setting it to 0 suppresses major tickmarks entirely.'])
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,itickmajor=new    
            end    
       'dm_iminorBut':begin
            old = self.tickminor[3+4*self.ilog]
            new = dm_dialog_input(['minor tick number:'],title='color bar',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info=['Set minor tick number to -1 for default minor tickmarks.','Setting it to 0 suppresses minor tickmarks entirely.'])
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then self->setproperty,itickminor=new    
            end
       'dm_iticklenBut':begin
            old = self.ticklen[3]
            new = dm_dialog_input(['major tick length:'],title='color bar',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,iticklen=new  
            end      
       'dm_isubticklenBut':begin
            old = self.subticklen[3]
            new = dm_dialog_input(['minor tick length:'],title='color bar',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,$
                    info='This value is the ratio of the minor and major tick mark lengths.')
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then self->setproperty,isubticklen=new    
            end
       'dm_itickintervalBut':begin
            if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->getproperty,tickinterval=old
            new = dm_dialog_input(['tick interval:'],title='i axis',xsize=100,default=old,dialog_parent=self.tlb,info='Set it to 0 for default interval.',cancel=cancel)
            if ~finite(new) then new = 0.0
            if (~keyword_set(cancel)) then self->setproperty,itickinterval=abs(new)
            end        
       'dm_cs_axistickfont': self->change_font,0  
       'dm_psymBut':begin
            if n_elements((*self.plotInfo)) eq 0 then break ; no plots
            onedplot = where((*self.plotInfo)[*].type eq 0,count) & if count eq 0 then break
            all_psym = self->getpsym(/list)
            name = strarr(count*2) & default=fltarr(count*2) & is_droplist=bytarr(count*2) & old=strarr(count*2)
            for i=0,count-1 do begin
                name[(2*i):(2*i+1)] = ['line '+dm_to_string(i)+'  symbol name:','       '+'symbol size:']
                default[2*i]        = 0>(where(all_psym eq (*self.plotInfo)[onedplot[i]].psym))
                default[2*i+1]      = (*self.plotInfo)[onedplot[i]].symsize
                old[2*i]            = (*self.plotInfo)[onedplot[i]].psym
                old[2*i+1]          = dm_to_string((*self.plotInfo)[onedplot[i]].symsize)
                is_droplist[(2*i):(2*i+1)] = [1,0]
            endfor
            if count eq 1 then name = ['symbol name:','symbol size:']
            new = dm_dialog_input(name,title='Set plot symbol',default=default,is_droplist=is_droplist,droplist_content=ptr_new(all_psym),xsize=120,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then break 
            index = where(strlen(new) eq 0,count0)
            if count0 gt 0 then new[index]=old[index]
            changeid = -1
            for i=0,count-1 do begin
                if (new[2*i] ne old[2*i]) or (new[2*i+1] ne old[2*i+1]) then begin
                   (*self.plotInfo)[onedplot[i]].psym = new[2*i]
                   (*self.plotInfo)[onedplot[i]].symsize = 0.0>(dm_to_number(new[2*i+1]))<1.0
                   changeid = [changeid,onedplot[i]]
                endif
            endfor
            if n_elements(changeid) gt 1 then self->setproperty,plotInfo=(*self.plotInfo),changeid=changeid[1:*]
            end
       'dm_lineBut':begin
            if n_elements((*self.plotInfo)) eq 0 then break ; no plots
            onedplot  = where((*self.plotInfo)[*].type eq 0,count)        & if count eq 0 then break
            all_lines = self->getlinestyle(/list)
            name = strarr(count*2) & default = fltarr(count*2)
            is_droplist = bytarr(count*2)+1b & old = strarr(count*2)
            for i=0,count-1 do begin
                name[(2*i):(2*i+1)] = ['line '+dm_to_string(i)+'  linestyle:','       '+'thickness:']
                default[2*i]        = (*self.plotInfo)[onedplot[i]].linestyle
                default[2*i+1]      = (*self.plotInfo)[onedplot[i]].thick
                old[2*i]            = dm_to_string((*self.plotInfo)[onedplot[i]].linestyle)
                old[2*i+1]          = dm_to_string((*self.plotInfo)[onedplot[i]].thick)
                is_droplist[(2*i):(2*i+1)] = [1,0]
            endfor
            if count eq 1 then name = ['linestyle:','thickness:']
            new = dm_dialog_input(name,title='Set line style',default=default,is_droplist=is_droplist,$
                droplist_content=ptr_new(all_lines),xsize=100,dialog_parent=self.tlb,/return_number,cancel=cancel)
            if keyword_set(cancel) then break
            index = where(strlen(new) eq 0,count0)
            if count0 gt 0 then new[index]=old[index]
            changeid = -1
            for i=0,count-1 do begin
                if (new[2*i] ne old[2*i]) or (new[2*i+1] ne old[2*i+1]) then begin
                   (*self.plotInfo)[onedplot[i]].linestyle = dm_to_number(new[2*i],/int)
                   (*self.plotInfo)[onedplot[i]].thick = (([1.0,0.0])[self.idl_version ge 8.1])>(dm_to_number(new[2*i+1]))<10.0
                   changeid = [changeid,onedplot[i]]
                endif
            endfor
            if n_elements(changeid) gt 1 then self->setproperty,plotInfo=(*self.plotInfo),changeid=changeid[1:*]
            end
       'dm_pcolBut':self->change_color,/onedplot
       'dm_lgndBut':begin
            if n_elements((*self.plotInfo)) eq 0 then break ; no plots
            onedplot = where((*self.plotInfo)[*].type eq 0,count) & if count eq 0 then break
            onedshow = where((*self.plotInfo)[onedplot].hide eq 0,count) & if count eq 0 then break
            self.font[5]->getproperty,name=fontname
            name = 'line '+dm_to_string(indgen(count))+':' & if count eq 1 then name=['label:']
            old  = self->textadjust((*self.plotInfo)[onedplot[onedshow]].legend,/reverse,fontname=fontname)
            new  = dm_dialog_input(name,title='Set legend labels',default=old,xsize=100,dialog_parent=self.tlb,info=self.textadjustinfo,cancel=cancel)
            if keyword_set(cancel) then break
            for i=0,count-1 do begin
                if strtrim(new[i],2) ne strtrim(old[i],2) then begin
                   (*self.plotInfo)[onedplot[onedshow[i]]].legend = self->textadjust(new[i],fontname=fontname)
                   changed = 1b
                endif
            endfor
            if keyword_set(changed) then self->updatelegend,/draw
            end
       'dm_lgndfontBut': self->change_font,5
       'dm_ltitBut':     self->change_title,5
       'dm_pnsetBut':ok = dialog_printersetup(self.printer,dialog_parent=self.tlb)
       'dm_help1But':if strlen(self.helpfile1) ne 0 then begin
            online_help,book=self.helpfile1,/full_path
            endif
       'dm_help2But':if strlen(self.helpfile2) ne 0 then begin
            online_help,book=self.helpfile2,/full_path
            endif
       'dm_selfBut': begin
            ok = dialog_message(*self.info,/information,dialog_parent=self.tlb,title='About dm_plot',/center)
            if (self.idl_version ge 5.6) and (strlowcase(!version.os_family) eq 'windows') then begin   ;show tooltips  
               self.tooltip = [0b,0b,0b]  
               tooltip = 'Right click or left double click over the plot to change its properties'+(self.compound?', over the upper left corner to show the plot menu.':'.')
               widget_control,self.plotWin,tooltip = tooltip
            endif
            end
       'dm_cs_arrowangle':begin
            index = where((*self.plotInfo)[*].obj eq self.select,count)
            if count ne 1 then break else index = index[0]
            if ((*self.plotInfo)[index].type ne -3) then begin
               if index le 0 then break else index = index-1
               if (*self.plotInfo)[index].type ne -3 then break
            endif
            old = (*(*self.plotInfo)[index].dxPtr)
            new = dm_dialog_input('arrow angle:',title='Set arrow angle',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,info=['Set it to 0 for default angle.'])
            if keyword_set(cancel) or finite(new,/nan) or (new eq old) then break
            (*(*self.plotInfo)[index].dxPtr) = new
            self->draw
            end
       'dm_cs_arrowlength':begin
            index = where((*self.plotInfo)[*].obj eq self.select,count)
            if count ne 1 then break else index = index[0]
            if ((*self.plotInfo)[index].type ne -3) then begin
               if index le 0 then break else index = index-1
               if (*self.plotInfo)[index].type ne -3 then break
            endif
            old = (*(*self.plotInfo)[index].dyPtr)
            new = dm_dialog_input('arrow length:',title='Set arrow length',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel,info=['Set it to 0 for default length.'])
            if keyword_set(cancel) or finite(new,/nan) or (new eq old) then break
            (*(*self.plotInfo)[index].dyPtr) = abs(new)
            self->draw
            end          
       'dm_cs_title':begin
            self.select->getproperty,name=name
            case name of 
                 'text':  index = 0
                 'axis':  begin
                          if obj_isa(self.select,'IDLgrAxis') then begin
                             self.select->getproperty,title=title,direction=direction
                             index = direction+1
                          endif else index = 4
                          end
                 'title': index = 4
                 'legend':index = 5        
                 'cbar':  index = 6
                 'cornertxt': index = 7
                 else:    return
            endcase
            self->change_title,index,select=self.select
            end
       'dm_cs_range':begin
            self.select->getproperty,name=name
            if (name eq 'axis') and (self.select ne self.drawyAxis[2]) then begin
               self.select->getproperty,direction=direction
               type = (['x','y','z'])[direction]
            endif else  type = 'i'
            old = call_function("dm_to_string",(type eq 'x')?(self.xran[*,self.xlog]):$
                  ((type eq 'y')?(self.yran[*,self.ylog]):((type eq 'z')?(self.zran[*,self.zlog]):(self.iran[*,self.ilog]))))
            new = dm_dialog_input(['from:','to:'],title='Set '+type+' range',xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and ((old[0] ne new[0]) or (old[1] ne new[1])) then begin
               new = dm_to_number(new)
               if total(finite(new)) eq 2 then begin
                  if new[1] gt new[0] then begin
                     case type of
                          'x':    self->setproperty,xran=new
                          'y':    self->setproperty,yran=new
                          'z':    self->setproperty,zran=new
                          'i':    self->setproperty,iran=new
                     endcase
                  endif
               endif
            endif
            end
       'dm_cs_axistickinterval':begin
            self.select->getproperty,name=name
            if (name eq 'axis') and (self.select ne self.drawyAxis[2]) then begin
               self.select->getproperty,direction=direction
               type = (['x','y','z'])[direction]
            endif else  type = 'i'
            case type of
                 'x': if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->getproperty,tickinterval=old
                 'y': if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->getproperty,tickinterval=old
                 'z': if obj_valid(self.drawzAxis)    then self.drawzAxis->getproperty,tickinterval=old
                 'i': if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->getproperty,tickinterval=old
                 else: 
            endcase
            new = dm_dialog_input(['tick interval:'],title=type+' axis',xsize=100,default=old,dialog_parent=self.tlb,info='Set it to 0 for default interval.',cancel=cancel)
            if ~finite(new) then new = 0.0
            if (~keyword_set(cancel)) then begin
               case type of
                    'x': self->setproperty,xtickinterval=abs(new)
                    'y': self->setproperty,ytickinterval=abs(new)
                    'z': self->setproperty,ztickinterval=abs(new)
                    'i': self->setproperty,itickinterval=abs(new)
                    else:
               endcase
            endif
            end     
       'dm_cs_logscale':begin
            self.select->getproperty,name=name 
            if (name eq 'axis') and (self.select ne self.drawyAxis[2]) then begin
               self.select->getproperty,direction=direction 
               type = (['x','y','z'])[direction]+'log'
            endif else  type = 'ilog'
            case type of
                 'xlog':  self->setproperty,xlog=1-self.xlog
                 'ylog':  self->setproperty,ylog=1-self.ylog
                 'zlog':  self->setproperty,zlog=1-self.zlog
                 else:    self->setproperty,ilog=1-self.ilog
            endcase
            end
       'dm_cs_axistickmajor':begin
            self.select->getproperty,name=name
            if (name eq 'axis') and (self.select ne self.drawyAxis[2]) then begin
               self.select->getproperty,direction=direction 
               type = direction+4*([self.xlog,self.ylog,self.zlog])[direction]
            endif else  type = 3+4*self.ilog
            old = self.tickmajor[type]
            new = dm_dialog_input(['major tick number:'],title=(['x axis','y axis','z axis','color bar'])[type mod 4],$
                    xsize=100,default=old,dialog_parent=self.tlb,info=['Set major tick number to -1 for default major tickmarks.',$
                    'Setting it to 0 suppresses major tickmarks entirely.'],cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then begin
               case (type mod 4) of
                    0:  self->setproperty,xtickmajor=new    
                    1:  self->setproperty,ytickmajor=new    
                    2:  self->setproperty,ztickmajor=new    
                    3:  self->setproperty,itickmajor=new    
               endcase
            endif
            end
       'dm_cs_axistickminor':begin
            self.select->getproperty,name=name
            if (name eq 'axis') and (self.select ne self.drawyAxis[2]) then begin
               self.select->getproperty,direction=direction 
               type = direction+4*([self.xlog,self.ylog,self.zlog])[direction]
            endif else  type = 3+4*self.ilog
            old = self.tickminor[type]
            new = dm_dialog_input(['minor tick number:'],title=(['x axis','y axis','z axis','color bar'])[type mod 4],$
                    xsize=100,default=old,dialog_parent=self.tlb,info=['Set minor tick number to -1 for default minor tickmarks.',$
                    'Setting it to 0 suppresses minor tickmarks entirely.'],cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) and (new ge -1) then begin
               case (type mod 4) of
                    0:  self->setproperty,xtickminor=new    
                    1:  self->setproperty,ytickminor=new    
                    2:  self->setproperty,ztickminor=new    
                    3:  self->setproperty,itickminor=new    
               endcase
            endif
            end
       'dm_cs_axismajorticklength':begin
            self.select->getproperty,name=name
            if (name eq 'axis') and (self.select ne self.drawyAxis[2]) then begin
               self.select->getproperty,direction=direction 
               type = direction+4*([self.isotropic,self.isotropic,0])[direction]
            endif else  type = 3
            old = self.ticklen[type]
            new = dm_dialog_input(['major tick length:'],title=(['x axis','y axis','z axis','color bar'])[type mod 4],xsize=100,default=old,dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then begin
               case (type mod 4) of
                    0:  self->setproperty,xticklen=new    
                    1:  self->setproperty,yticklen=new    
                    2:  self->setproperty,zticklen=new    
                    3:  self->setproperty,iticklen=new    
               endcase
            endif
            end
       'dm_cs_axisminorticklength':begin
            self.select->getproperty,name=name
            if (name eq 'axis') and (self.select ne self.drawyAxis[2]) then begin
               self.select->getproperty,direction=direction 
               type = direction+4*([self.isotropic,self.isotropic,0])[direction]
            endif else  type = 3
            old = self.subticklen[type]
            new = dm_dialog_input(['minor tick length:'],title=(['x axis','y axis','z axis','color bar'])[type mod 4],cancel=cancel,$
                    xsize=100,default=old,dialog_parent=self.tlb,info='This value is the ratio of the minor and major tick mark lengths.')
            if (~keyword_set(cancel)) and (new ne old) and (new ge 0) then begin
               case (type mod 4) of
                    0:  self->setproperty,xsubticklen=new    
                    1:  self->setproperty,ysubticklen=new    
                    2:  self->setproperty,zsubticklen=new    
                    3:  self->setproperty,isubticklen=new    
               endcase
            endif
            end     
       'dm_cs_axisthick':begin
            old = dm_to_string(self.axisthick)
            new = dm_dialog_input('thickness:',title='Set axis thickness',xsize=100,default=old,dialog_parent=self.tlb,info=(['1.0','0.0'])[self.idl_version ge 8.1]+'<thickness<10.0',cancel=cancel)
            if (~keyword_set(cancel)) and (old ne new) then begin
               new = dm_to_number(new)
               if finite(new) then self->setproperty,axisthick=new
            endif
            end
       'dm_cs_textori':begin
            self.select->getproperty,baseline=baseline
            old = acos(baseline[0]/norm(baseline[0:1]))/!dtor
            if baseline[1] lt 0 then old=360-old
            old = round(old*10.)/10.   ;only accurate to the first decimal point
            new = dm_dialog_input('Orientation:',title='Set Text Orientation',default=old,xsize=100,dialog_parent=self.tlb,/float,cancel=cancel)
            if (~keyword_set(cancel)) and finite(new) then begin
               new = round(new*10.)/10.   ;only accurate to the first decimal point
               if new ne old then begin
                  new = new*!dtor & orie_cos = cos(new) & orie_sin = sin(new)
                  baseline = [orie_cos,orie_sin]
                  updir    = [-orie_sin,orie_cos]
                  self.select->setproperty,baseline=baseline,updir=updir
                  self->showview
               endif
            endif
            end
       'dm_cs_textpos': begin
            self.select->getproperty,xcoord_conv=tmpx,ycoord_conv=tmpy,uvalue=tmp,location=location
            if tmp.normalize then textpos = [tmpx[0],tmpy[0]] else textpos = location
            new = dm_dialog_input((['x','y','z'])[0:(n_elements(textpos)-1)]+':',title='Set text position',default=textpos,dialog_parent=self.tlb,xsize=100,cancel=cancel,$
                  info=['The position is in '+(['data coordinates.','normalized coordinates.'])[tmp.normalize],'The text is '+(['not ',''])[tmp.normalize]+'drag-movable.'])
            if keyword_set(cancel) or (total(finite(new)) eq 0) then break
            ind = where(finite(new,/nan),count)
            if count ne 0 then new[ind] = textpos[ind]
            if dm_to_string(new,sep=',') eq dm_to_string(textpos,sep=',') then break
            if tmp.normalize then self.select->setproperty,xcoord_conv=[new[0],tmpx[1]],ycoord_conv=[new[1],tmpy[1]] $
            else self.select->setproperty,locations=new
            self->showview
            end
       'dm_cs_txtcolor':self->change_color,name='text'
       'dm_cs_font':begin
            index = 0 ;for ticktext
            self.select->getproperty,name=name
            if name eq 'axis' then index = (where([self.drawxAxis[0],self.drawyAxis[0],self.drawzAxis,self.drawxAxis[1]] eq self.select))[0]+1 $   
            else if name eq 'title'     then index = 4 $
            else if name eq 'legend'    then index = 5 $
            else if name eq 'cursorpos' then index = 6 $
            else if name eq 'cornertxt' then index = 7 $
            else if name eq 'cbar'      then index = 8 $
            else if name eq 'text'      then index = -1
            self->change_font,index,select=self.select
            end
       'dm_cs_symbol':begin
            index    = where((*self.plotInfo)[*].obj eq self.select,count)
            if count ne 1 then break
            all_psym = self->getpsym(/list)
            default  = [0>(where(all_psym eq (*self.plotInfo)[index].psym)),(*self.plotInfo)[index].symsize]
            old      = [(*self.plotInfo)[index].psym,dm_to_string((*self.plotInfo)[index].symsize)]
            new = dm_dialog_input(['symbol name:','symbol size:'],title='Set plot symbol',default=default,$
                  is_droplist=[1,0],droplist_content=ptr_new(all_psym),xsize=120,dialog_parent=self.tlb,info='0.0<symbol size<1.0',cancel=cancel)
            if (~keyword_set(cancel)) and ((new[0] ne old[0]) or (new[1] ne old[1])) then begin
               (*self.plotInfo)[index].psym    = new[0]
               (*self.plotInfo)[index].symsize = 0.0>(dm_to_number(new[1]))<1.0
               self->setproperty,plotInfo=(*self.plotInfo),changeid=index
            endif
            end
       'dm_cs_color': self->change_color,/lineplot
       'dm_cs_linestyle':begin
            all_lines = self->getlinestyle(/list)
            index  = where((*self.plotInfo)[*].obj eq self.select,count)
            if count ne 1 then break
            old    = (*self.plotInfo)[index].linestyle
            object = self.select
            new = dm_dialog_input('linestyle:',title='Set plot linestyle',default=old,is_droplist=[1],droplist_content=ptr_new(all_lines),xsize=100,dialog_parent=self.tlb,$
                  parentobject=self,object=object,property='linestyle',apply=apply,/return_number,cancel=cancel)
            if keyword_set(cancel) then begin
               if keyword_set(apply) then self->setproperty,linestyle=old,object=object
               return
            endif
            if keyword_set(apply) or (new[0] ne old[0]) then begin
               (*self.plotInfo)[index].linestyle=new[0]
               self->setproperty,plotInfo=(*self.plotInfo),changeid=index
            endif
            end
       'dm_cs_linethick':begin
            index   = where((*self.plotInfo)[*].obj eq self.select,count)
            if count ne 1 then break
            old     = dm_to_string((*self.plotInfo)[index].thick)
            object  = self.select
            new = dm_dialog_input('thickness:',title='Set plot thickness',default=old,xsize=70,dialog_parent=self.tlb,cancel=cancel,$
                  info=(['1.0','0.0'])[self.idl_version ge 8.1]+'<thickness<10.0',parentobj=self,object=object,property='thick',apply=apply)
            if keyword_set(cancel) then begin
               if keyword_set(apply) then begin
                  old = dm_to_number(old)
                  self->setproperty,thick=old,object=object
               endif
               return
            endif               
            if keyword_set(apply) or (new[0] ne old[0]) then begin
               new = dm_to_number(new[0])
               if finite(new,/nan) then new=1.0
               (*self.plotInfo)[index].thick = (([1.0,0.0])[self.idl_version ge 8.1])>(new)<10.0
               self->setproperty,plotInfo=(*self.plotInfo),changeid=index
            endif
            end
       'dm_cs_legend':begin
            index = where((*self.plotInfo)[*].obj eq self.select,count)
            if count ne 1 then break
            self.font[5]->getproperty,name=fontname
            old = self->textadjust(strtrim((*self.plotInfo)[index].legend,2),/reverse,fontname=fontname)
            new = dm_dialog_input('legend:',title='Set plot legend',default=old,xsize=100,dialog_parent=self.tlb,info=self.textadjustinfo,cancel=cancel)
            if (~keyword_set(cancel)) and (new[0] ne old[0]) then begin
               (*self.plotInfo)[index].legend = self->textadjust(new[0],fontname=fontname)
               self->updatelegend,/draw
            endif
            end
       'dm_cs_layer':begin
            index = where((*self.plotInfo)[*].obj eq self.select,count)
            if count ne 1 then break
            old = (*self.plotInfo)[index].layer
            new = dm_dialog_input('layer:',title='Set plot layer',default=old,xsize=60,dialog_parent=self.tlb,cancel=cancel,/long)
            new = 0>(new)
            if (~keyword_set(cancel)) and (new ne old) then begin
               nplots  = n_elements(*self.plotInfo)
               ;check if the new layer is already used, if yes, switch that one to old
               onedplot= where((*self.plotInfo)[*].type eq (*self.plotInfo)[index].type ,count)
               index0  = -1
               for i=0,count-1 do if (*self.plotInfo)[onedplot[i]].layer eq new then index0=onedplot[i]
               if index0 ne -1 then begin
                  (*self.plotInfo)[index0].layer = old
                  changeid = [index0,index]
               endif else changeid=index
               (*self.plotInfo)[index].layer = new
               self->setproperty,plotInfo=(*self.plotInfo),changeid=changeid
            endif
            end
       'dm_cs_remove': begin  ;delete a single 1D plot (with its error bar and arrow if exist) or a text object
            self.select->getproperty,name=name
            if name eq 'poly' then name = 'polygon'
            ans = dialog_message('Are you sure you want to remove this '+name+'?',/question,dialog_parent=self.tlb,/center)
            if strlowcase(ans) eq 'yes' then begin
               index = where((*self.plotInfo)[*].obj eq self.select,count)
               if count ne 1 then begin    ;text object to be removed
                  self.select->getproperty,font=ofont
                  obj_destroy,[ofont,self.select]
                  self->showview
                  break
               endif
               nplot = n_elements(*self.plotInfo)
               if (*self.plotInfo)[index].type eq 0 then begin  ;idlgrplot object
                  oned  = where((*self.plotInfo)[*].type eq 0,n_oned)
                  self.select->getproperty,symbol=tmp1
                  if obj_valid(tmp1) then begin
                     tmp1[0]->getproperty,data=tmp2
                     if obj_valid(tmp2) then obj_destroy,tmp2
                     obj_destroy,tmp1
                  endif
                  updatedrawlegend = 1b
               endif
               tmp = bytarr(nplot)+1b
               if (*self.plotInfo)[(index[0]+1)<(nplot-1)].type eq -1 then index = [index,(index[0]+1)<(nplot-1)]   ;remove accompanying error bar
               if (*self.plotInfo)[(index[0]-1)>0].type eq -3 then index = [index,(index[0]-1)>0]                   ;remove accompanying arrow
               obj_destroy,(*self.plotInfo)[index].obj
               ptr_free,(*self.plotInfo)[index].xPtr,(*self.plotInfo)[index].yPtr,(*self.plotInfo)[index].zPtr,(*self.plotInfo)[index].iPtr,$
                        (*self.plotInfo)[index].dxPtr,(*self.plotInfo)[index].dyPtr,(*self.plotInfo)[index].dzPtr,(*self.plotInfo)[index].diPtr
               tmp[index] = 0b
               tmp = where(tmp,count)
               if count ne 0 then begin
                  (*self.plotInfo)=(*self.plotInfo)[tmp] 
                  onedplot = where((*self.plotInfo)[*].type eq 0,count0)
                  polyplot = where((*self.plotInfo)[*].type eq 3,count3)
               endif else begin
                  ptr_free,self.plotInfo & self.plotInfo=ptr_new(/allocate_heap)
                  count0 = 0 & count3 = 0
               endelse
               sensitive = (count0 gt 0)
               self->my_widget_control,'dm_'+['psymBut','lineBut','lgndmenu'],sensitive=sensitive
               id = self->my_widget_id('dm_cs_hidelegend')
               if id gt 0 then widget_control,id,sensitive=sensitive
               self->updatelegend  ;to avoid the "IDLGRLEGEND::CREATEGLYPHS: ITEM_OBJECT type incompatible with ITEM_TYPE" error
               if sensitive then begin
                  self.drawLegend->setproperty,hide=self.hideLegend
                  dm_set_button,id,~self.hideLegend,onstring='Hide Legend',offstring='Show Legend'
               endif else begin
                  self.drawLegend->setproperty,/hide
               endelse
               sensitive = (count0 gt 0) or (count3 gt 0)
               self->my_widget_control,'dm_pcolBut',sensitive=sensitive
               ;update the drawlegend
               if keyword_set(updatedrawlegend) then self->updatelegend
               self->showview
            endif
            end
       'dm_cs_formula':begin
            index = where((*self.plotInfo)[*].obj eq self.select,count)
            if count eq 0 then break
            equstr = *(*self.plotInfo)[index[0]].iPtr
            x0 = min(*(*self.plotInfo)[index[0]].xPtr,max=x1)
            np = n_elements(*(*self.plotInfo)[index[0]].xPtr)
            if obj_valid(self.drawzAxis) then example='y=2*x & z=x^2+y^2' else example='y=x^2+sin(x)'
            default = [equstr,dm_to_string([x0,x1]),dm_to_string(np),(*self.plotInfo)[index[0]].legend]
            new = dm_dialog_input(['formula:','x_start:','x_end:','# of points:','legend:'],title='Line Formula',default=default,cancel=cancel,duplicate=[0,4],xsize=130,$
                  dialog_parent=self.tlb,info=['The formula must be a valid IDL expression, for example:',strjoin(strarr(26)+' ')+example,'Use & to combine multiple statements in one line.'])
            if keyword_set(cancel) or (strlen(new[0]) le 2) then break   ;null string
            same = 1b
            for i=0,n_elements(default)-1 do begin
                if default[i] ne new[i] then begin
                   same = 0b & break
                endif
            endfor
            if same then break
            x0 = dm_to_number(new[1],/float) & if finite(x0,/nan) then x0 = self.xran[0,self.xlog]
            x1 = dm_to_number(new[2],/float) & if finite(x1,/nan) then x1 = self.xran[1,self.xlog]
            if (x0 eq x1) and finite(new[1]) then ok = dialog_message(['Starting and ending x values are the same: '+new[1]+'.'],dialog_parent=self.tlb,/center)
            nx = dm_to_number(new[3])
            if finite(nx,/nan) or (nx le 1) then nx = 101
            x = x0+findgen(nx)/(nx-1)*(x1-x0)
            if ~execute(new[0],1,1) then begin
               ok = dialog_message([!error_state.msg,'Please check the formula: '+new[0]],/error,dialog_parent=self.tlb,/center)
               break
            end
            if n_elements(z) ne 0 then begin
               if n_elements(z) eq 1 then z = z+fltarr(n_elements(x))
               if n_elements(z) ne n_elements(x) then begin
                  ok = dialog_message('xdat, ydat, and zdat must have the same size.',/error,dialog_parent=self.tlb,/center)
                  break
               endif
               *(*self.plotInfo)[index[0]].zPtr = z
            endif
            if n_elements(y) eq 1 then y = y+fltarr(n_elements(x))
            if n_elements(y) ne n_elements(x) then begin
               ok = dialog_message('xdat and ydat must have the same size.',/error,dialog_parent=self.tlb,/center)
               break
            endif
            *(*self.plotInfo)[index[0]].xPtr  = x
            *(*self.plotInfo)[index[0]].yPtr  = y
            *(*self.plotInfo)[index[0]].iPtr  = new[0]
            (*self.plotInfo)[index[0]].legend = new[4]
            self->draw
            end     
       'dm_cs_coltable':begin
            if n_elements((*self.plotInfo)) eq 0 then break ; no plots
            if obj_valid(self.select) then begin
               self.select->getproperty,name=name
               if name eq 'cbar' then self.select = obj_new()
            endif
            if obj_valid(self.select) then $
               twodplot = where((*self.plotInfo)[*].obj eq self.select,count) $       
            else $
               twodplot = where(((*self.plotInfo)[*].type gt 0) and ((*self.plotInfo)[*].type ne 3),count)
            if count eq 0 then break
            all_ctb = self->getpalette(/list)
            all_ctb = dm_to_string(indgen(n_elements(all_ctb)))+'  '+all_ctb
            name = 'plot '+dm_to_string(indgen(count))+':' & is_droplist=bytarr(count)+1b & old=(*self.plotInfo)[twodplot].coltable
            if count eq 1 then name=['color table:']
            new  = dm_dialog_input(name,title='Set color table',default=old,is_droplist=is_droplist,droplist_content=ptr_new(all_ctb),xsize=220,/return_number,$
                   /int,dialog_parent=self.tlb,parentobject=self,object=(*self.plotInfo)[twodplot].obj,property='coltable',apply=apply,/coltable,gamma=self.gamma,cancel=cancel)
            if keyword_set(cancel) then begin
               if keyword_set(apply) then self->setproperty,coltable=old,object=(*self.plotInfo)[twodplot].obj
               return
            endif       
            changeid = -1
            for i=0,count-1 do begin
                if keyword_set(apply) or (new[i] ne old[i]) then begin
                   (*self.plotInfo)[twodplot[i]].coltable = new[i]
                   changeid = [changeid,twodplot[i]]
                endif
            endfor
            if n_elements(changeid) gt 1 then begin
               self->setsliceboxcolor,new[0]
               self->setproperty,plotInfo=(*self.plotInfo),changeid=changeid[1:*]
            endif
            end
       'dm_cs_gamma':begin
            old = dm_to_string(self.gamma)
            new = dm_dialog_input('color palette gamma:',title='Set gamma',xsize=100,default=old,dialog_parent=self.tlb,info='0.1<gamma<10.0. The default is 1.',cancel=cancel)
            if (~keyword_set(cancel)) and (old ne new) then begin
               new = dm_to_number(new)
               if finite(new) then self->setproperty,gamma=new
            endif
            end
       'dm_cs_shadeflat':begin
            if ~obj_valid(self.select) then break
            id = where((*self.plotInfo)[*].obj eq self.select,count)
            if count eq 0 then break
            if (*self.plotInfo)[id].shading eq 0 then break
            (*self.plotInfo)[id].shading = 0
            self->setproperty,plotInfo=(*self.plotInfo),changeid=id
            end
      'dm_cs_shadegouraud':begin
            if ~obj_valid(self.select) then break
            id = where((*self.plotInfo)[*].obj eq self.select,count)
            if count eq 0 then break
            if (*self.plotInfo)[id].shading eq 1 then break
            (*self.plotInfo)[id].shading = 1
            self->setproperty,plotInfo=(*self.plotInfo),changeid=id
            end            
       'dm_cs_shade':begin
            if n_elements((*self.plotInfo)) eq 0 then break ; no plots
            if obj_valid(self.select) then begin
               self.select->getproperty,name=name
               if name eq 'cbar' then self.select = obj_new()
            endif
            if obj_valid(self.select) then $
               twodplot = where((*self.plotInfo)[*].obj eq self.select,count) $       
            else $
               twodplot = where(((*self.plotInfo)[*].type gt 0) and ((*self.plotInfo)[*].type ne 3),count)
            if count eq 0 then break
            choice = ['Flat','Gouraud']
            name   = 'plot '+dm_to_string(indgen(count))+':' & is_droplist=bytarr(count)+1b & old=(*self.plotInfo)[twodplot].shading
            if count eq 1 then name=['shading:']
            new    = dm_dialog_input(name,title='Set shading',default=old,is_droplist=is_droplist,droplist_content=ptr_new(choice),xsize=100,/return_number,/int,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then return    
            changeid = -1
            for i=0,count-1 do begin
                if new[i] ne old[i] then begin
                   (*self.plotInfo)[twodplot[i]].shading = new[i]
                   changeid = [changeid,twodplot[i]]
                endif
            endfor
            if n_elements(changeid) gt 1 then self->setproperty,plotInfo=(*self.plotInfo),changeid=changeid[1:*]
            end
       'dm_cs_grid':begin
            if obj_valid(self.drawzAxis) then begin   ;3d plots
                if self.showxgrid and self.showygrid and self.showzgrid then $
                  self->setproperty,showxgrid=0,showygrid=0,showzgrid=0 $
               else $
                  self->setproperty,/showxgrid,/showygrid,/showzgrid
            endif else begin                          ;2d plots
               if self.showxgrid and self.showygrid then $
                  self->setproperty,showxgrid=0,showygrid=0 $
               else $
                  self->setproperty,/showxgrid,/showygrid
            endelse
            end
       'dm_cs_cbarpos': begin
            old = [self.cbarpos[0],self.cbarpos[1]-self.cbarpos[0]]
            new = dm_dialog_input(['gap:','width:'],title='Set Colorbar Size',default=old,/float,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then return
            if total(finite(new,/nan)) ne 0 then return
            if total(abs(new-old)) eq 0 then return
            if new[0] le 0 or new[1] le 0 then return
            self->setproperty,cbarpos=[new[0],new[0]+new[1]]
            end
       'dm_cs_hideaxes':  self->setproperty,hideaxes=(~self.hideAxes)
       'dm_cs_hidecbar':  self->setproperty,hideintbar=(~self.hideIntbar)
       'dm_cs_hideerror': begin
            changeid = ((where((*self.plotInfo).obj eq self.select,count))[0]+1)<(n_elements(*self.plotInfo)-1)
            if (count gt 0) and ((*self.plotInfo)[changeid].type eq -1) then begin
               (*self.plotInfo)[changeid].hide = ~(*self.plotInfo)[changeid].hide
               self->setproperty,plotInfo=(*self.plotInfo),changeid=changeid
               if (*self.plotInfo)[changeid].hide then self->my_widget_control,'dm_show_all',sensitive=1
            endif
            end
       'dm_cs_hidelegend':self->setproperty,hidelegend=(~self.hideLegend)
       'dm_cs_hidegrid':  self->setproperty,showxgrid=0,showygrid=0,showzgrid=0
       'dm_cs_outline':   self->setproperty,legdshowoutline = (~self.legdshowoutline)
       'dm_cs_showfill':  self->setproperty,legdshowfill = (~self.legdshowfill)
       'dm_cs_txtshowfill':if obj_valid(self.select) then begin
            self.select->getproperty,fill_background=fill_background
            if ~fill_background then self->change_color,/fill_color,cancel=cancel
            if keyword_set(cancel) then return
            self.select->getproperty,color=color,fill_color=fill_color
            if (total(abs(color-bgcolor)) eq 0) and (fill_background or (total(abs(fill_color-bgcolor)) eq 0)) then color=[255b,255b,255b]-bgcolor 
            self.select->setproperty,fill_background=~fill_background,color=color
            self->showview
            endif
       'dm_cs_lgndcolnum':begin
            self.drawLegend->getproperty,columns=old
            new = dm_dialog_input('number of columns:',title='Set Legend Columns',default=old,/float,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then return    
            if finite(new,/nan) then return
            if new lt 1 then return
            if new ne old then self->setproperty,legdcolumns=new
            end
       'dm_cs_lgndgap':begin
            self.drawLegend->getproperty,gap=old
            new = dm_dialog_input('legend gap:',title='Set Legend Gap',default=old,/float,dialog_parent=self.tlb,info='border gap=2*gap',cancel=cancel)
            if keyword_set(cancel) then return    
            if finite(new,/nan) then return
            if new ne old then self->setproperty,legdgap=new,legdbordergap=new*2
            end
       'dm_cs_lgndbordergap':begin
            self.drawLegend->getproperty,border_gap=old
            new = dm_dialog_input('legend border gap:',title='Set Border Gap',default=old,/float,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then return    
            if finite(new,/nan) then return
            if new ne old then self->setproperty,legdbordergap=new
            end     
       'dm_cs_lgndwidth':begin
            self.drawLegend->getproperty,glyph_width=old
            new = dm_dialog_input('legend glyph width:',title='Set Legend Glyph Width',default=old,/float,dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then return
            if finite(new,/nan) then return
            if new ne old then self->setproperty,legdglyphwidth=new
            end
       'dm_cs_lgndoutlinethick':begin
            old = dm_to_string(self.legdoutlinethick)
            new = dm_dialog_input('thickness:',title='Set legend outline thickness',xsize=100,default=old,dialog_parent=self.tlb,info=(['1.0','0.0'])[self.idl_version ge 8.1]+'<thickness<10.0',cancel=cancel)
            if (~keyword_set(cancel)) and (old ne new) then begin
               new = dm_to_number(new)
               if finite(new) then self->setproperty,legdoutlinethick=new
            endif
            end     
       'dm_cs_volinterp':begin
            if n_elements((*self.plotInfo)) eq 0 then break ; no plots
            volplot = where((*self.plotInfo)[*].type eq 4,count)
            if count eq 0 then break
            (*self.plotInfo)[volplot[0]].obj->getproperty,interpolate=old
            choice  = ['Nearest neighbor','Trilinear']
            new     = dm_dialog_input('interpolation:',title='Set interpolation',default=old,is_droplist=[1],droplist_content=ptr_new(choice),$
                       xsize=120,/return_number,/int,info='Trilinear interpolation has better quality, but slower rendering.',dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) then begin
               (*self.plotInfo)[volplot[0]].obj->setproperty,interpolate=new
               self->showview
            endif
            end
       'dm_cs_volopacity':begin
            if n_elements((*self.plotInfo)) eq 0 then break ; no plots
            volplot = where((*self.plotInfo)[*].type eq 4,count)
            if count eq 0 then break
            (*self.plotInfo)[volplot[0]].obj->getproperty,alpha_channel=old
            new = dm_dialog_input('opacity:',title='Set Opacity',default=old,xsize=100,/float,info='The opacity range is [0.0,1.0].',dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then return    
            if finite(new,/nan) then return
            if new ne old then begin
               new = 0.0>(new)<1.0
               (*self.plotInfo)[volplot[0]].obj->setproperty,alpha_channel=new
               self->showview
            endif
            end
       'dm_cs_volclip':begin
            old    = self.volclip+1
            choice = ['None','Octant','Quadrant','X-','X+','Y-','Y+','Z-','Z+']
            new    = dm_dialog_input('clipping:',title='Set clipping',default=old,is_droplist=[1],droplist_content=ptr_new(choice),xsize=100,/return_number,/int,dialog_parent=self.tlb,cancel=cancel)
            if (~keyword_set(cancel)) and (new ne old) then begin
               self.volclip = new-1
               self->draw
            endif
            end
       'dm_cs_animdir':self->setproperty,animdir=(~self.animdir)
       'dm_cs_animspd':begin
            if n_elements(*self.plotInfo) eq 0 then begin
               widget_control,event.id,sensitive=0
               return
            endif 
            conplot = where((*self.plotInfo)[*].type eq 1,count2)
            volplot = where((*self.plotInfo)[*].type eq 4,count5)
            anims   = [obj_valid(self.drawzAxis),(count5 gt 0),(count2 gt 0) or (count5 gt 0)]
            index   = where(anims,count)
            if count eq 0 then return
            if count eq 1 then names = 'animation interval:' else names = (['spin','x-z slice','dual-plot '+(['cut','slice'])[count5 gt 0]])[index]+' interval:'
            old     = (self.default[9:11])[index]
            new     = dm_dialog_input(names,title='animation speed',default=old,dialog_parent=self.tlb,cancel=cancel,info='The interval'+([' is','s are'])[count gt 1]+' in seconds.')
            if keyword_set(cancel) or (total(finite(new,/nan)) ne 0) then return
            self.default[([9,10,11])[index]] = abs(new)
            end
       'dm_cs_rotate':begin
            angles = dm_dialog_input(['around x:','around y:','around z:'],title='set rotation',/float,$
                info=['The rotation starts from the current position.','Counterclockwise rotation is positive.'],dialog_parent=self.tlb,cancel=cancel)
            if keyword_set(cancel) then return    
            if finite(angles[0]) then self.drawGroup->rotate,[1,0,0],angles[0],/premultiply
            if finite(angles[1]) then self.drawGroup->rotate,[0,1,0],angles[1],/premultiply
            if finite(angles[2]) then self.drawGroup->rotate,[0,0,1],angles[2],/premultiply
            if total(finite(angles)) ne 0 then self->showview
            if ~self.tooltip[2] then widget_control,self.plotWin,tooltip = 'Right click or left double click outside the plot to return to the initial view.'
            end
       'dm_cs_spin':      self->animation,0
       'dm_cs_xslice':    self->animation,1
       'dm_cs_yslice':    self->animation,2
       'dm_cs_zslice':    self->animation,3
       'dm_cs_xslice2p':  self->animation,4
       'dm_cs_yslice2p':  self->animation,5
       'dm_cs_zslice2p':  self->animation,6
       'dm_cs_xcut2p':    self->animation,7
       'dm_cs_ycut2p':    self->animation,8
       'dm_cs_volxslice': self->slice,0
       'dm_cs_volyslice': self->slice,1
       'dm_cs_volzslice': self->slice,2
       'dm_cs_xcut':      self->cut,0
       'dm_cs_ycut':      self->cut,1
       'dm_cs_arbcut':    self->cut,2
       'dm_cs_extragap':  begin
            new = dm_dialog_input(['left','right','top','bottom']+':',default=self.extragap,title='Extra boundary gap',info=['Not all values need to be specified.',$
                  'The extra gap should be a normalized value.'],cancel=cancel,dialog_parent=self.tlb)
            if ~keyword_set(cancel) then self->setproperty,extragap=new
            end
       'dm_cs_propsheet':begin
            redraw = 0
            self.select->getproperty,hide=hide
            changeid = where((*self.plotInfo)[*].obj eq self.select,scount)
            if scount ne 0 then begin
               if (*self.plotInfo)[changeid[0]].type eq 0 then self.select->setproperty,thick=(*self.plotInfo)[changeid[0]].thick
            endif
            propsheet = obj_new('dm_propsheet',self.select,parentobject=self,/view) ;a modal interactive dialog widet
            obj_destroy,propsheet
            selobjclass = strlowcase(obj_class(self.select))
            if selobjclass eq 'dm_legend' then selobjclass = 'idlgrlegend'
            case selobjclass of
                 'idlgrpolyline':begin
                             self.select->getproperty,symbol=symbol,color=color,linestyle=linestyle,thick=thick,hide=hide
                             redraw = 1  ;need to reset legend
                             if obj_valid(symbol[0]) then begin
                                symbol[0]->getproperty,data=data
                                if obj_valid(data) then data->setproperty,color=color
                                symbol[0]->setproperty,color=color     ;change symbol color
                             endif
                             ;change legend properties
                             onedplot = where((*self.plotInfo)[*].type eq 0)
                             show     = where((*self.plotInfo)[onedplot].hide eq 0)
                             onedplot = onedplot[show]
                             if scount eq 0 then break
                             (*self.plotInfo)[changeid].color = color
                             (*self.plotInfo)[changeid].thick = thick
                             (*self.plotInfo)[changeid].hide  = hide
                             (*self.plotInfo)[changeid].linestyle = linestyle
                             nplots = n_elements(*self.plotInfo)
                             ;change the color and thickness of the error plot if any
                             if changeid[0]+1 lt nplots then begin
                                if (*self.plotInfo)[changeid[0]+1].type eq -1 then begin
                                   (*self.plotInfo)[changeid[0]+1].obj->setproperty,thick=thick,color=color,hide=hide
                                   (*self.plotInfo)[changeid[0]+1].color = color
                                   (*self.plotInfo)[changeid[0]+1].thick = thick
                                   (*self.plotInfo)[changeid[0]+1].hide  = hide
                                   (*self.plotInfo)[changeid[0]+1].linestyle = linestyle
                                endif
                             endif
                             ;change the color of the arrow if any
                             if changeid[0] gt 0 then begin
                                if (*self.plotInfo)[changeid[0]-1].type eq -3 then begin
                                   (*self.plotInfo)[changeid[0]-1].obj->setproperty,color=color,hide=hide
                                   (*self.plotInfo)[changeid[0]-1].color = color
                                   (*self.plotInfo)[changeid[0]-1].hide  = hide
                                endif
                             endif
                             end
                 'idlgrplot':begin
                             self.select->getproperty,symbol=symbol,color=color,linestyle=linestyle,thick=thick,hide=hide
                             redraw = 1  ;need to reset legend
                             if obj_valid(symbol[0]) then begin
                                symbol[0]->getproperty,data=data
                                if obj_valid(data) then data->setproperty,color=color
                                symbol[0]->setproperty,color=color     ;change symbol color
                             endif
                             ;change legend properties
                             onedplot = where((*self.plotInfo)[*].type eq 0)
                             show     = where((*self.plotInfo)[onedplot].hide eq 0)
                             onedplot = onedplot[show]
                             if scount eq 0 then break
                             (*self.plotInfo)[changeid].color = color
                             (*self.plotInfo)[changeid].thick = thick
                             (*self.plotInfo)[changeid].hide  = hide
                             (*self.plotInfo)[changeid].linestyle = linestyle
                             nplots = n_elements(*self.plotInfo)
                             ;change the color and thickness of the error plot if any
                             if changeid[0]+1 lt nplots then begin
                                if (*self.plotInfo)[changeid[0]+1].type eq -1 then begin
                                   (*self.plotInfo)[changeid[0]+1].obj->setproperty,thick=thick,color=color,hide=hide
                                   (*self.plotInfo)[changeid[0]+1].color = color
                                   (*self.plotInfo)[changeid[0]+1].thick = thick
                                   (*self.plotInfo)[changeid[0]+1].hide  = hide
                                   (*self.plotInfo)[changeid[0]+1].linestyle = linestyle
                                endif
                             endif
                             ;change the color of the arrow if any
                             if changeid[0] gt 0 then begin
                                if (*self.plotInfo)[changeid[0]-1].type eq -3 then begin
                                   (*self.plotInfo)[changeid[0]-1].obj->setproperty,color=color,hide=hide
                                   (*self.plotInfo)[changeid[0]-1].color = color
                                   (*self.plotInfo)[changeid[0]-1].hide  = hide
                                endif
                             endif
                             end
                 'idlgrlegend':begin
                             ;check if the show status has been changed
                             islegend = 1b
                             self.select->getproperty,hide=newhide,show_fill=show_fill,show_outline=show_outline,text_color=color,fill_color=fill_color,title=title
                             if obj_valid(title) then title->setproperty,color=color
                             if (total(abs(color-bgcolor)) eq 0) and ((~show_fill) or (total(abs(fill_color-bgcolor)) eq 0)) then begin
                                self.select->setproperty,text_color=[255b,255b,255b]-bgcolor
                                if obj_valid(title) then title->setproperty,color=[255b,255b,255b]-bgcolor
                             endif
                             self->setproperty,hidelegend=newhide,legdshowfill=show_fill,legdshowoutline=show_outline
                             end
                 'idlgrpolygon':begin
                             self.select->getproperty,color=color
                             if scount ne 0 then (*self.plotInfo)[changeid].color=color
                             end
                 'idlgrtext':begin
                             self.select->getproperty,color=color,fill_background=fill_background,fill_color=fill_color
                             if (total(abs(color-bgcolor)) eq 0) and ((~fill_background) or (total(abs(fill_color-bgcolor)) eq 0)) then self.select->setproperty,color=[255b,255b,255b]-bgcolor 
                             end
                 else:
            endcase
            self.select->getproperty,hide=hide
            if hide and (~keyword_set(islegend)) then self->my_widget_control,'dm_show_all',sensitive=1
            self->draw,view=1-redraw
            end
       else:if stregex(eventname,'dm_saveanim',/fold_case,/boolean) then begin  ;save animation events
            movietype = strlowcase(strmid(eventname,11,3))
            type = strlowcase(strmid(eventname,14))
            type = (where(['spin',['x','y','z']+'slice',['x','y','z']+'slice2d','xcut','ycut'] eq type))[0]
            self->saveanimation,type,movietype
            endif
    endcase
    if obj_valid(self) then begin
       if strmid(eventname,0,5) eq 'dm_cs' then self.select = obj_new()
       if ~stregex(!version.os_name,'mac os',/boolean,/fold_case) then self->totop
    endif
end

;get the axis label and units from the axis title
;parameter: 
;   direction: 0-x 1-y 2-z
;return keywords:
;   label:  label of the axis
;   unit:   unit of the label
pro dm_plot::getaxislabel,direction,label=label,unit=unit
    label = '' & unit = ''
    if direction lt 0 or direction gt 2 then return
    self->getproperty,xtit=xtit,ytit=ytit,ztit=ztit
    label = ([xtit,ytit,ztit])[direction]
    if strlen(label) gt 0 then begin
       tmp = strtrim(strsplit(label,'(',/extract,/preserve_null),2)
       if strlen(tmp[0]) ne 0 then begin
          if strmid(label,0,1,/reverse_offset) eq ')' then begin
             pos = strpos(label,'(',/reverse_search)
             if pos ne -1 then unit = strmid(label,pos+1,strlen(label)-pos-2) 
          endif
          label = tmp[0]
       endif
    endif
    if (strlen(label) eq 0) or (strlen(label) ge 10) then label = (['x','y','z'])[direction]
end

function dm_plot::getcolor,color,scalar=scalar,name=name,define=define,list=list,linecolor=linecolor,keepbgcolor=keepbgcolor
    if arg_present(linecolor) then begin  ;retrieve the first line color
       if n_elements(*self.plotInfo) ne 0 then onedplot = where((*self.plotInfo)[*].type eq 0,count0) else count0 = 0
       if count0 ne 0 then linecolor = (*self.plotInfo)[onedplot[0]].color else linecolor = round(self.default[6:8])
    endif
    if keyword_set(list)then return,[(['black','white'])[keyword_set(keepbgcolor)?self.bgcol:(1-self.bgcol)],'red','blue','magenta','green','cyan','yellow','brown','orange','turquoise',$
       'purple','gray','dark gray','dark red','dark blue','dark magenta','dark green','dark cyan','dark yellow','dark brown','user define']
    ncolor = n_elements((keyword_set(name))?(color[0,*]):color)
    if keyword_set(name) then begin
       if ncolor eq 0 then return,'user define'
       result = strarr(ncolor)
       for i=0,ncolor-1 do begin
           index=color[0,i]+256L*color[1,i]+256L*256L*color[2,i]
           case index of
                0L:         name = 'black'
                16777215L:  name = 'white'
                255L:       name = 'red'
                16711680L:  name = 'blue'
                16711935L:  name = 'magenta'
                65280L:     name = 'green'
                16776960L:  name = 'cyan'
                65535L:     name = 'yellow'
                2763429L:   name = 'brown'
                32767L:     name = 'orange'
                15524430L:  name = 'turquoise'
                7542564L:   name = 'purple'
                12632256L:  name = 'gray'
                8421504L:   name = 'dark gray'
                128L:       name = 'dark red'
                8388608L:   name = 'dark blue'
                8388736L:   name = 'dark magenta'
                32768L:     name = 'dark green'
                8421376L:   name = 'dark cyan'
                32896L:     name = 'dark yellow'
                3358812L:   name = 'dark brown'
                else:       name = 'user define'
           endcase
           result[i] = name
       endfor
       return,(ncolor eq 1)?result[0]:result
    endif else begin
       if n_elements(define) ne 3 then define = ([[255b,255b,255b],[0L,0L,0L]])[*,self.bgcol] else define = byte(define)
       if ncolor eq 0 then begin
          if keyword_set(scalar) then return,([16777215L,0L])[self.bgcol] else return,define
       endif
       if size(color,/type) ne 7 then begin
          if keyword_set(scalar) and (n_elements(color) eq 3) then return,color[0]+256L*color[1]+256L*256L*color[2] $
          else return,color
       endif
       if keyword_set(scalar) then result = lonarr(ncolor) else result = bytarr(3,ncolor)
       for i=0,ncolor-1 do begin
           case strlowcase(strtrim(color[i],2)) of
                'black':         tmp = [0b,0b,0b]
                'white'   :      tmp = [255b,255b,255b]
                'red' :          tmp = [255b,0b,0b]
                'blue'    :      tmp = [0b,0b,255b]
                'magenta':       tmp = [255b,0b,255b]
                'green':         tmp = [0b,255b,0b]
                'cyan':          tmp = [0b,255b,255b]
                'yellow':        tmp = [255b,255b,0b]
                'purple':        tmp = [36b,23b,115b] ;raven purple
                'brown':         tmp = [165b,42b,42b]
                'orange':        tmp = [255b,127b,0b]
                'turquoise':     tmp = [78b,226b,236b]
                'gray':          tmp = [192b,192b,192b]
                'grey':          tmp = [192b,192b,192b]
                'dark gray':     tmp = [128b,128b,128b]
                'dark grey':     tmp = [128b,128b,128b]
                'dark red':      tmp = [128b,0b,0b]
                'dark blue':     tmp = [0b,0b,128b]
                'dark magenta':  tmp = [128b,0b,128b]
                'dark green':    tmp = [0b,128b,0b]
                'dark cyan':     tmp = [0b,128b,128b]
                'dark yellow':   tmp = [128b,128b,0b]
                'dark brown':    tmp = [92b,64b,51b]
                'user define':   tmp = define
                else:            tmp = [255b,255b,255b]
           endcase
           if keyword_set(scalar) then result[i]=tmp[0]+256L*tmp[1]+256L*256L*tmp[2] else result[*,i]=tmp
       endfor
    endelse
    if keyword_set(scalar) or keyword_set(name) then return,(ncolor eq 1)?result[0]:result $
    else return, (ncolor eq 1)?result[*,0]:result
end

;a static method to retrieve available color table names and color map rgb tables
;parameter:
;   coltable:     input color table number
;keywords:
;   names:        a string array to return the list of color table names
;   red_values:   [nc] byte array of the red values of the specified coltable color table
;   green_values: [nc] byte array of the green values of the specified coltable color table
;   blue_values:  [nc] byte array of the blue values of the specified coltable color table
;   nc:           number of colors in the color table
;   noreverse:    if set, the CB color table will not be reversed
pro dm_plot::getcolormap,coltable,names=names,red_values=red_values,green_values=green_values,blue_values=blue_values,nc=nc,noreverse=noreverse
    compile_opt static
    loadct,get_names=names
    names = [names,'MPL-'+['Viridis','Plasma','Inferno','Magma','Cividis']]
    if n_elements(coltable) eq 0 then coltable = 0
    coltable = 0>(coltable)<(n_elements(names)-1)
    if stregex(names[coltable],'^MPL-',/boolean,/fold_case) then begin
       cmapname = 'cmap_'+strlowcase(strjoin(strsplit(names[coltable],'-',/extract),'_'))+'.dat'
       defsysv,'!DAVE_AUXILIARY_DIR',exists=exists
       if exists then cmapname = !DAVE_AUXILIARY_DIR+cmapname $
       else cmapname = file_which(cmapname,/include_current_dir)
       rgb = read_csv(cmapname)
       red_values = byte(255*rgb.field1) & green_values = byte(255*rgb.field2) & blue_values = byte(255*rgb.field3)
    endif else begin
       loadct,coltable,rgb_table=rgb
       red_values = rgb[*,0] & green_values = rgb[*,1] & blue_values = rgb[*,2]
       if stregex(names[coltable],'^CB-',/boolean,/fold_case) and ~keyword_set(noreverse) then begin ;reverse CB color map
          red_values = reverse(red_values) & green_values = reverse(green_values) & blue_values = reverse(blue_values)
       endif
    endelse
    nc = n_elements(red_values)
end

function dm_plot::getdefinecolor,default=default,title=title
    if n_elements(default) eq 0 then default=self->getcolor((['white','black'])[self.bgcol])
    if n_elements(title) eq 0 then title='Define color'
    define = dm_dialog_input(['r:','g:','b:'],title=title,default=default,dialog_parent=self.tlb,xsize=100,/coltable)
    define = 0>(define)<255
    if self->getcolor(define,/name) eq (['black','white'])[self.bgcol] then begin
       ok = dialog_message('The specified color is the same as the background color. The '+(['white','black'])[self.bgcol]+' color is used instead.',dialog_parent=self.tlb,/info,/center)
       define = 255-define
    endif
    return,define
end

function dm_plot::getimagedata,dim=dim,setview=setview
    if n_elements(dim) eq 0 then self.drawView->getproperty,dimension=dim
    buffer = obj_new('IDLgrBuffer',dimension=dim,color_model=0,resolution=self.resolution)
    if keyword_set(setview) then self->set_view,/save,destination=buffer  
    if obj_valid(self.zoombox) then buffer->draw,self.drawViewGp else buffer->draw,self.drawView
    buffer->getproperty,image_data=image
    obj_destroy,buffer
    return,image
end

function dm_plot::getlinestyle,linestyle,name=name,list=list
    if keyword_set(list) then return,['solid','dotted','dashed','dash dot','dash dot dot dot','long dash','no line']
    nline = n_elements(linestyle)
    if nline eq 0 then return,keyword_set(name)?'solid':0
    if keyword_set(name) then begin
       lines = strarr(nline)
       for i=0,nline-1 do begin
           case linestyle[i] of
                0:      lines[i] = 'solid'
                1:      lines[i] = 'dotted'
                2:      lines[i] = 'dashed'
                3:      lines[i] = 'dash dot'
                4:      lines[i] = 'dash dot dot dot'
                5:      lines[i] = 'long dash'
                6:      lines[i] = 'no line'
                else:   lines[i] = 'solid'
           endcase
       endfor
    endif else begin
       if size(linestyle,/type) ne 7 then return,linestyle
       lines = lonarr(nline)
       for i=0,nline-1 do begin
           case strlowcase(strtrim(linestyle[i],2)) of
                'solid':            lines[i] = 0L
                'dotted':           lines[i] = 1L
                'dashed':           lines[i] = 2L
                'dash dot':         lines[i] = 3L
                'dash dot dot dot': lines[i] = 4L
                'long dash':        lines[i] = 5L
                'no line':          lines[i] = 6L
                else:               lines[i] = 0L
           endcase
       endfor
    endelse
    return,(nline eq 1)?lines[0]:lines
end

function dm_plot::getpalette,coltable,background=background,oldpal=oldpal,list=list,coloravg=coloravg,currentcoltable=currentcoltable,currentshading=currentshading
    if keyword_set(currentcoltable) then begin  ;retrieve the current colortable
       if n_elements(*self.plotInfo) ne 0 then cltplot = where(((*self.plotInfo)[*].type eq 1) or ((*self.plotInfo)[*].type eq 2) or ((*self.plotInfo)[*].type eq 4),count3) else count3 = 0
       if count3 ne 0 then return,(*self.plotInfo)[cltplot[0]].coltable else return,round(self.default[3])
    endif
    if keyword_set(currentshading) then begin   ;retrieve the current shading
       if n_elements(*self.plotInfo) ne 0 then twdplot = where(((*self.plotInfo)[*].type eq 1) or ((*self.plotInfo)[*].type eq 2),count2) else count2 = 0
       if count2 ne 0 then return,(*self.plotInfo)[twdplot[0]].shading else return,round(self.default[2])
    endif
    self->getcolormap,coltable,names=names,red_values=red_values,green_values=green_values,blue_values=blue_values,nc=nc
    if keyword_set(list) then return,names  ;return the color table list strings
    if n_elements(oldpal) ne 0 then begin
       if obj_isa(oldpal[0],'IDLgrPalette') then drawPal=oldpal[0] $
       else drawPal=obj_new('IDLgrPalette',name='palette')
    endif else drawPal=obj_new('IDLgrPalette',name='palette')
    if keyword_set(coloravg) then begin  ;return an "average" color of the table
       obj_destroy,drawPal
       i0 = fix(nc/2) & i1 = fix(nc*3/4)
       return,fix([mean(red_values[i0:i1]),mean(green_values[i0:i1]),mean(blue_values[i0:i1])],type=1)
    endif
    ;apply gamma correction manually instead of using the gamma property in the palette 
    s = byte(nc*((findgen(nc)/nc)^self.gamma))
    red_values = red_values[s] & green_values = green_values[s] & blue_values = blue_values[s]
    ;stretch the r,g,b table from 1 to 255, leave 0 for background color
    slope = float(nc-1)/(nc-2)              ;scale to range of 1 : 255
    p = 0>(long(findgen(nc)*slope-slope))   ;subscripts to select
    red_values = red_values[p] & green_values = green_values[p] & blue_values = blue_values[p]
    if n_elements(background) ne 3 then background = [255b,255b,255b]*self.bgcol
    red_values[0]   = fix(background[0],type=1)
    green_values[0] = fix(background[1],type=1)
    blue_values[0]  = fix(background[2],type=1)
    drawPal->setproperty,red_values=temporary(red_values),green_values=temporary(green_values),blue_values=temporary(blue_values)
    return,drawPal
end

function dm_plot::getpsym,symbol,symsize,thick,color,oldsymbol=oldsymbol,name=name,landscape=landscape,list=list
    idl81 = (self.idl_version ge 8.1)
    idl80 = (self.idl_version ge 8.0)
    is3d  = obj_valid(self.drawzAxis)
    if idl81 then sym_list = ['circle','diamond','triangle','inverted triangle','square','pentagon','hexagon','star','plus','asterisk','dot','cross','greater','less','pin','pushpin',$
       'filled circle','filled diamond','filled triangle','filled inverted triangle','filled square','filled pentagon','filled hexagon','filled star','filled pin','filled pushpin'] $
    else if idl80 then sym_list = ['circle','diamond','triangle','inverted triangle','square','pentagon','hexagon','star','plus','asterisk','dot','cross','greater','less','pin','pushpin',$
       'filled circle','filled diamond','filled triangle','filled inverted triangle','filled square','filled pentagon','filled hexagon','filled star'] $
    else sym_list = ['circle','filled circle','diamond','filled diamond','triangle','filled triangle',$
       'inverted triangle','filled inverted triangle','square','filled square','plus','asterisk','dot','cross','greater','less']
   if is3d then sym_list = [sym_list,'sphere']
   sym_list = [sym_list,'no symbol']
    if keyword_set(list) then return,sym_list
    if keyword_set(name) then begin
       if size(symbol,/type) eq 7 then begin
          tmpsym = strlowcase(strtrim(symbol[0],2))
          if tmpsym eq 'bullet' then tmpsym = 'filled circle'   ;obsolete symbol
          ind = where(sym_list eq tmpsym,count)
          if count eq 0 then tmpsym = 'no symbol'
          return,tmpsym
       endif else begin
          case symbol[0] of
                0:      result = 'no symbol'
                1:      result = 'plus'
                2:      result = 'asterisk'
                3:      result = 'dot'
                4:      result = 'diamond'
                5:      result = 'triangle'
                6:      result = 'square'
                7:      result = 'cross'
                8:      result = 'greater'
                9:      result = 'less'
               10:      result = 'inverted triangle'
               18:      result = (idl80?'pentagon':'no symbol')
               19:      result = (idl80?'hexagon':'no symbol')
               23:      result = (idl80?'star':'no symbol')
               24:      result = 'circle' 
               25:      result = (idl81?'pin':'no symbol')
               26:      result = (idl81?'pushpin':'no symbol')
               else:    result = 'no symbol'
          endcase
       endelse
       return,result
    endif
    if n_elements(oldsymbol) ne 0 then begin
       if obj_isa(oldsymbol[0],'IDLgrSymbol') then begin
          psym = oldsymbol[0]
          psym->getproperty,data=tmp
          if obj_valid(tmp) then obj_destroy,tmp
       endif 
    endif 
    if n_elements(psym) eq 0 then psym = obj_new('IDLgrSymbol')
    if n_elements(symsize) eq 0 then symsize=self.default[0]
    ;modify the symbol size to achieve isotropic effect
    self.drawView->getproperty,dimensions=dim, viewplane_rect=view_rect
    view_rect = view_rect[2:3]
    if keyword_set(landscape) then begin
       dim = dim[[1,0]]
       view_rect = view_rect[[1,0]]
    endif
    dim = dim/view_rect
    self->getproperty,xran=xran,yran=yran,zran=zran,yconv=yconv,zconv=zconv
    if total(finite(zran)) ne 2 then zran = [0.0,1.0]
    tmpsize = symsize*[xran[1]-xran[0],yran[1]-yran[0],zran[1]-zran[0]]*[mean(dim)/dim,1.0]
    if is3d then tmpsize[2] = tmpsize[1]/zconv[1]*yconv[1]
    if n_elements(thick) eq 0  then thick = self.default[1]
    if n_elements(color) eq 0  then color = (['white','black'])[self.bgcol]
    color = self->getcolor(color)
    if size(symbol,/type) ne 7 then data = symbol[0] $
    else begin
       cos30 = cos(30*!dtor) & cos45 = cos(45*!dtor)
       case strlowcase(strtrim(symbol,2)) of
            'circle':                     data = (idl80?24:obj_new('idlgrplot',cos(findgen(41)/40.0*!pi*2),sin(findgen(41)/40.0*!pi*2),linestyle=0,color=color,thick=thick))
            'plus':                       data = 1
            'asterisk':                   data = 2
            'dot':                        data = 3
            'diamond':                    data = 4
            'triangle':                   data = 5
            'square':                     data = 6
            'cross':                      data = 7
            'greater':                    data = 8
            'less':                       data = 9
            'inverted triangle':          data = (idl80?10:obj_new('idlgrplot',[-cos30,cos30,0,-cos30],[0.5,0.5,-1,0.5],linestyle=0,color=color,thick=thick))
            'pentagon':                   data = (idl80?18:0)
            'hexagon':                    data = (idl80?19:0)
            'star':                       data = (idl80?23:0)
            'pin':                        data = (idl81?25:0)
            'pushpin':                    data = (idl81?26:0)
            'filled circle':              data = (idl80?24:obj_new('idlgrpolygon',cos(findgen(41)/40.0*!pi*2),sin(findgen(41)/40.0*!pi*2),color=color))
            'filled diamond':             data = (idl80?4:obj_new('idlgrpolygon',[0,1,0,-1,0],[1,0,-1,0,1],color=color))
            'filled triangle':            data = (idl80?5:obj_new('idlgrpolygon',[0,cos30,-cos30,0],[1,-0.5,-0.5,1],color=color))
            'filled square':              data = (idl80?6:obj_new('idlgrpolygon',[cos45,cos45,-cos45,-cos45,cos45],[cos45,-cos45,-cos45,cos45,cos45],color=color))
            'filled inverted triangle':   data = (idl80?10:obj_new('idlgrpolygon',[-cos30,cos30,0,-cos30],[0.5,0.5,-1,0.5],color=color))
            'filled pentagon':            data = (idl80?18:0)
            'filled hexagon':             data = (idl80?19:0)
            'filled star':                data = (idl80?23:0)
            'filled pin':                 data = (idl81?25:0)
            'filled pushpin':             data = (idl81?26:0)
            'sphere':                     begin
                                          tmp = obj_new('Orb', pos=[0,0,0], radius=1)
                                          tmp->getproperty,pobj=pobj
                                          pobj->getproperty,data=data, polygons=polygons
                                          obj_destroy,tmp
                                          data = obj_new('idlgrpolygon',data=data,polygons=polygons,color=color)
                                          idl80 = 0b
                                          end
            else:                         data = 0  ;no symbol
       endcase
    endelse
    if idl80 then begin    
       filled = ((strlowcase(strmid(strtrim(symbol,2),0,6)) eq 'filled') or (data eq 3))  ;dot will always be filled
       psym->setproperty,data=data,size=tmpsize,thick=thick,color=color,filled=filled
    endif else $
       psym->setproperty,data=data,size=tmpsize,thick=thick,color=color
    return,psym
end

pro dm_plot::getproperty,clip_planes=clip_planes,coltable=coltable,dimension=dimension,enotebook=enotebook,error=error,group_leader=group_leader,iconv=iconv,ilog=ilog,irange=irange,is3d=is3d,$
    iszoom=iszoom,isotropic=isotropic,ititle=ititle,keep=keep,legdpos=legdpos,linecolor=linecolor,menumargin=menumargin,nplot=nplot,parent_events=parent_events,parenthandler=parenthandler,$
    parentobj=parentobj,scr_xsize=scr_xsize,scr_ysize=scr_ysize,shading=shading,textpos=textpos,textfsize=textfsize,title=title,tlb=tlb,xinfo=xinfo,xlog=xlog,xrange=xrange,xconv=xconv,$
    xsize=xsize,xtitle=xtitle,yinfo=yinfo,ylog=ylog,yrange=yrange,yconv=yconv,ysize=ysize,ytitle=ytitle,zclip=zclip,zinfo=zinfo,zlog=zlog,zconv=zconv,ztitle=ztitle,zrange=zrange
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(dialog_parent=self.tlb,!error_state.msg,/error,/center)
       error = 1b  ;indicating that an error occurs
       return
    end
    error = 0b
    if arg_present(coltable)      then coltable      = self->getpalette(/currentcoltable)
    if arg_present(enotebook)     then enotebook     = self.enotebook
    if arg_present(group_leader)  then group_leader  = self.group_leader
    if arg_present(is3d)          then is3d          = obj_valid(self.drawzAxis)
    if arg_present(iszoom)        then iszoom        = ptr_valid(self.zoomstack)
    if arg_present(isotropic)     then isotropic     = self.isotropic
    if arg_present(keep)          then keep          = self.keep
    if arg_present(legdpos)       then legdpos       = self.legdpos
    if arg_present(linecolor)     then tmp           = self->getcolor(/list,linecolor=linecolor)
    if arg_present(menumargin)    then menumargin    = self.menumargin
    if arg_present(nplot)         then nplot         = n_elements(*self.plotInfo)
    if arg_present(parent_events) then parent_events = self.parent_events
    if arg_present(parenthandler) then parenthandler = self.parenthandler
    if arg_present(parentobj)     then parentobj     = self.parentobj
    if arg_present(shading)       then shading       = self->getpalette(/currentshading)
    if arg_present(tlb)           then tlb           = self.tlb
    if arg_present(textpos)   or arg_present(textfsize) then self->remove_text,textpos=textpos,textfsize=textfsize,/noremove
    if arg_present(dimension) or arg_present(zclip)     then self.drawView->getproperty,dimensions=dimension,zclip=zclip           ;viewport size
    if arg_present(title) then begin
       self.title->getproperty,strings=title
       self.font[4]->getproperty,name=fontname
       title = self->textadjust(title,/reverse,fontname=fontname)
    endif
    if arg_present(xtitle) or arg_present(xinfo) then begin
       self.xtit->getproperty,strings=xtitle,uvalue=xinfo
       self.font[1]->getproperty,name=fontname
       xtitle = self->textadjust(xtitle,/reverse,fontname=fontname)
    endif
    if arg_present(ytitle) or arg_present(yinfo) then begin
       self.ytit->getproperty,strings=ytitle,uvalue=yinfo
       self.font[2]->getproperty,name=fontname
       ytitle = self->textadjust(ytitle,/reverse,fontname=fontname)
    endif
    if arg_present(ztitle) or arg_present(zinfo) then begin
       self.ztit->getproperty,strings=ztitle,uvalue=zinfo
       self.font[3]->getproperty,name=fontname
       ztitle = self->textadjust(ztitle,/reverse,fontname=fontname)
    endif
    if arg_present(ititle) then begin
       self.cbtit->getproperty,strings=ititle
       self.font[8]->getproperty,name=fontname
       ititle = self->textadjust(ititle,/reverse,fontname=fontname)
    endif
    if arg_present(xsize) or arg_present(ysize) or arg_present(scr_xsize) or arg_present(scr_ysize) then begin
       if widget_info(self.plotWin,/valid_id) then tmp = widget_info(self.plotWin,/geometry) $
       else tmp = {xsize:0,ysize:0,scr_xsize:0,scr_ysize:0}
       if arg_present(xsize)      then xsize     = tmp.xsize
       if arg_present(ysize)      then ysize     = tmp.ysize
       if arg_present(scr_xsize)  then scr_xsize = tmp.scr_xsize
       if arg_present(scr_ysize)  then scr_ysize = tmp.scr_ysize
    endif
    if arg_present(xrange) or arg_present(xconv) or arg_present(clip_planes) then begin
       if self.xlog then xrange = alog10(self.xran[*,1]) else xrange = self.xran[*,0]
       if total(finite(xrange)) ne 2 then xconv = [0.0,1.0] else xconv = norm_coord(xrange)
    endif
    if arg_present(yrange) or arg_present(yconv) or arg_present(clip_planes) then begin
       if self.ylog then yrange = alog10(self.yran[*,1]) else yrange = self.yran[*,0]
       if total(finite(yrange)) ne 2 then yconv = [0.0,1.0] else yconv = norm_coord(yrange)
    endif
    if arg_present(zrange) or arg_present(zconv) or arg_present(clip_planes) then begin
       if self.zlog then zrange = alog10(self.zran[*,1]) else zrange = self.zran[*,0]
       if total(finite(zrange)) ne 2 then zconv = [0.0,1.0] else zconv = norm_coord(zrange)
       if obj_valid(self.drawzAxis) and self.isotropic and (self.ylog eq self.zlog) and (self.iso3dtype eq 1) then begin
          if self.ylog then yrange = alog10(self.yran[*,1]) else yrange = self.yran[*,0]
          if total(finite([zrange,yrange])) eq 4 then begin
             zconv[1] = 1.0/(yrange[1]-yrange[0])
             zconv[0] = -zconv[1]*zrange[0]
          endif
       endif
    endif
    if arg_present(irange) or arg_present(iconv) then begin
       if self.ilog then irange = alog10(self.iran[*,1]) else irange = self.iran[*,0]
       if total(finite(irange)) ne 2 then iconv = [0.0,1.0] else iconv = norm_coord(irange)
    endif
    if arg_present(clip_planes) then begin
       if obj_valid(self.drawzAxis) then clip_planes = [[-1,0,0,xrange[0]],[1,0,0,-xrange[1]],[0,-1,0,yrange[0]],[0,1,0,-yrange[1]],[0,0,-1,zrange[0]],[0,0,1,-zrange[1]]] $
       else clip_planes = [[-1,0,0,xrange[0]],[1,0,0,-xrange[1]],[0,-1,0,yrange[0]],[0,1,0,-yrange[1]]]
    endif
    if arg_present(xlog) then xlog = self.xlog
    if arg_present(ylog) then ylog = self.ylog
    if arg_present(zlog) then zlog = self.zlog
    if arg_present(ilog) then ilog = self.ilog
end

function dm_plot::get_view_range,obj,destination=destination
    if n_elements(obj) eq 0 then return,[[0.0,0,0],[0,0,0]]
    if ~obj_valid(obj) then return,[[0.0,0,0],[0,0,0]]
    if n_elements(destination) eq 0 then destination=self.drawWin $
    else if ~obj_valid(destination[0]) then destination=self.drawWin
    if obj_isa(obj[0],'IDLgrText') or obj_isa(obj[0],'IDLgrAxis') then begin
       ;call GetTexTDimensions to update obj's xrange, yrange & zrange
       void = (destination[0])->gettextdimensions(obj[0]) 
    endif else if obj_isa(obj[0],'IDLgrLegend') then begin
       void = obj[0]->computedimensions(destination)
    endif
    obj[0]->getproperty,xrange=xrange,yrange=yrange,zrange=zrange,xcoord_conv=xcoord_conv,ycoord_conv=ycoord_conv,zcoord_conv=zcoord_conv
    return,[[min(xrange*xcoord_conv[1]+xcoord_conv[0],max=xmax),min(yrange*ycoord_conv[1]+ycoord_conv[0],max=ymax),min(zrange*zcoord_conv[1]+zcoord_conv[0],max=zmax)],[xmax,ymax,zmax]]
end

;movie operation
;keyword:
;   file:        file name, (/open)
;   image:       image data to be put into the movie, if absent, use the current plot image, (/put)
;   info:        [xsize,ysize,speed,quality] or [xsize,ysize,spped, color quantization method, same color mapping] for gif, optional
;   movie_type:  either 'avi', 'mp4', 'mpg', 'mj2', or 'gif', (/open), default 'mp4'
;   speed:       fps movie speed, info[2] take precedence over this keyword
;   open:        if set, open an movie stream
;   put:         if set, put image into the movie, if image keyword is not present, grab image from the current view
;   close:       if set, close the movie
pro dm_plot::movie,file=file,image=image,info=info,movie_type=movie_type,speed=speed,open=open,put=put,close=close
    if keyword_set(open) then begin
       if n_elements(file)  eq 0 then return
       if n_elements(info)  ge 2 then dim = info[0:1] else self.drawView->getproperty,dimension=dim
       if n_elements(info)  ge 3 then speed = info[2] 
       if n_elements(speed) eq 0 then speed = 2
       if n_elements(info)  ge 4 then quality = info[3] else quality = 80
       if n_elements(movie_type) eq 0 then movie_type = 'mp4' else movie_type = strlowcase(movie_type)
       ;open the movie
       case movie_type of
          'mpg': begin
                 mov_obj   = obj_new('IDLgrMPEG',dimensions=dim,filename=file,quality=quality,frame_rate=2)
                 i_frame   = 0L
                 end
          'mj2': begin
                 timescale = 30000.
                 frtics    = fix(timescale/speed,type=3)
                 if quality eq 100 then bit_rate = -1 else bit_rate = (quality/100.)
                 mov_obj   = obj_new('IDLffMJPEG2000',file,/write,frame_period=frtics,bit_rate=bit_rate,reversible=(bit_rate eq -1),timescale=timescale,n_layers=1)
                 end
          'gif': begin
                 delaytime = 100./speed & mov_obj = obj_new()
                 if n_elements(info) ge 4 then cquanmeth = info[3] else cquanmeth = 0
                 if n_elements(info) ge 5 then samcolmap = info[4] else samcolmap = 0
                 end
          else:  begin ;'avi' and 'mp4'
                 mov_obj   = obj_new('IDLffVideoWrite',file,format=movie_type)
                 bit_rate  = (quality/100.)^2*2e7
                 vidStream = mov_obj->AddVideoStream(dim[0],dim[1],8>(speed),bit_rate=bit_rate)
                 end
       endcase
       obj_movie = {mov_obj:mov_obj,file:file,speed:speed,movie_type:movie_type}
       if n_elements(i_frame)   ne 0 then obj_movie = create_struct(obj_movie,'i_frame',i_frame)
       if n_elements(cquanmeth) ne 0 then obj_movie = create_struct(obj_movie,'cquanmeth',cquanmeth)
       if n_elements(samcolmap) ne 0 then obj_movie = create_struct(obj_movie,'samcolmap',samcolmap)
       if n_elements(delaytime) ne 0 then obj_movie = create_struct(obj_movie,'delaytime',delaytime)
       if n_elements(vidStream) ne 0 then obj_movie = create_struct(obj_movie,'vidStream',vidStream)
       if ptr_valid(self.ptr_movie)  then obj_destroy,(*self.ptr_movie).mov_obj
       ptr_free,self.ptr_movie
       self.ptr_movie = ptr_new(obj_movie,/no_copy)
    endif
    if ~ptr_valid(self.ptr_movie) then return
    if keyword_set(put) then begin
       if n_elements(image) eq 0 then image=self->getimagedata()
       case (*self.ptr_movie).movie_type of
          'mpg': begin
                 (*self.ptr_movie).mov_obj->put,reverse(image,size(image,/N_DIMENSIONS)),(*self.ptr_movie).i_frame*round(24/(*self.ptr_movie).speed)
                 (*self.ptr_movie).i_frame = (*self.ptr_movie).i_frame+1
                 end
          'mj2': ok = (*self.ptr_movie).mov_obj->setdata(image)
          'gif': begin
                 ;RGB->indexed color
                 if (*self.ptr_movie).cquanmeth then begin       ;equal volume cube method
                    image = color_quan(image,1,R,G,B,cube=6)
                 endif else begin              ;median cut
                    if ~(*self.ptr_movie).samcolmap then begin   ;use a single color mapping
                       loc = where(strlowcase(tag_names((*self.ptr_movie))) eq 'trans_vec',count)  
                       if count eq 0 then begin
                          image = color_quan(image,1,R,G,B,/map_all,get_translation=trans_vec)
                          (*self.ptr_movie) = create_struct((*self.ptr_movie),'trans_vec',trans_vec)
                       endif else image = color_quan(image,1,R,G,B,translation=(*self.ptr_movie).trans_vec)
                    endif else begin
                       image = color_quan(image,1,R,G,B)
                    endelse
                 endelse
                 if self.idl_version ge 6.4 then $
                    write_gif,(*self.ptr_movie).file,image,R,G,B,delay_time=(*self.ptr_movie).delaytime,/multiple,repeat_count=0 $
                 else $  ;delay_time and repeat_count keyword not implemented yet
                    write_gif,(*self.ptr_movie).file,image,R,G,B,/multiple
                 end
          else:  for j=0,0>(round(8./(*self.ptr_movie).speed)-1) do ok = (*self.ptr_movie).mov_obj->Put((*self.ptr_movie).vidStream,image) ;'avi','mp4'
       endcase
    endif
    if keyword_set(close) then begin
       case (*self.ptr_movie).movie_type of
          'mpg': (*self.ptr_movie).mov_obj->save
          'mj2': ok = (*self.ptr_movie).mov_obj->commit(10000)
          'gif': write_gif,(*self.ptr_movie).file,/close
          else:
       endcase
       obj_destroy,(*self.ptr_movie).mov_obj
       ptr_free,self.ptr_movie
    endif
end

;toggle a group of menu buttons according to uname and a number
pro dm_plot::my_menu_toggle,uname,flag,base=base
    nuname = n_elements(uname)
    if (nuname eq 0) or (n_elements(flag) eq 0) then return
    if n_elements(base) eq 0 then base = self.mbar[0]
    if ~widget_info(base,/valid_id) then base = self.mbar[0]
    ids = lonarr(nuname) 
    for i=0,nuname-1 do ids[i] = widget_info(base,find_by_uname=uname[i])
    ind = where(ids gt 0,n_valid)
    if n_valid eq 0 then return
    check = where(ind eq flag[0],n_check,complement=uncheck,ncomplement=n_uncheck)
    if n_check eq 0 then tmp = temporary(check) else check = ids[ind[check]]
    if n_uncheck eq 0 then tmp = temporary(uncheck) else uncheck = ids[ind[uncheck]]
    dm_toggle_menubut,check=check,uncheck=uncheck
end

pro dm_plot::my_widget_control,uname,base,_extra=extra
    if n_elements(base)  eq 0 then base = self.mbar[0]
    if ~widget_info(base,/valid_id) then base = self.mbar[0]
    if n_elements(extra) ne 0 then begin
       for i=0,n_elements(uname)-1 do begin
           wid = widget_info(base,find_by_uname=uname[i])
           if wid ne 0 then widget_control,wid,_extra=extra
       endfor
    endif
end

function dm_plot::my_widget_id,uname,base
    if n_elements(uname) eq 0 then return,0
    if n_elements(base)  eq 0 then base = self.mbar[0]
    if ~widget_info(base,/valid_id) then base = self.mbar[0]
    for i=0,n_elements(uname)-1 do begin
        wid = widget_info(base,find_by_uname=uname[i])
        if n_elements(tmp) eq 0 then tmp = wid else tmp = [tmp,wid]
    endfor
    if n_elements(tmp) eq 1 then return,tmp[0] else return,tmp
end

;parameter:
;   data: [ncol,npts]
pro dm_plot::plot_multicoldata,data,info=info,legend=legend,type=type,_ref_extra=extra
    if n_elements(data) eq 0 then return
    if (n_elements(info) gt 1) and (n_elements(legend) eq 0) then begin
       legend = info[0]
       while (strmid(legend,0,1) eq ';') and (strlen(legend) gt 1) do legend = strmid(legend,1) 
    endif
    case n_elements(data[*,0]) of 
         2: self->add_plot,reform(data[0,*]),reform(data[1,*]),legend=legend,_extra=extra
         3: begin
            if n_elements(type) eq 0 then type = dm_dialog_input('data type:',title='Choose data type',xsize=100,default=0,droplist_content=ptr_new(['x, y, dy','x, y, dx','x, y, z']),$
               is_droplist=[1],/return_number,dialog_parent=self.tlb,info=info)
            case type of 
                 0: self->add_plot,reform(data[0,*]),reform(data[1,*]),yerr=reform(data[2,*]),legend=legend,_extra=extra
                 1: self->add_plot,reform(data[0,*]),reform(data[1,*]),xerr=reform(data[2,*]),legend=legend,_extra=extra
              else: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),legend=legend,_extra=extra
            endcase
            end
         4: begin
            if n_elements(type) eq 0 then type = dm_dialog_input('data type:',title='Choose data type',xsize=100,default=0,droplist_content=$
               ptr_new(['x, y, dx, dy','x, y, z, dz','x, y, z, dx','x, y, z, dy']),is_droplist=[1],/return_number,dialog_parent=self.tlb,info=info)
            case type of 
                 0: self->add_plot,reform(data[0,*]),reform(data[1,*]),xerr=reform(data[2,*]),yerr=reform(data[3,*]),legend=legend,_extra=extra
                 1: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),zerr=reform(data[3,*]),legend=legend,_extra=extra
                 2: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),xerr=reform(data[3,*]),legend=legend,_extra=extra
              else: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),yerr=reform(data[3,*]),legend=legend,_extra=extra  
            endcase 
            end
         5: begin
            if n_elements(type) eq 0 then type = dm_dialog_input('data type:',title='Choose data type',xsize=100,default=0,droplist_content=$
               ptr_new(['x, y, z, dy, dz','x, y, z, dx, dz','x, y, z, dx, dy']),is_droplist=[1],/return_number,dialog_parent=self.tlb,info=info)
            case type of 
                 0: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),yerr=reform(data[3,*]),zerr=reform(data[4,*]),legend=legend,_extra=extra
                 1: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),xerr=reform(data[3,*]),zerr=reform(data[4,*]),legend=legend,_extra=extra
              else: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),xerr=reform(data[3,*]),yerr=reform(data[4,*]),legend=legend,_extra=extra
            endcase 
            end
      else: self->add_plot,reform(data[0,*]),reform(data[1,*]),reform(data[2,*]),xerr=reform(data[3,*]),yerr=reform(data[4,*]),zerr=reform(data[5,*]),legend=legend,_extra=extra
    endcase
end

;read in a DAVE file, or a 1D 2 or 3-column ascii file, or a 2D spe file, and add it to the plot
pro dm_plot::readfile,dave=dave,oned=oned,twod=twod
    widget_control,/hourglass
    type = (keyword_set(dave)?'dave':(keyword_set(twod)?'spe':'*'))
    path = self.path
    file = dm_choose_file(type,dialog_parent=self.tlb,/read,/must_exist,path=path)
    if strlen(file) eq 0 then return
    if file_test(path,/directory) then self.path=path

    mesg  = widget_base(title='Loading data ...',/col,/base_align_center,group_leader=self.tlb)
    label = widget_label(mesg,value='Loading '+file[0]+'. Please wait ...',/align_center)
    dm_center_kid,mesg,self.tlb
    widget_control,mesg,/realize,map=1

    ;catch and clear possible io errors
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(dialog_parent=self.tlb,!error_state.msg,/error,/center)
       if n_elements(unit) ne 0 then free_lun,unit
       if widget_info(mesg,/valid_id) then widget_control,mesg,/destroy
       return
    end
    
    if keyword_set(dave) then begin
       oData = obj_new('DAVEDataset',filename=file)
       if oData->toASCIIColumn(dataColumns,header,errorMsg) then self->plot_multicoldata,dataColumns $
       else ok = dialog_message('The DAVE file does not contain multi-column data.',dialog_parent=self.tlb,/center)
       obj_destroy,oData 
    endif else if keyword_set(oned) then begin
       openr,unit,file,/get_lun,error=error
       if error ne 0 then begin
          ok = dialog_message("Can't read file "+file+'.',dialog_parent=self.tlb,/center)
          widget_control,mesg,/destroy
          return
       endif
       all_col = self->getcolor(/list)
       n_col   = n_elements(all_col)-1 & all_col = all_col[0:(n_col-1)]
       all_sym = self->getpsym(/list)
       n_sym   = n_elements(all_sym)-1 & all_sym = all_sym[0:(n_sym-1)]
       tmp = '' & line = 0L 
       while (~eof(unit)) do begin
            readf,unit,tmp & tmp = strtrim(tmp,2)
            if strlen(tmp) eq 0 then continue
            tmp1 = strsplit(tmp,' ,'+string(9b),/extract)
            tmp1 = dm_to_number(tmp1,/float,count=count)
            if total(finite(tmp1)) eq count then begin
               if n_elements(data) eq 0 then data=tmp1 else data=[[data],[tmp1]] 
            endif else begin
               if n_elements(data) ne 0 then begin
                  color  = all_col[line mod n_col]
                  symbol = all_sym[line mod n_sym]
                  self->plot_multicoldata,data,psym=symbol,color=color,info=info
                  data = 0 & tmp2 = temporary(data) & tmp2 = temporary(info)   ;destroy data
                  line = line+1
               endif
               if n_elements(info) eq 0 then info = tmp else info = [info,tmp]
            endelse
       endwhile
       free_lun,unit
       if n_elements(data) ne 0 then begin
          widget_control,label,set_value='drawing ...'
          color  = all_col[line mod n_col]
          symbol = all_sym[line mod n_sym]
          self->plot_multicoldata,data,psym=symbol,color=color,info=info
       endif
    endif else if keyword_set(twod) then begin
       dm_load_spe,file,zdat=data,zerr=zerr,xdat=xdat,ydat=ydat,xtit=xtit,ytit=ytit,ztit=ztit,error=error,group_leader=self.tlb
       if error eq 0 then begin
          widget_control,label,set_value='drawing ...'
          if n_elements(data) ne 0 then begin
             nx = n_elements(xdat)
             ny = n_elements(ydat)
             nz = size(data,/dimensions)
             if nx eq nz[0]+1 then xdat = (xdat[0:(nx-2)]+xdat[1:(nx-1)])/2.
             if ny eq nz[1]+1 then ydat = (ydat[0:(ny-2)]+ydat[1:(ny-1)])/2.
             ind = where(data le -1e20,count)
             if count gt 0 then data[ind] = !values.f_nan
             self->add_plot,xdat,ydat,data,/usepolygon,shading=1
          endif
       endif
    endif
    self->draw
    widget_control,mesg,/destroy
end

;remove all text strings
;keywords:
;   noremove:  if set, no text objects will be removed. To be combined with textpos or textfsize keyword.
;   textpos:   returns the position of the first text object. 
;   textfsize: returns the font size of the first text object
pro dm_plot::remove_text,noremove=noremove,textpos=textpos,textfsize=textfsize
    if n_elements(textpos) ne 0 then tmp = temporary(textpos)
    if n_elements(textfsize) ne 0 then tmp = temporary(textfsize)
    for j=0,1 do begin
        oChildArr = ([self.drawModel,self.drawGroup])[j]->IDL_Container::Get(/ALL, COUNT=nKids)
        for i=0,nKids-1 do begin
            if obj_isa(oChildArr[i],'IDLgrText') then begin
               oChildArr[i]->getproperty,name=name,font=ofont,xcoord_conv=tmpx,ycoord_conv=tmpy
               if name eq 'text' then begin
                  if n_elements(textpos) eq 0 then textpos = [tmpx[0],tmpy[0]]
                  if n_elements(textfsize) eq 0 then ofont->getproperty,size=textfsize
                  if keyword_set(noremove) then return
                  obj_destroy,[ofont,oChildArr[i]]
               endif
            endif
        endfor
    endfor
    if ~keyword_set(noremove) then begin
       self.cursorpos->setproperty,strings=''          ;cursor position string
       self.cornertxt->setproperty,strings='',/hide    ;corner text string
    endif
end

;reset the 3d cooridanate system to the initial orientation
pro dm_plot::reset3d,reset=reset,redraw=redraw
    if keyword_set(reset) then begin
       self.drawGroup->reset
       self.drawModel->reset
    endif
    self.drawGroup->rotate,[1,0,0],-90
    self.drawGroup->rotate,[0,1,0],30
    self.drawGroup->rotate,[1,0,0],30
    if keyword_set(redraw) then begin
       self->set_view
       self.drawWin->draw,self.drawView
       if ~self.tooltip[2] then begin
          tooltip = 'Right click or left double click over the plot to change its properties'+(self.compound?', over the upper left corner to show the plot menu.':'.')
          widget_control,self.plotWin,tooltip = (~self.tooltip[0])?tooltip:''
          self.tooltip[2] = 1b
       endif
    endif   
end

pro dm_plot::resize,event
    widget_control,self.tlb,update=0
    newdim = [event.x,event.y-self.menumargin]
    if widget_info(self.mbar[1],/valid_id) then widget_control,self.mbar[1],xsize=event.x
    widget_control,self.plotWin,xsize=newdim[0],ysize=newdim[1]
    self.drawWin->setproperty, dimension=newdim
    self.drawView->setproperty,dimension=newdim
    self.tranView->setproperty,dimension=newdim
    if ~self.isotropic and  (n_elements(*self.plotInfo) ne 0) then begin  ;need to redraw arrows
       tmp = where((*self.plotInfo)[*].type eq -3,arrowcount)
    endif else arrowcount = 0
    if arrowcount ne 0 then self->draw $
    else if obj_valid(self.drawxAxis[0]) then self->set_view
    widget_control,self.tlb,update=1,iconify=0
    self->showview
end

pro dm_plot::rotate,event
    if (self.moveLegend eq 0) then begin
       haveTransform=self.trackBall->update(event,transform=qmat)
       if (haveTransform ne 0) then begin
          self.drawGroup->getproperty,transform=t
          self.drawGroup->setproperty,transform=t#qmat
          self->showview
          if ~self.tooltip[2] then widget_control,self.plotWin,tooltip = 'Right click or left double click outside the plot to return to the initial view.'
       endif
    endif
    self->getproperty,xran=xran,yran=yran,zran=zran,xconv=xconv,yconv=yconv,zconv=zconv,dimension=dim
    case event.type of
       0:   begin                           ;button press
            case event.press of
                1:  begin                   ;left button down
                    self.select = obj_new()
                    widget_control,self.plotWin,/draw_motion_events,/tracking_events
                    tmp = self.drawWin->select(self.drawView,[event.x,event.y])
                    xstart = self.viewplane[0]+(0>(event.x/dim[0])<1)*self.viewplane[2]
                    ystart = self.viewplane[1]+(0>(event.y/dim[1])<1)*self.viewplane[3]
                    if obj_valid(tmp[0]) then begin
                       if obj_isa(tmp[0],'IDLgrLegend') or obj_isa(tmp[0],'IDLgrText') then begin 
                          tmp[0]->getproperty,name=name,uvalue=uvalue
                          if name eq 'text' then begin
                             if ~uvalue.normalize then nomove = 1b
                          endif
                          if ~keyword_set(nomove) then begin                         
                             self.select = tmp[0]
                             self.moveLegend = 1b
                             self.select->getproperty,xcoord_conv=x,ycoord_conv=y
                             self.legdOffset[0:1] = [x[0]-xstart,y[0]-ystart]
                             break
                          endif
                       endif
                       ind = where(tmp eq self.sliceBox,count)
                       if (count ne 0) and (self.slicetype ge 0) then begin
                          self.moveLegend = 1b
                          self.legdOffset[0:1] = [xstart,ystart]
                          self.sliceBox->getproperty,data=data
                          tmpmax = max(data[self.slicetype,*],min=tmpmin)
                          self.legdOffset[2] = (tmpmax+tmpmin)/2.
                       endif
                    endif 
                    end
                else:
            endcase
            end
       1:   self->clearmotionevent          ;button release
       2:   if self.moveLegend then begin   ;motion event
            xend = self.viewplane[0]+(0>(event.x/dim[0])<1)*self.viewplane[2]
            yend = self.viewplane[1]+(0>(event.y/dim[1])<1)*self.viewplane[3]
            if (self.slicetype ge 0) and (~obj_valid(self.select)) then begin
               cshift = [-0.5,0]
               log  = ([self.xlog,self.ylog,self.zlog])[self.slicetype]
               self.sliceBox->getproperty,data=data
               oldran = [min(data[self.slicetype,*]),max(data[self.slicetype,*])]
               self.drawGroup->getproperty,transform=newt
               newt = newt[0:2,0:2]
               vec  = ([[1,0,0],[0,1,0],[0,0,1]])[*,self.slicetype]                               ;slicing direction vector
               ind  = ([[1,1,0,0,1,1,0,0],[0,1,1,0,0,1,1,0],[1,1,1,1,0,0,0,0]])[*,self.slicetype] ;slicing box vertices index
               ran  = ([[self.xran[*,self.xlog]],[self.yran[*,self.ylog]],[self.zran[*,self.zlog]]])[*,self.slicetype] 
               ran1 = ([[xran],[yran],[zran]])[*,self.slicetype]
               tmp  = reform(vec#newt)
               tmp  = total(tmp[0:1]*[(xend-self.legdOffset[0]),(yend-self.legdOffset[1])])/total(tmp[0:1]^2)  ;dot product, this is the portion of the axis that the cursor has travelled
               xy0  = (ran1[0])>(self.legdOffset[2]+tmp*(ran1[1]-ran1[0]))<(ran1[1])
               if log then begin
                  oldran = 10.0^oldran
                  sliceran = 10.0^xy0+[-0.5,0.5]*self.sliceinfo
                  if sliceran[1] gt ran[1] then sliceran[0] = ran[1]-self.sliceinfo $
                  else if sliceran[0] lt ran[0] then sliceran[1] = ran[0]+self.sliceinfo
                  data[self.slicetype,*] = (1-ind)*sliceran[0]+ind*sliceran[1]
                  data[self.slicetype,*] = alog10((1e-20)>(data[self.slicetype,*]))
               endif else begin
                  sliceran = xy0+[-0.5,0.5]*self.sliceinfo
                  if sliceran[1] gt ran[1] then sliceran[0] = ran[1]-self.sliceinfo $
                  else if sliceran[0] lt ran[0] then sliceran[1] = ran[0]+self.sliceinfo
                  data[self.slicetype,*] = (1-ind)*sliceran[0]+ind*sliceran[1]
               endelse   
               data[self.slicetype,*] = (ran1[0])>(data[self.slicetype,*])<(ran1[1])
               sliceran = (ran[0])>(sliceran)<(ran[1])
               if total(abs(oldran-float(sliceran))) eq 0 then break
               self.sliceBox->setproperty,data=data,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv
               self->showview
               self->slicedata,sliceran=sliceran,xdat=xdat,ydat=ydat,zdat=zdat,zerr=zerr,title=title,xtit=xtit,ytit=ytit,ztit=ztit,coltable=coltable,iran=iran,ilog=ilog
               if obj_valid(self.csplotobj) then begin
                  self.cursorpos->getproperty,strings=strings
                  if strlen(strings) ne 0 then self->set_cursortxt,''
                  if n_elements(xdat) eq 0 then self.csplotobj->erase,/keepaxes,/nototop,title=title $
                  else self.csplotobj->setproperty,xdat=xdat,ydat=ydat,zdat=zdat,zerr=zerr,title=title,xtit=xtit,ytit=ytit,itit=ztit,/usepolygon,coltable=coltable,bgcolor=self.bgcol,$
                       iran=iran,ilog=ilog,/nototop
               endif
            endif else if obj_valid(self.select) then begin
               if (~obj_isa(self.select,'IDLgrLegend')) and  (~obj_isa(self.select,'IDLgrText')) then break 
               self.select->getproperty,ycoord_conv=old_yconv,xcoord_conv=old_xconv
               new_yconv = [yend+self.legdOffset[1],1]
               new_xconv = [xend+self.legdOffset[0],1]
               if obj_isa(self.select,'IDLgrLegend') then begin
                  self.legdpos[0] = self.legdpos[0]+new_xconv[0]-old_xconv[0]
                  self.legdpos[1] = self.legdpos[1]+new_yconv[0]-old_yconv[0]
               endif
               self.select->setproperty,xcoord_conv=new_xconv,ycoord_conv=new_yconv
               self->showview
            endif
            endif
       6:   if event.press and (self.slicetype ge 0) then begin ;keyboard events
            if (event.key lt 5) or (event.key gt 8) then return  ;only allow left,right, up, and down arrow keys
            log  = ([self.xlog,self.ylog,self.zlog])[self.slicetype]
            ind  = ([[1,1,0,0,1,1,0,0],[0,1,1,0,0,1,1,0],[1,1,1,1,0,0,0,0]])[*,self.slicetype] ;slicing box vertices index
            ran  = ([[self.xran[*,self.xlog]],[self.yran[*,self.ylog]],[self.zran[*,self.zlog]]])[*,self.slicetype] 
            ran1 = ([[xran],[yran],[zran]])[*,self.slicetype]
            self.sliceBox->getproperty,data=data
            oldran = [min(data[self.slicetype,*]),max(data[self.slicetype,*])]
            if log then oldran = 10.0^oldran
            if self->slicestep(oldran,event.key,center=center) eq 0 then return
            sliceran = center+self.sliceinfo/2.0*[-1,1]
            if sliceran[1] gt ran[1] then sliceran[0] = ran[1]-self.sliceinfo $
            else if sliceran[0] lt ran[0] then sliceran[1] = ran[0]+self.sliceinfo
            data[self.slicetype,*] = (1-ind)*sliceran[0]+ind*sliceran[1]
            if log then data[self.slicetype,*] = alog10((1e-20)>(data[self.slicetype,*]))
            data[self.slicetype,*] = (ran1[0])>(data[self.slicetype,*])<(ran1[1])
            sliceran = (ran[0])>(sliceran)<(ran[1])
            if total(abs(oldran-sliceran)) eq 0 then return
            cshift = [-0.5,0]
            self.sliceBox->setproperty,data=data,xcoord_conv=xconv+cshift,ycoord_conv=yconv+cshift,zcoord_conv=zconv
            self->showview
            self->slicedata,sliceran=sliceran,xdat=xdat,ydat=ydat,zdat=zdat,zerr=zerr,title=title,xtit=xtit,ytit=ytit,ztit=ztit,coltable=coltable,iran=iran,ilog=ilog
            if obj_valid(self.csplotobj) then begin
               self.cursorpos->getproperty,strings=strings
               if strlen(strings) ne 0 then self->set_cursortxt,''
               if n_elements(xdat) eq 0 then self.csplotobj->erase,/keepaxes,/nototop,title=title $
               else self.csplotobj->setproperty,xdat=xdat,ydat=ydat,zdat=zdat,zerr=zerr,title=title,xtit=xtit,ytit=ytit,itit=ztit,/usepolygon,coltable=coltable,bgcolor=self.bgcol,$
                    iran=iran,ilog=ilog,/nototop
            endif
            widget_control,event.id,/clear_events  ;avoid overgenerating events when key is held pressed
            endif  
       else:     
    endcase
end

;usage: v'=v##self->rotmatrix(r_axis,r_ang) where clockwise r_ang is positive.
function dm_plot::rotmatrix,r_axis,r_ang
    ang = r_ang*!dpi/(180d) & cosang = cos(ang) & sinang = sin(ang)
    if norm(r_axis) ne 1 then r_axis = r_axis/norm(r_axis,/double)
    R   = cosang*Identity(3)+sinang*([[0.,-r_axis[2],r_axis[1]],[r_axis[2],0,-r_axis[0]],[-r_axis[1],r_axis[0],0]])+(1-cosang)*(r_axis#transpose(r_axis))
    ind = where(abs(R) lt 1e-15,count) & if count gt 0 then R[ind] = 0d
    return,R
end

;save animation as mpeg
;parameter:
;   type:         animation type: 0:spin 1:x-slice 2:y-slice 3:z-slice 4:x-slice(dual plot) 5:y-slice(dual plot) 6:z-slice(dual plot) 7:x-cut 8:y-cut 
;   movie_type:   either 'avi', 'mp4', 'mpg', 'mj2', or 'gif' 
;keyword:
;   file:         file name
pro dm_plot::saveanimation,type,movie_type,file=file
    if n_params() ne 2 then return
    movietype = strlowcase(movie_type)
    if (where(strmatch(['avi','gif','mj2','mp4','mpg'],movietype)))[0] lt 0 then return
    if (type gt 8) or (type lt 0) then return
    if n_elements(*self.plotInfo) eq 0 then begin
       ok = dialog_message('There are no plots to animate.',/error,dialog_parent=self.tlb,/center)
       return
    endif 
    index_v = (where((*self.plotInfo)[*].type eq 4,count_v))[0]     ;volume plot
    index_c = where((*self.plotInfo)[*].type eq 1,count_c)          ;contour plot
    if (type eq 0) and (~obj_valid(self.drawzAxis))   then return   
    if (type ge 1) and (type le 6) and (count_v eq 0) then return   ;no volume plot exists
    if (type ge 7) and (type ge 7) and (count_c eq 0) then return   ;no contour plot exists
    path = self.path
    flag = self.animation[3]
    self.animation[3] = 1b
    if n_elements(file) eq 0 then file = dm_choose_file(movietype,/write,dialog_parent=self.tlb,path=path)
    if strlen(file) eq 0 then return
    ;catch and ignore all errors in this program
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(!error_state.msg,/error,/center)
       if obj_valid(mesg) then obj_destroy,mesg
       if type gt 3 and obj_valid(self.csplotobj) then obj_destroy,self.csplotobj
       if (total(abs(dim-newdim[0:1])) ne 0) and (type ge 4) then self->resize,{x:dim[0],y:dim[1]+self.menumargin}
       self.drawView->setproperty,dimension=dim,unit=0,location=[0,0]
       self->draw
       self.animation[3] = flag
       return
    end
    if file_test(path,/directory) then self.path=path
    name    = ['xsize:','ysize:','speed:','quality:']
    default = [self.default[4:5],([0,3,4])[(type ge 1)+(type ge 4)],80]
    is_droplist = [0,0,1,0]
    droplist_content = ptr_new(['24','12','8','4','2','1']+' frames/sec')
    case movietype of 
         'gif': begin
                name = ['xsize:','ysize:','speed:','color quantization method:','use the same color mapping:']
                default = [self.default[4:5],([0,3,4])[(type ge 1)+(type ge 4)],0,0]
                is_droplist = [0,0,1,1,1]
                droplist_content = [droplist_content,ptr_new(['median cut','equal volume cube']),ptr_new(['yes','no'])]
                info = ['Check IDL color_quan for more information about color quantization method.','The same color mapping is not available for equal volume cube method.']
                end
         'mpg': info = ['Xsize and ysize must be even integers.','Quality is a number between 0 and 100.','Slower speed will result in larger file size.']
         else:  info = 'Quality is a number between 1 and 100.'
    endcase
    if type ge 4 then begin
       name = [name,'dual plots:']
       default = [default,0]
       droplist_content = [droplist_content,ptr_new(['yes','no'])]
       is_droplist = [is_droplist,1]
       info = [info,'Set dual plots option to No to hide the original plot.']
    endif
    newdim = dm_dialog_input(name,title=(['Movie','GIF'])[movietype eq 'gif']+' setting:',xsize=100,default=default,dialog_parent=self.tlb,/int,droplist_content=droplist_content,$
             is_droplist=is_droplist,/return_number,info=info,cancel=cancel)
    if keyword_set(cancel) then return
    if newdim[0] le 0  then newdim[0] = self.default[4]
    if newdim[1] le 0  then newdim[1] = self.default[5]
    if newdim[0] mod 2 then newdim[0] = newdim[0]+1   ;even pixel number
    if newdim[1] mod 2 then newdim[1] = newdim[1]+1   ;even pixel number
    newdim[2] = ([24.,12,8,4,2,1])[newdim[2]]
    if movietype ne 'gif' then newdim[3] = (([1,0])[movietype eq 'mpg'])>(newdim[3])<100
    self.drawView->getproperty,dimension=dim
    if type eq 0 then begin
       nframe = 360
    endif else if type lt 4 then begin
       (*self.plotInfo)[index_v].obj->getproperty,data0=idat
       tmp    = size(idat,/dimension) & nx = tmp[type-1]
       idat0  = idat
       ix     = ([0L,nx-1L])[abs((type eq 3)-fix(self.animdir))]
       xdat   = *(([(*self.plotInfo)[index_v].xPtr,(*self.plotInfo)[index_v].yPtr,(*self.plotInfo)[index_v].zPtr])[type-1])
       nframe = 2*nx  ;the first frame is initial unsliced view
       self->getaxislabel,type-1,label=label,unit=unit
    endif else begin
       ind_step = 0L
       kill_csp = ~obj_valid(self.csplotobj)
       one_plot = newdim[-1]
       case type of 
            4: self->slice,0,ind_step=ind_step,n_step=n_step
            5: self->slice,1,ind_step=ind_step,n_step=n_step
            6: self->slice,2,ind_step=ind_step,n_step=n_step
            7: self->cut,0,ind_step=ind_step,n_step=n_step
            8: self->cut,1,ind_step=ind_step,n_step=n_step
       endcase
       if n_elements(n_step) eq 0 then return
       if obj_valid(self.csplotobj) then begin
          self.csplotobj->getproperty,menumargin=menumargin
          self.csplotobj->resize,{x:newdim[0],y:newdim[1]+menumargin}
       endif
       if total(abs(dim-newdim[0:1])) ne 0 then self->resize,{x:newdim[0],y:newdim[1]+self.menumargin}
       nframe = 2*n_step-1
    endelse
    self.drawView->setproperty,dimension=newdim[0:1]
    self->set_view
    if (type ge 4) and ~keyword_set(one_plot) then newdim[0] = newdim[0]*2          ;two panels side by side
    self->movie,info=newdim,file=file,movie_type=movietype,/open                    ;open the movie
    if (type ge 4) and ~keyword_set(one_plot) then newdim[0] = newdim[0]/2          ;back to plot image size
    mesg = obj_new('dm_progress',group_leader=self.tlb,title=((self.idl_version ge 6.0)?file_basename(file):'Save animation:'),message='Please wait...')
    for i=0L,nframe-1L do begin
        if ~keyword_set(one_plot) then image=self->getimagedata(dim=newdim[0:1])
        if type ge 4 then begin
           image1 = self.csplotobj->getimagedata()
           if ~keyword_set(one_plot) then image = [[image],[image1]] else image = image1
        endif
        self->movie,image=image,/put
        case type of
             0:  self.drawGroup->rotate,[0,0,1],1-2*self.animdir,/premultiply
             1:  if self.animdir then idat0[abs(ix):(nx-1),*,*] = 0 else idat0[0:abs(ix),*,*] = 0
             2:  if self.animdir then idat0[*,abs(ix):(nx-1),*] = 0 else idat0[*,0:abs(ix),*] = 0
             3:  if self.animdir then idat0[*,*,0:abs(ix)] = 0 else idat0[*,*,abs(ix):(nx-1)] = 0
             4:  self->slice,0,ind_step=ind_step,/noquestion,/nototop
             5:  self->slice,1,ind_step=ind_step,/noquestion,/nototop
             6:  self->slice,2,ind_step=ind_step,/noquestion,/nototop
             7:  self->cut,0,ind_step=ind_step,/noquestion,/nototop
             8:  self->cut,1,ind_step=ind_step,/noquestion,/nototop
             else:
        endcase
        if (type gt 0) and (type lt 4) then begin
           self->set_cursortxt,label+'='+dm_to_string(xdat[abs(ix)])+' '+unit,/nodraw
           (*self.plotInfo)[index_v].obj->setproperty,data0=idat0
           (*self.plotInfo)[index_v].obj->computebounds
           ix = ix+1
           if ix eq nx then ix = -(nx-2) ;reverse direction
           if (ix lt 0) eq (~abs((type eq 3)-fix(self.animdir))) then idat0 = idat
        endif
        mesg->update,message='Compiling '+(['movie','gif'])[movietype eq 'gif']+' frames, please wait... '+dm_to_string(i+1)+'/'+dm_to_string(nframe)
        if (~obj_valid(mesg)) then break
    endfor
    if (type gt 0) and (type lt 4) then begin
       (*self.plotInfo)[index_v].obj->setproperty,data0=idat
       (*self.plotInfo)[index_v].obj->computebounds
       self->set_cursortxt,'',/nodraw
    endif else if keyword_set(kill_csp) and obj_valid(self.csplotobj) then begin
       if type ge 4 and type le 6 then self->slice,-1 $
       else if type ge 7 then self->cut,-1
    endif
    if obj_valid(mesg) then mesg->update,message='Please wait. Saving file...'
    if (total(abs(dim-newdim[0:1])) ne 0) and (type ge 4) then self->resize,{x:dim[0],y:dim[1]+self.menumargin}
    self.drawView->setproperty,dimension=dim,unit=0,location=[0,0]
    self->set_view
    self->movie,/close
    if obj_valid(mesg) then obj_destroy,mesg
    self.animation[3] = flag
end

;save plot as images or print
pro dm_plot::saveas,type,filename=filename,image=image,inch=inch,landscape=landscape,xsize=xsize,ysize=ysize,xoffset=xoffset,yoffset=yoffset
    self.drawView->getproperty,hide=hide
    if hide then self->draw
    path = self.path
    if n_elements(filename) ne 0 and self.idl_version ge 6.0 then begin
       if strpos(filename,dm_define_pointer(/getpathsep)) ne -1 then path = file_dirname(filename)
    endif 
    type = strlowcase(strtrim(type,2))
    self.drawView->getproperty,dimension=dim
    if (where(['ascii','clipboard','pdf','printer','ps'] eq type))[0] eq -1 then begin
       newdim = [!values.f_nan,!values.f_nan]
       while total(finite(newdim)) ne 2 do begin
             ans = dm_dialog_input(['xsize:','ysize:','paper color:'],title='Set pixel size',xsize=100,default=[dim,self.papercol],$
                   droplist_content=ptr_new(['black','white']),is_droplist=[0,0,1],/return_number,dialog_parent=self.tlb,cancel=cancel)
             if keyword_set(cancel) then return
             newdim = dm_to_number(ans[0:1],/float)      
       endwhile
       newdim   = dm_to_number(ans[0:1],/int)
       papercol = dm_to_number(ans[2],/int)
       widget_control,/hourglass   ;busy signal
       if papercol ne self.papercol then self->setproperty,papercol=papercol
       self.drawView->setproperty,dimension=newdim
       image = self->getimagedata(dim=newdim,/setview)
    endif else if (where(['pdf','ps'] eq type))[0] gt 0 then begin
       if keyword_set(landscape) then begin
          if n_elements(xoffset) ne 0 then tmp_xoffset = xoffset
          if n_elements(yoffset) ne 0 then xoffset = yoffset
          if n_elements(tmp_xoffset) ne 0 then yoffset = 11*(2.54-1.54*(keyword_set(inch)))-tmp_xoffset
       endif
    endif
    ;catch and ignore all errors in this program
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(!error_state.msg,/error,/center)
       if obj_valid(buffer) then obj_destroy,buffer
       if (n_elements(deviceKeywords) ne 0) and (n_elements(transl) eq 3) then begin
          if deviceKeywords.landscape then begin
                self.drawModel->translate,transl[0],transl[1],transl[2]
                self.drawModel->rotate,[0,0,1],90
                self.drawModel->translate,-transl[0],-transl[1],-transl[2]
          endif
       endif
       if type ne 'ascii' then begin
          self.drawView->setproperty,dimension=dim,unit=0,location=[0,0]
          self->set_view
          self->showview
       endif
       return
    end
    case type of
       'printer':   begin
          ok = dialog_printersetup(self.printer,dialog_parent=self.tlb)
          if (~ok) then break
          self.printer->getproperty,dimensions=printerDim,resolution=resolution ;printerDim is in inches
          windowAspect  = float(dim[1])/dim[0]
          printerAspect = float(printerDim[1])/printerDim[0]
          margin = 0.1
          if windowAspect le printerAspect then begin
             xstart = margin
             ystart = 0.5-(0.5-margin)*(windowAspect/printerAspect)
             xend   = 1.0-margin
             yend   = 1.0-ystart
          endif else begin
             xstart = 0.5-(0.5-margin)*(printerAspect/windowAspect)
             ystart = margin
             xend   = 1.0-xstart
             yend   = 1.0-margin
          endelse
          self.drawView->setproperty,dimension=(xend-xstart)*printerDim[0]*2.54/resolution[0]*[1,windowAspect],unit=0,location=[0,0]
          self->set_view,/save,destination=self.printer   ;reverse black and white color
          self.drawView->setproperty,dimensions=[xend-xstart,yend-ystart],location=[xstart,ystart],units=3
          self.printer->newpage
          self.printer->draw,self.drawView
          self.printer->newdocument
         end
       'pdf':begin
          ;give warning for volume and vector plot
          nplot = n_elements(*self.plotInfo)
          if nplot ne 0 then begin
             volmplot = where((*self.plotInfo)[*].type eq 4,volmcount)
             if (volmcount gt 0) and self.vector then begin
                ok = dialog_message(["The volume plot can't be rendered in vector format in a pdf file.","Do you want to save it in bitmap format?"],/question,dialog_parent=self.tlb,/center)
                if strlowcase(ok) eq 'yes' then self->setproperty,vector=0
             endif
             if (volmcount eq 0) and (~self.vector) then begin
                ok = dialog_message(["The current pdf output is set in bitmap format.","Do you want to change it to vector format?"],/question,dialog_parent=self.tlb,/center)
                if strlowcase(ok) eq 'yes' then self->setproperty,vector=1
             endif
          endif
          if n_elements(filename) ne 0 then begin
             deviceKeywords = pdfconfig(filename=filename,directory=path,inch=inch,landscape=landscape,xsize=xsize,ysize=ysize,xoffset=xoffset,yoffset=yoffset)
             file = deviceKeywords.filename
             if (strlen(file[0]) ne 0) and (self.idl_version ge 6.0) then path=file_dirname(file[0])
          endif else $
             file = dm_choose_file('pdf',/write,dialog_parent=self.tlb,deviceKeywords=deviceKeywords,path=path,inch=inch,landscape=landscape,xsize=xsize,ysize=ysize,xoffset=xoffset,yoffset=yoffset)
          widget_control,/hourglass  ;busy signal
          if strlen(file) ne 0 then begin
             if deviceKeywords.inches eq 0 then begin
                deviceKeywords.inches  = 1
                deviceKeywords.xsize   = deviceKeywords.xsize/2.54   ;cm->inch
                deviceKeywords.xoffset = deviceKeywords.xoffset/2.54
                deviceKeywords.ysize   = deviceKeywords.ysize/2.54   ;cm->inch
                deviceKeywords.yoffset = deviceKeywords.yoffset/2.54
             endif
             if deviceKeywords.landscape then begin
                tmp = deviceKeywords.ysize
                deviceKeywords.ysize   = deviceKeywords.xsize
                deviceKeywords.xsize   = tmp
                deviceKeywords.yoffset = deviceKeywords.yoffset-deviceKeywords.ysize
             endif
             dimensions = [deviceKeywords.xsize+deviceKeywords.xoffset,deviceKeywords.ysize+deviceKeywords.yoffset]*2.54/self.resolution
             border = [deviceKeywords.xoffset,deviceKeywords.yoffset]*2.54/self.resolution
             if deviceKeywords.landscape then begin
                transl = -[0.5,0.5,0]
                self.drawModel->translate,transl[0],transl[1],transl[2]
                self.drawModel->rotate,[0,0,1],-90
                self.drawModel->translate,-transl[0],-transl[1],-transl[2]
             endif
             maxdim = 4096.0 ;2048.0 
             if dimensions[0] gt maxdim then begin
                factor     = maxdim/dimensions[0]
                dimensions = dimensions*factor
                border     = border*factor
             endif
             if dimensions[1] gt maxdim then begin
                factor     = maxdim/dimensions[1]
                dimensions = dimensions*factor
                border     = border*factor
             endif
             self.drawView->setproperty,dimension=dimensions-border,unit=0
             self.title->getproperty,strings=title & if strlen(title) eq 0 then title=' '
             dimensions = round(dimensions*self.resolution/2.54*100.)/100.   ;device unit->inch
             border     = round(border*self.resolution/2.54*100.)/100.       ;device unit->inch
             buffer     = obj_new('IDLgrPDF',unit=1)
             pagedim    = [8.5,11]                                      ;letter
             if dimensions[0] gt 8.5 then pagedim=[11,17] $             ;ledger
             else begin
                if dimensions[1] gt 11 then begin
                   if dimensions[1] gt 11.72 then begin
                      if dimensions[1] gt 14 then pagedim = [11,17] $   ;ledger
                      else pagedim = [8.5,14]                           ;legal
                   endif else pagedim = [8.27,11.72]                    ;A4
                endif
             endelse 
             buffer->AddPage,dimensions=pagedim
             buffer->setproperty,dimensions=(dimensions-border),location=border,resolution=self.resolution,creator='dm_plot',title=title
             self->set_view,/save,landscape=deviceKeywords.landscape,destination=buffer
             buffer->draw,self.drawView,vector=self.vector,/vect_sorting
             buffer->save,file
             obj_destroy,buffer
             if deviceKeywords.landscape then begin
                self.drawModel->translate,transl[0],transl[1],transl[2]
                self.drawModel->rotate,[0,0,1],90
                self.drawModel->translate,-transl[0],-transl[1],-transl[2]
             endif
          endif
         end
       'ps': begin
          ;give warning for volume and vector plot
          nplot = n_elements(*self.plotInfo)
          if nplot ne 0 then begin
             volmplot = where((*self.plotInfo)[*].type eq 4,volmcount)
             if (volmcount gt 0) and self.vector then begin
                ok = dialog_message(["The volume plot can't be rendered in vector format in a postscript file.","Do you want to save it in bitmap format?"],/question,dialog_parent=self.tlb,/center)
                if strlowcase(ok) eq 'yes' then self->setproperty,vector=0
             endif
             if (volmcount eq 0) and (~self.vector) then begin
                ok = dialog_message(["The current postscript output is set in bitmap format.","Do you want to change it to vector format?"],/question,dialog_parent=self.tlb,/center)
                if strlowcase(ok) eq 'yes' then self->setproperty,vector=1
             endif
          endif
          if n_elements(filename) ne 0 then begin
             deviceKeywords = psconfig(filename=filename,directory=path,inch=inch,landscape=landscape,xsize=xsize,ysize=ysize,xoffset=xoffset,yoffset=yoffset)
             file = deviceKeywords.filename
             if (strlen(file[0]) ne 0) and (self.idl_version ge 6.0) then path=file_dirname(file[0])
          endif else $
             file = dm_choose_file('ps',/write,dialog_parent=self.tlb,deviceKeywords=deviceKeywords,path=path,inch=inch,landscape=landscape,xsize=xsize,ysize=ysize,xoffset=xoffset,yoffset=yoffset)
          widget_control,/hourglass  ;busy signal
          if strlen(file) ne 0 then begin
             if deviceKeywords.inches eq 0 then begin
                deviceKeywords.inches  = 1
                deviceKeywords.xsize   = deviceKeywords.xsize/2.54   ;cm->inch
                deviceKeywords.xoffset = deviceKeywords.xoffset/2.54
                deviceKeywords.ysize   = deviceKeywords.ysize/2.54   ;cm->inch
                deviceKeywords.yoffset = deviceKeywords.yoffset/2.54
             endif
             if deviceKeywords.landscape then begin
                tmp = deviceKeywords.ysize
                deviceKeywords.ysize   = deviceKeywords.xsize
                deviceKeywords.xsize   = tmp
                deviceKeywords.yoffset = deviceKeywords.yoffset-deviceKeywords.ysize
             endif
             if (deviceKeywords.encapsulated eq 1) or (self.vector eq 0) then begin
                deviceKeywords.xoffset = 0.0
                deviceKeywords.yoffset = 0.0
             endif
             dimensions = [deviceKeywords.xsize+deviceKeywords.xoffset,deviceKeywords.ysize+deviceKeywords.yoffset]*2.54/self.resolution
             border = [deviceKeywords.xoffset,deviceKeywords.yoffset]*2.54/self.resolution
             if deviceKeywords.landscape then begin
                transl = -[0.5,0.5,0]
                self.drawModel->translate,transl[0],transl[1],transl[2]
                self.drawModel->rotate,[0,0,1],-90
                self.drawModel->translate,-transl[0],-transl[1],-transl[2]
             endif
             maxdim = 4096.0 ;2048.0
             if dimensions[0] gt maxdim then begin
                factor     = maxdim/dimensions[0]
                dimensions = dimensions*factor
                border     = border*factor
             endif
             if dimensions[1] gt maxdim then begin
                factor     = maxdim/dimensions[1]
                dimensions = dimensions*factor
                border     = border*factor
             endif
             buffer = obj_new('IDLgrClipboard',quality=2,color_model=0,dimensions=dimensions,resolution=self.resolution)
             self.drawView->setproperty,dimension=dimensions-border,unit=0,location=border
             self->set_view,/save,landscape=deviceKeywords.landscape,destination=buffer
             draw_extra = {vector:self.vector}
             if self.idl_version ge 6.1 then draw_extra = create_struct(draw_extra,'vect_text_render_method',self.vtrm_pt)
             if self.idl_version ge 6.4 then draw_extra = create_struct(draw_extra,'isolatin1',self.isolatin1)
             buffer->draw,self.drawView,filename=file,/postscript,/vect_sorting,_extra=draw_extra
             obj_destroy,buffer
             if deviceKeywords.landscape then begin
                self.drawModel->translate,transl[0],transl[1],transl[2]
                self.drawModel->rotate,[0,0,1],90
                self.drawModel->translate,-transl[0],-transl[1],-transl[2]
             endif
          endif
         end
       'clipboard':begin
          buffer = obj_new('IDLgrClipboard',quality=2,color_model=0,dimensions=dim,resolution=self.resolution)
          self->set_view,destination=buffer
          if obj_valid(self.zoombox) then buffer->draw,self.drawViewGp,/vect_sorting $
          else buffer->draw,self.drawView,/vect_sorting
          obj_destroy,buffer
          end
       'ascii': begin ;ascii file
          if n_elements(*self.plotInfo) eq 0 then begin
             ok = dialog_message('There are no plot data to save.',/error,dialog_parent=self.tlb,/center)
             return
          endif
          onedplot = where((*self.plotInfo)[*].type eq 0,count1)
          twodplot = where(((*self.plotInfo)[*].type gt 0) and ((*self.plotInfo)[*].type lt 3),count2)
          thrdplot = where((*self.plotInfo)[*].type eq 4,count3)
          nplots   = n_elements(*self.plotInfo)
          if count1 ne 0 then begin
             if n_elements(filename) eq 0 then filename = dm_choose_file('txt',/write,dialog_parent=self.tlb,title='Save line plot data as an ASCII file.',path=path)
             if strlen(filename) eq 0 then break
             openw,unit,filename,/get_lun,error=openerr
             if openerr ne 0 then begin
                ok = dialog_message("Can't write in "+filename[0],/error,dialog_parent=self.tlb,/center)
             endif else begin
                widget_control,/hourglass  ;busy signal
                for i=0L,count1-1 do begin
                    if count1 gt 1 then begin
                       if stregex(strlowcase((*self.plotInfo)[onedplot[i]].legend),'line *[0-9]',/boolean) then $
                          printf,';'+unit,(*self.plotInfo)[onedplot[i]].legend $
                       else $
                          printf,unit,';line ',dm_to_string(i),(strlen((*self.plotInfo)[onedplot[i]].legend) gt 0)?': ':' ',(*self.plotInfo)[onedplot[i]].legend
                    endif else if strlen((*self.plotInfo)[onedplot[i]].legend) gt 0 then $
                       printf,unit,';'+(*self.plotInfo)[onedplot[i]].legend
                    x  = *(*self.plotInfo)[onedplot[i]].xPtr
                    y  = *(*self.plotInfo)[onedplot[i]].yPtr
                    if ptr_valid((*self.plotInfo)[onedplot[i]].zPtr) then begin
                       if n_elements(*(*self.plotInfo)[onedplot[i]].zPtr) gt 0 then z = *(*self.plotInfo)[onedplot[i]].zPtr
                    endif
                    if onedplot[i]+1 lt nplots then begin
                       if (*self.plotInfo)[onedplot[i]+1].type eq -1 then begin
                          if ptr_valid((*self.plotInfo)[onedplot[i]+1].dxPtr) then begin
                             if n_elements(*(*self.plotInfo)[onedplot[i]+1].dxPtr) ne 0 then xerr = *(*self.plotInfo)[onedplot[i]+1].dxPtr
                          endif
                          if ptr_valid((*self.plotInfo)[onedplot[i]+1].dyPtr) then begin
                             if n_elements(*(*self.plotInfo)[onedplot[i]+1].dyPtr) ne 0 then yerr = *(*self.plotInfo)[onedplot[i]+1].dyPtr
                          endif
                          if ptr_valid((*self.plotInfo)[onedplot[i]+1].dzPtr) then begin
                             if n_elements(*(*self.plotInfo)[onedplot[i]+1].dzPtr) ne 0 then zerr = *(*self.plotInfo)[onedplot[i]+1].dzPtr
                          endif
                       endif
                    endif
                    nx = n_elements(x) & nz = n_elements(z) & nxerr = n_elements(xerr) & nyerr = n_elements(yerr) & nzerr = n_elements(zerr)
                    printf,unit,';      x      y      '+((nz eq nx)?'z      ':'')+((nxerr eq nx)?'dx      ':'')+((nyerr eq nx)?'dy      ':'')+((nzerr eq nx)?'dz      ':'')      
                    if nxerr ne nx then xerr = strarr(nx)
                    if nyerr ne nx then yerr = strarr(nx)
                    if nz eq nx then begin   
                       if nzerr ne nx then zerr = strarr(nx)
                       for j=0LL,nx-1 do printf,unit,x[j],' ',y[j],' ',z[j],' ',xerr[j],' ',yerr[j],' ',zerr[j] 
                    endif else begin
                       for j=0LL,nx-1 do printf,unit,x[j],' ',y[j],' ',xerr[j],' ',yerr[j] 
                    endelse
                     z = 0 & tmp = temporary(z) & xerr = 0 & tmp = temporary(xerr) & yerr = 0 & tmp = temporary(yerr) & zerr = 0 & tmp = temporary(zerr)  ;clear data
                endfor
                free_lun,unit
             endelse
             tmp = temporary(filename)  ;clear filename
          endif
          filler = -1e20
          if count2 gt 0 then begin
             for ii=0,count2-1 do begin
                 nx = n_elements(*((*self.plotInfo)[twodplot[ii]]).xPtr) & nz = n_elements(*((*self.plotInfo)[twodplot[ii]]).zPtr)
                 if n_elements(filename) eq 0 then $
                    filename = dm_choose_file((['spe','iexy'])[nx eq nz],/write,dialog_parent=self.tlb,title='Save 2D plot '+dm_to_string(ii+1)+' data as '+(['a SPE','an IEXY'])[nx eq nz]+' file.',path=path)
                 if strlen(filename) eq 0 then return
                 x  = *((*self.plotInfo)[twodplot[ii]]).xPtr
                 y  = *((*self.plotInfo)[twodplot[ii]]).yPtr
                 z  = *((*self.plotInfo)[twodplot[ii]]).zPtr
                 if ptr_valid(((*self.plotInfo)[twodplot[ii]]).dzPtr) then begin
                    if n_elements(*((*self.plotInfo)[twodplot[ii]]).dzPtr) gt 0 then dz = *((*self.plotInfo)[twodplot[ii]]).dzPtr 
                 endif
                 if n_elements(dz) eq 0 then dz = fltarr(size(z,/dimension)) ;no error bar
                 itmp = where(finite(z,/nan),count)
                 if count ne 0 then begin
                    notok = 1b
                    while(notok) do begin
                        filler = dm_dialog_input('filler value:',/float,default=filler,info='This value is used for empty grids that contain no data.',dialog_parent=self.tlb)
                        notok  = finite(filler,/nan)
                    endwhile
                    z[itmp]  = filler
                    dz[itmp] = 0
                 endif
                 widget_control,/hourglass       ;busy signal
                 if nx eq nz then begin
                    openw,unit,filename,/get_lun,error=openerr
                    if openerr ne 0 then begin
                       ok = dialog_message("Can't write in "+filename,/error,dialog_parent=self.tlb,/center)
                       return
                    endif else begin
                       for i=0LL,nx-1L do begin
                           printf,unit,z[i],' ',dz[i],' ',x[i],' ',y[i]
                       endfor
                    endelse
                    free_lun,unit
                 endif else begin
                    self->getproperty,xtit=xtit,ytit=ytit,ztit=ztit
                    dm_write_spe,filename,x,y,z,dz,error=error,group_leader=self.tlb,xtit=xtit,ytit=ytit,ztit=ztit
                 endelse
                 tmp = temporary(filename)  ;clear filename
             endfor
          endif
          if count3 gt 0 then begin
             for ii=0,count3-1 do begin
                 if n_elements(filename) eq 0 then filename = dm_choose_file('txt',/write,dialog_parent=self.tlb,title='Save volume plot '+dm_to_string(ii+1)+' data as a multi-column text file.',path=path)
                 if strlen(filename) eq 0 then return
                 if !version.os_family eq 'Windows' then sep=string(9b) else sep='     '
                 openw,unit,filename,/get_lun,error=openerr
                 if openerr ne 0 then begin
                    ok = dialog_message("Can't write in "+filename,/error,dialog_parent=self.tlb,/center)
                    return
                 endif
                 x  = *((*self.plotInfo)[thrdplot[ii]]).xPtr
                 y  = *((*self.plotInfo)[thrdplot[ii]]).yPtr
                 z  = *((*self.plotInfo)[thrdplot[ii]]).zPtr
                 idat = *((*self.plotInfo)[thrdplot[ii]]).iPtr
                 itmp = where(finite(idat,/nan),count)
                 if count ne 0 then begin
                    notok = 1b
                    while(notok) do begin
                        filler = dm_dialog_input('filler value:',/float,default=filler,info='This value is used for empty grids that contain no data.',dialog_parent=self.tlb)
                        notok  = finite(filler,/nan)
                    endwhile
                    idat[itmp] = filler
                 endif
                 widget_control,/hourglass  ;busy signal
                 if ptr_valid(((*self.plotInfo)[thrdplot[ii]]).diPtr) then begin
                    if n_elements(*((*self.plotInfo)[thrdplot[ii]]).diPtr) gt 0 then didat = *((*self.plotInfo)[thrdplot[ii]]).diPtr
                    if n_elements(didat) ne 0 then okierr = 1b
                 endif
                 self->getproperty,xtit=xtit,ytit=ytit,ztit=ztit
                 if keyword_set(okierr) then begin
                    if count ne 0 then didat[itmp] = 0
                    printf,unit,';',sep,xtit,sep,ytit,sep,ztit,sep,'I',sep,'dI'
                    for k=0L,n_elements(z)-1 do begin
                        for j=0L,n_elements(y)-1 do begin
                            for i=0L,n_elements(x)-1 do begin
                                printf,unit,x[i],' ',y[j],' ',z[k],' ',idat[i,j,k],' ',didat[i,j,k]
                            endfor
                        endfor
                    endfor
                 endif else begin
                    printf,unit,';',sep,xtit,sep,ytit,sep,ztit,sep,'I'
                    for k=0L,n_elements(z)-1 do begin
                        for j=0L,n_elements(y)-1 do begin
                            for i=0L,n_elements(x)-1 do begin
                                printf,unit,x[i],' ',y[j],' ',z[k],' ',idat[i,j,k]
                            endfor
                        endfor
                    endfor
                 endelse
                 free_lun,unit
                 tmp = temporary(filename)  ;clear filename
             endfor
          endif
         end
       else: begin
          if n_elements(filename) eq 0 then filename = dm_choose_file(type,/write,dialog_parent=self.tlb,path=path)
          if strlen(filename) eq 0 then break
          id = where(['bmp','gif','jpeg','png','ppm','srf','tiff'] eq type,count)
          widget_control,/hourglass   ;busy signal
          if type eq 'tiff' then image=transpose(image,[0,2,1])
          if count ne 0 then write_image,filename,type,image
         end
    endcase
    if type ne 'ascii' then begin
       self.drawView->setproperty,dimension=dim,unit=0,location=[0,0]
       self->set_view
       self->showview
    endif
    if file_test(path,/directory) then self.path=path
end

pro dm_plot::set_cursortxt,strings,nodraw=nodraw
    if n_elements(strings) eq 0 then return
    nullstr = (strlen(strtrim(strings[0],2)) eq 0)
    self.cursorpos->setproperty,strings=strings[0],hide=(nullstr?(~self.showcpos):0)
    self.cornertxt->getproperty,strings=cornerstr
    self.cornertxt->setproperty,hide=((~nullstr) or (strlen(cornerstr) eq 0))
    if ~keyword_set(nodraw) then self->draw,/view,/nototop
end

;set property
;usage:
;   dm_plot->setproperty,property=value
;     or
;   dm_plot->setproperty,object=object,property=property,value=value
;parameters:
;   NONE
;keyword:
;   addarrow,arrowangle,arrowlength: for arrow drawing, in conjuction with xdat,ydat,[zdat] keyword
;   animdir:             animation direction 0: default 1:reversed
;   axisthick:           axis thickness for all axes
;   bgcolor:             0-black background   1-white background
;   cbarpos:             color bar position [gap,gap+width]
;   changeid:            changed id of plotinfo,internal call
;   color:               plot color or polygon filled color
;   coldefine:           user defined rgb color
;   coltable:            color table
;   contourplot:         if set, nxdat=nydat=nzdat will not be regarded as 3d line, Voronoi triangulation method will be used if usepolygon keyword is set
;   cutcolor:            if set, use black or white as the slice cut color instead of the average of the color map
;   error:               1 if error occurs    0 operation successful
;   extragap:            [left,right,top,bottom] extra gaps
;   gridcolor,gridlinestyle,gridthick: grid color,linestyle,thickness
;   gridontop:           grip position for 2d plots, 0-bottom of all plots, 1-top of all plots
;   showcursorpos:       if set, show the cursor position status string
;   hideaxes:            if set, hide x,y,z axes, excluding the color bar
;   hideintnbar:         if set, hide the intensity bar
;   hidelegend:          if set, plot legends are not shown
;   isolatin1:           1:use Adobe ISO latin 1 font encoding for postscript file
;   isotropic:           1:isotropic plot 0:ratioed to window
;   keep:                1 or 0
;   keyboard_events:     1 or 0, if set, keyboard_events is enabled. Note: program returns immediately after this keyword is processed
;   layer:               layer of 1d plot or contour plot
;   legdcolumns:         legend columns
;   legdgap:             legend gap
;   legdbordergap:       legend border_gap
;   legdglyphwidth:      legend glyph_width
;   legdoutlinethick:    legend outline_thick
;   legdpos:             normalized legend position
;   legdshowoutline:     1: show legend outline 0:not show
;   legdshowfill:        1: show fille background 0:not show
;   legend:              legend for the current plot
;   linestyle:           linestyle for the current plot
;   misscol:             missing data color for saving 2d plots 0:black, 1:white
;   no_copy:             to save memory
;   nodraw:              if set, don't draw the view
;   object:              for setting properties from dm_dialog_input apply button
;   papercol:            paper background color, 0:black, 1:white
;   path:                the working directory
;   plotInfo:            plot inforamtion,internal call
;   psym:                symbol number or symbol object
;   qoffsetthreshold:    qoffset range threshold for renaming axis titles, used when making cuts and slices
;   render_method:       text render method 0-texture 1-triangles
;   shading:             shading for object graphics
;   surfplot:            if set, 2d data are plot as surface rather than contour
;   symsize:             symbol size
;   thick:               line thickness for plots and symbols
;   title:               title of the plot
;   tickstyle:           0-idl default tick string format 1-use dm_to_string
;   usepolygon:          if set, use idlgrpolygon to draw contour plots instead of idlgrcontour
;                        or use filled polygon to plot connected points
;   vector:              0: use bitmap 1:use vector for postscript file
;   wtitle:              default window title
;   xdat,ydat,zdat,idat: x,y,z,i data
;   xerr,yerr,zerr,ierr: error bars of xdat,ydat,zdat,idat
;   xlog,ylog,zlog,ilog: log10 scale x,y,z,i respectively
;   xran,yran,zran,iran: x,y,z,i range
;   xtickmajor,ytickmajor,ztickmajor,itickmajor:      number of major tick marks for x,y,z,and cbar axis
;   xtickminor,ytickminor,ztickinor,itickminor:       number of minor tick marks for x,y,z,and cbar axis                     
;   xticklen,yticklen,zticklen,iticklen:              major tick length for x,y,z, and cbar axis
;   xsubticklen,ysubticklen,zsubticklen,isubticklen:  minor tick length for x,y,z, and cbar axis                     
;   xtit,ytit,ztit,itit: x,y,z,colorbar axis title string
;   zmin,zmax:           zmin, zmax for contour plots
;   zoom:                in conjuction with [xyz]ran to show the set range is from zoom
pro dm_plot::setproperty,addarrow=addarrow,animdir=animdir,arrowangle=arrowangle,arrowlength=arrowlength,axisthick=axisthick,bgcolor=bgcolor,changeid=changeid,cbarpos=cbarpos,color=color,$
    coldefine=coldefine,coltable=coltable,contourplot=contourplot,cornertxt=cornertxt,cutcolor=cutcolor,extragap=extragap,fill_color=fill_color,gamma=gamma,gridcolor=gridcolor,$
    gridlinestyle=gridlinestyle,gridontop=gridontop,gridthick=gridthick,hideaxes=hideaxes,hideintbar=hideintbar,hidelegend=hidelegend,idat=idat,ierr=ierr,irange=irange,ilog=ilog,$
    interpolate=interpolate,isolatin1=isolatin1,isotropic=isotropic,iso3dtype=iso3dtype,keep=keep,keyboard_events=keyboard_events,layer=layer,legdcolumns=legdcolumns,legdgap=legdgap,$
    legdbordergap=legdbordergap,legdglyphwidth=legdglyphwidth,legdoutlinethick=legdoutlinethick,legdpos=legdpos,legdshowfill=legdshowfill,legdshowoutline=legdshowoutline,legend=legend,$
    ltitle=ltitle,linestyle=linestyle,misscol=misscol,no_copy=no_copy,nodraw=nodraw,noevent=noevent,nototop=nototop,object=object,opacity=opacity,papercol=papercol,path=path,$
    plotInfo=plotInfo,psym=psym,qoffsetthreshold=qoffsetthreshold,render_method=render_method,shading=shading,showcursorpos=showcursorpos,showxgrid=showxgrid,showygrid=showygrid,$
    showzgrid=showzgrid,surfplot=surfplot,symsize=symsize,thick=thick,tickstyle=tickstyle,title=title,usepolygon=usepolygon,vector=vector,volclip=volclip,vt_col=vt_col,vtrm_pt=vtrm_pt,$
    wtitle=wtitle,xdat=xdat,xerr=xerr,ydat=ydat,yerr=yerr,zdat=zdat,zerr=zerr,xlog=xlog,ylog=ylog,zlog=zlog,xrange=xrange,yrange=yrange,zrange=zrange,xsubticklen=xsubticklen,$
    ysubticklen=ysubticklen,zsubticklen=zsubticklen,isubticklen=isubticklen,xtickinterval=xtickinterval,ytickinterval=ytickinterval,ztickinterval=ztickinterval,itickinterval=itickinterval,$
    xticklen=xticklen,yticklen=yticklen,zticklen=zticklen,iticklen=iticklen,xtickmajor=xtickmajor,xtickvalue=xtickvalue,ytickmajor=ytickmajor,ytickvalue=ytickvalue,ztickmajor=ztickmajor,$
    ztickvalue=ztickvalue,itickmajor=itickmajor,itickvalue=itickvalue,xtickminor=xtickminor,ytickminor=ytickminor,ztickminor=ztickminor,itickminor=itickminor,ititle=ititle,xtitle=xtitle,$
    ytitle=ytitle,ztitle=ztitle,xinfo=xinfo,yinfo=yinfo,zinfo=zinfo,zmin=zmin,zmax=zmax,zoom=zoom,error=error,_extra=extra
    error  = 0b
    redraw = 0b  ;default no redraw
    is3d   = obj_valid(self.drawzAxis)  
    if n_elements(isotropic) eq 0 then isotropic = self.isotropic else isotropic = keyword_set(isotropic)
    ;catch and ignore all errors in this program
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(!error_state.msg,/error,dialog_parent=self.tlb,/center)
       error = 1b
       return
    end
    if n_elements(keyboard_events) ne 0 then begin
       if keyword_set(keyboard_events) then begin
          widget_control,self.tlb,/kbrd_focus_events
          widget_control,self.plotWin,/draw_keyboard_events,/tracking_events,input_focus=~keyword_set(nototop)
       endif else begin
          widget_control,self.tlb,kbrd_focus_events=0
          widget_control,self.plotWin,draw_keyboard_events=0,tracking_events=0
       endelse
       return
    endif
    widget_control,/hourglass
    self->getproperty,dimension=dim,zclip=zclip
    sfac = 1>(min(dim/self.default[4:5]))
    if (n_elements(object) ne 0) then begin
       if n_elements(coltable) ne 0 then begin
          for i=0,n_elements(object)-1 do begin
              if obj_isa(object[i],'IDLgrVolume') then object[i]->getproperty,uvalue=drawPal $
              else object[i]->getproperty,palette=drawPal
              drawPal = self->getpalette(dm_to_number(coltable[i],/int),oldpal=drawPal)
              if obj_isa(object[i],'IDLgrVolume') then begin
                 drawPal->getproperty,red_values=r,green_values=g,blue_values=b
                 object[i]->setproperty,rgb_table0=[[r],[g],[b]]
              endif
          endfor
       endif
       if n_elements(color) ne 0 then begin
          for i=0,n_elements(object)-1 do begin
              object[i]->setproperty,color=self->getcolor(color,define=coldefine)
              if obj_isa(object[i],'IDLgrPlot') then begin
                 object[i]->getproperty,symbol=drawPsym
                 if obj_valid(drawPsym) then drawPsym->setproperty,color=self->getcolor(color,define=coldefine)
              endif
          endfor
       endif
       if n_elements(fill_color) ne 0 then begin
          for i=0,n_elements(object)-1 do object[i]->setproperty,fill_color=self->getcolor(fill_color,define=coldefine)
       endif
       if n_elements(linestyle) ne 0 then begin
          for i=0,n_elements(object)-1 do object[i]->setproperty,linestyle=self->getlinestyle(linestyle)
       endif
       if n_elements(thick) ne 0 then begin
          thick = dm_to_number(thick[0])
          if finite(thick,/nan) then thick=1
          thick = (([1.0,0.0])[self.idl_version ge 8.1])>(thick*sfac)<10.0
          for i=0,n_elements(object)-1 do object[i]->setproperty,thick=thick
       endif
       self->showview
       return
    endif
    if n_elements(animdir) ne 0 then begin
       self.animdir = keyword_set(animdir[0])
       id = self->my_widget_id('dm_cs_animdir')
       dm_set_button,id,self.animdir
    endif
    if n_elements(keep) ne 0 then begin
       self.keep = keyword_set(keep)
       self->my_widget_control,['dm_keepmenu','dm_keepBut'],sensitive=(~self.keep)
       self->my_widget_control,['dm_mkcrmenu','dm_mkcrBut'],sensitive=self.keep
       if (~self.keep) and (self.group_leader) ne 0 then begin  ;only allow one current plot window with the same group leader
          allobj = obj_valid(count=count)
          for i=0L,count-1 do begin
              if isa(allobj[i],'dm_plot') then begin
                 if allobj[i] ne self then begin
                    allobj[i]->getproperty,keep=keep
                    if ~keep then allobj[i]->setproperty,/keep 
                 endif
              endif
          endfor
       endif
       if self.parent_events and ~keyword_set(noevent) then begin
          if self.keep then $
             sendevent = {dm_plot_keep,ID:self.tlb,TOP:self.group_leader,HANDLER:self.tlb,object:self} $
          else $   
             sendevent = {dm_plot_make_current,ID:self.tlb,TOP:self.group_leader,HANDLER:self.tlb,object:self}
          if obj_valid(self.parentobj) then $
             call_method,self.parenthandler,self.parentobj,sendevent $
          else if self.group_leader ne 0 then $    ; send an event there
             widget_control,self.group_leader,send_event=sendevent,/no_copy
       endif
    endif
    if n_elements(misscol) ne 0 then begin
       self.misscol = keyword_set(misscol)
       self->my_menu_toggle,['dm_blackbg','dm_whitebg'],self.misscol
    endif
    if n_elements(papercol) ne 0 then begin
       self.papercol = keyword_set(papercol)
       self->my_menu_toggle,['dm_blackpaper','dm_whitepaper'],self.papercol
    endif
    if n_elements(isolatin1) ne 0 then begin
       self.isolatin1 = keyword_set(isolatin1)
       self->my_menu_toggle,['dm_isolatno','dm_isolatyes'],self.isolatin1
    endif
    if n_elements(iso3dtype) ne 0 then begin
       self.iso3dtype = iso3dtype[0]
       redraw = (redraw>(is3d and isotropic))
    endif
    if n_elements(vtrm_pt) ne 0 then begin
       self.vtrm_pt = keyword_set(vtrm_pt)
       self->my_menu_toggle,['dm_vtrm_pr','dm_vtrm_tr'],self.vtrm_pt
    endif 
    if n_elements(vector) ne 0 then begin
       self.vector = keyword_set(vector)
       self->my_menu_toggle,['dm_bitmap','dm_vector'],self.vector
    endif
    if n_elements(path) ne 0 then begin
       if file_test(path[0],/directory) then self.path=path[0]
    endif
    if n_elements(wtitle) ne 0 then begin   
       tmp = strtrim(wtitle[0],2)
       if self.wtit ne tmp then begin 
          self.wtit = tmp
          self.font[4]->getproperty,name=fontname
          self.title->getproperty,strings=old
          if self.compound eq 0 then begin
             if strlen(self.wtit) eq 0 then base_title = (strlen(old) eq 0?'dm_plot':old) else base_title = self.wtit+': '+old
             widget_control,self.tlb,base_set_title=self->textadjust(base_title,/reverse,fontname=fontname)
          endif
          if self.parent_events and ~keyword_set(noevent) then begin
             sendevent = {dm_plot_changetitle,ID:self.tlb,TOP:self.group_leader,HANDLER:self.tlb,object:self,wtitle:self.wtit,title:self->textadjust(old,/reverse,fontname=fontname)}
             if obj_valid(self.parentobj) then $
                call_method,self.parenthandler,self.parentobj,sendevent $
             else if self.group_leader ne 0 then $
                widget_control,self.group_leader,send_event=sendevent,/no_copy
          endif
       endif
    endif
    if n_elements(qoffsetthreshold) ne 0 then self.qoffsetthreshold = abs(qoffsetthreshold[0])
    if n_elements(cutcolor) ne 0 then self.cutcolor = keyword_set(cutcolor)
    if n_elements(xinfo) ne 0 then self.xtit->setproperty,uvalue=xinfo
    if n_elements(yinfo) ne 0 then self.ytit->setproperty,uvalue=yinfo
    if n_elements(zinfo) ne 0 then self.ztit->setproperty,uvalue=zinfo
    if n_elements(showxgrid) eq 1 then begin
       self.showxgrid = keyword_set(showxgrid)
       if obj_valid(self.xgrid) then self.xgrid->setproperty,hide=((~self.showxgrid) or self.hideAxes)
       dm_set_button,self->my_widget_id('dm_xgridBut'),self.showxgrid,onstring='Hide X Grid',offstring='Show X Grid'          
    endif
    if n_elements(showygrid) eq 1 then begin
       self.showygrid = keyword_set(showygrid)
       if obj_valid(self.ygrid) then self.ygrid->setproperty,hide=((~self.showygrid) or self.hideAxes)
       dm_set_button,self->my_widget_id('dm_ygridBut'),self.showygrid,onstring='Hide Y Grid',offstring='Show Y Grid'
    endif
    if n_elements(showzgrid) eq 1 then begin
       self.showzgrid = keyword_set(showzgrid)
       if obj_valid(self.zgrid) then self.zgrid->setproperty,hide=((~self.showzgrid) or self.hideAxes)
       dm_set_button,self->my_widget_id('dm_zgridBut'),self.showzgrid,onstring='Hide Z Grid',offstring='Show Z Grid'
    endif
    if (n_elements(showxgrid) eq 1) or (n_elements(showygrid) eq 1) or (n_elements(showzgrid) eq 1) then begin
       dm_set_button,self->my_widget_id('dm_showgridmenu'),(self.showxgrid or self.showygrid or (self.showzgrid and is3d))
       self->my_widget_control,'dm_grid'+['color','linestyle','thick'],sensitive=(self.showxgrid or self.showygrid or (self.showzgrid and is3d))
       self->my_widget_control,'dm_gridpositionmenu',sensitive=((self.showxgrid or self.showygrid) and (~is3d))
       if is3d then allshown = (self.showxgrid and self.showygrid and self.showzgrid) else allshown = (self.showxgrid and self.showygrid)
       self->my_widget_control,'dm_cs_grid',set_value=(allshown?'Hide Grid':'Show Grid')
       if is3d and (~self.hideAxes) then redraw=2 else redraw=1
    endif
    if n_elements(showcursorpos) eq 1 then begin
       self.showcpos = keyword_set(showcursorpos)
       self.cursorpos->setproperty,hide=(~self.showcpos)
       self->clearmotionevent
       dm_set_button,self->my_widget_id('dm_showcposBut'),self.showcpos,onstring='Hide Cursor Position Status',offstring='Show Cursor Position Status'
       redraw = 1>redraw
       if self.parent_events and ~keyword_set(noevent) then begin
          sendevent = {dm_plot_showcpos,ID:self.tlb,TOP:self.group_leader,HANDLER:self.tlb,object:self,status:self.showcpos}
          if obj_valid(self.parentobj) then $
             call_method,self.parenthandler,self.parentobj,sendevent $
          else if self.group_leader ne 0 then $    ; send an event there
             widget_control,self.group_leader,send_event=sendevent,/no_copy
       endif
    endif
    if n_elements(gamma) ne 0 then begin
       if (gamma ge 0.1) and (gamma le 10.0) and (self.gamma ne gamma) then begin
          self.gamma = gamma
          if n_elements((*self.plotInfo)) ne 0 then begin
             twodplot = where(((*self.plotInfo)[*].type gt 0) and ((*self.plotInfo)[*].type ne 3),count)
             for i=0,count-1 do begin
                 if (*self.plotInfo)[twodplot[i]].type eq 4 then (*self.plotInfo)[twodplot[i]].obj->getproperty,uvalue=drawPal $
                 else (*self.plotInfo)[twodplot[i]].obj->getproperty,palette=drawPal      
                 drawPal=self->getpalette((*self.plotInfo)[twodplot[i]].coltable,oldpal=drawPal)
                 if (*self.plotInfo)[twodplot[i]].type eq 4 then begin  ;volume plot
                    drawPal->getproperty,red_values=r,green_values=g,blue_values=b
                    (*self.plotInfo)[twodplot[i]].obj->setproperty,rgb_table0=[[r],[g],[b]]
                 endif          
             endfor
             if count gt 0 then redraw = 1>redraw
          endif
       endif
    endif
    if n_elements(axisthick) ne 0 then begin
       self.axisthick = (([1.0,0.0])[self.idl_version ge 8.1])>(axisthick[0])<10.0
       axsthick = sfac*self.axisthick
       for i=0,3 do begin
           if obj_valid(self.drawxAxis[i]) then self.drawxAxis[i]->setproperty,thick=axsthick
           if obj_valid(self.drawyAxis[i]) then self.drawyAxis[i]->setproperty,thick=axsthick
       endfor
       if is3d then self.drawzAxis->setproperty,thick=axsthick
       redraw = 1>redraw
    endif
    if n_elements(gridcolor) ne 0 then begin
       grids = [self.xgrid,self.ygrid,self.zgrid]
       for i=0,2 do begin
           if obj_valid(grids[i]) then grids[i]->setproperty,color = self->getcolor(gridcolor)
       endfor
       redraw = 1>redraw
    endif
    if n_elements(gridlinestyle) ne 0 then begin
       self.gridlinestyle = self->getlinestyle(gridlinestyle[0])
       grids = [self.xgrid,self.ygrid,self.zgrid]
       for i=0,2 do begin
           if obj_valid(grids[i]) then grids[i]->setproperty,linestyle=self.gridlinestyle
       endfor
       redraw = 1>redraw
    endif
    if n_elements(gridontop) ne 0 then begin
       self.gridontop = keyword_set(gridontop[0])
       self->my_menu_toggle,['dm_gridpos_bot','dm_gridpos_top'],self.gridontop
       redraw = ((~is3d)*2)>redraw
    endif
    if n_elements(gridthick) ne 0 then begin
       self.gridthick = (([1.0,0.0])[self.idl_version ge 8.1])>(gridthick[0])<10.0
       grdthick = sfac*self.gridthick
       grids = [self.xgrid,self.ygrid,self.zgrid]
       for i=0,2 do begin
           if obj_valid(grids[i]) then grids[i]->setproperty,thick=grdthick
       endfor
       redraw = 1>redraw
    endif
    if n_elements(tickstyle) ne 0 then begin
       self.tickstyle = keyword_set(tickstyle)
       self->my_menu_toggle,['dm_idltick','dm_owntick'],self.tickstyle
       set_view = 1b
       redraw = 1>redraw
    endif
    if n_elements(xtickminor) ne 0 then begin
       self.tickminor[0+4*self.xlog] = (-1)>(xtickminor[0])
       if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->setproperty,minor=self.tickminor[0+4*self.xlog]
       if obj_valid(self.drawxAxis[1]) then begin
          self.drawxAxis[1]->setproperty,minor=self.tickminor[0+4*self.xlog]
          self.drawxAxis[1]->getproperty,ticktext=tmpxtick  ;remove the tick text
          if obj_valid(tmpxtick) then begin
             tmpxtick->getproperty,strings=tmp
             for i=0,n_elements(tmp)-1 do tmp[i]=''
             tmpxtick->setproperty,strings=tmp
             self.drawxAxis[1]->setproperty,ticktext=tmpxtick
          endif
       endif
       redraw = 1>redraw
    endif
    if n_elements(ytickminor) ne 0 then begin
       self.tickminor[1+4*self.ylog] = (-1)>(ytickminor[0])
       if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->setproperty,minor=self.tickminor[1+4*self.ylog]
       if obj_valid(self.drawyAxis[1]) then self.drawyAxis[1]->setproperty,minor=self.tickminor[1+4*self.ylog]
       redraw = 1>redraw
    endif
    if n_elements(ztickminor) ne 0 then begin
       self.tickminor[2+4*self.zlog] = (-1)>(ztickminor[0])
       if is3d then self.drawzAxis->setproperty,minor=self.tickminor[2+4*self.zlog]
       redraw = 1>redraw
    endif
    if n_elements(itickminor) ne 0 then begin
       self.tickminor[3+4*self.ilog] = (-1)>(itickminor[0])
       if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->setproperty,minor=self.tickminor[3+4*self.ilog]
       if obj_valid(self.drawyAxis[3]) then self.drawyAxis[3]->setproperty,minor=self.tickminor[3+4*self.ilog]
       redraw = 1>redraw
    endif
    if isotropic then begin
       if n_elements(xticklen) ne 0 then tmpticklen = xticklen $
       else if n_elements(yticklen) ne 0 then tmpticklen = yticklen $
       else if n_elements(zticklen) ne 0 then tmpticklen = zticklen
       if n_elements(tmpticklen) ne 0 then begin
          xticklen = tmpticklen
          yticklen = tmpticklen
          zticklen = tmpticklen
       endif
       if n_elements(xsubticklen) ne 0 then tmpsubticklen = xsubticklen $
       else if n_elements(ysubticklen) ne 0 then tmpsubticklen = ysubticklen $
       else if n_elements(zsubticklen) ne 0 then tmpsubticklen = zsubticklen
       if n_elements(tmpsubticklen) ne 0 then begin
          xsubticklen = tmpsubticklen
          ysubticklen = tmpsubticklen
          zsubticklen = tmpsubticklen
       endif
    endif
    if n_elements(xticklen) ne 0 then begin
       if xticklen[0] ge 0 then begin
          self.ticklen[0+4*isotropic] = xticklen[0]
          if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->setproperty,ticklen=self.ticklen[0+4*isotropic]
          if obj_valid(self.drawxAxis[1]) then self.drawxAxis[1]->setproperty,ticklen=self.ticklen[0+4*isotropic]
          redraw = 1>redraw
       endif
    endif
    if n_elements(xsubticklen) ne 0 then begin
       if xsubticklen[0] ge 0 then begin
          self.subticklen[0+4*isotropic] = (xsubticklen[0])<1
          if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->setproperty,subticklen=self.subticklen[0+4*isotropic]
          if obj_valid(self.drawxAxis[1]) then self.drawxAxis[1]->setproperty,subticklen=self.subticklen[0+4*isotropic]
          redraw = 1>redraw
       endif
    endif
    if n_elements(yticklen) ne 0 then begin
       if yticklen[0] ge 0 then begin
          self.ticklen[1+4*isotropic] = yticklen[0]
          if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->setproperty,ticklen=self.ticklen[1+4*isotropic]
          if obj_valid(self.drawyAxis[1]) then self.drawyAxis[1]->setproperty,ticklen=self.ticklen[1+4*isotropic]
          redraw = 1>redraw
       endif
    endif
    if n_elements(ysubticklen) ne 0 then begin
       if ysubticklen[0] ge 0 then begin
          self.subticklen[1+4*isotropic] = (ysubticklen[0])<1
          if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->setproperty,subticklen=self.subticklen[1+4*isotropic]
          if obj_valid(self.drawyAxis[1]) then self.drawyAxis[1]->setproperty,subticklen=self.subticklen[1+4*isotropic]
          redraw = 1>redraw
       endif
    endif
    if n_elements(zticklen) ne 0 then begin
       if zticklen[0] ge 0 then begin
          self.ticklen[2] = zticklen[0]
          if is3d then self.drawzAxis->setproperty,ticklen=self.ticklen[2]
          redraw = 1>redraw
       endif
    endif
    if n_elements(zsubticklen) ne 0 then begin
       if zsubticklen[0] ge 0 then begin
          self.subticklen[2] = (zsubticklen[0])<1
          if is3d then self.drawzAxis->setproperty,subticklen=self.subticklen[2]
          redraw = 1>redraw
       endif
    endif
    if n_elements(iticklen) ne 0 then begin
       if iticklen[0] ge 0 then begin
          self.ticklen[3] = iticklen[0]
          if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->setproperty,ticklen=self.ticklen[3]
          if obj_valid(self.drawyAxis[3]) then self.drawyAxis[3]->setproperty,ticklen=self.ticklen[3]
          redraw = 1>redraw
       endif
    endif
    if n_elements(isubticklen) ne 0 then begin
       if isubticklen[0] ge 0 then begin
          self.subticklen[3] = (isubticklen[0])<1
          if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->setproperty,subticklen=self.subticklen[3]
          if obj_valid(self.drawyAxis[3]) then self.drawyAxis[3]->setproperty,subticklen=self.subticklen[3]
          redraw = 1>redraw
       endif
    endif
    if n_elements(plotInfo) ne 0 then begin
       nplots = n_elements(plotInfo)
       if n_elements(changeid) eq 0 then changeid=indgen(nplots)
       for i=0,n_elements(changeid)-1 do begin
           case plotInfo[changeid[i]].type of
            ;error plot
            -1: plotInfo[changeid[i]].obj->setproperty,hide=plotInfo[changeid[i]].hide
            ;1d plot
            0:  begin
                plotInfo[changeid[i]].obj->getproperty,symbol=drawPsym
                newcolor   = plotInfo[changeid[i]].color
                newlinesty = plotInfo[changeid[i]].linestyle
                newthick   = (([1.0,0.0])[self.idl_version ge 8.1])>(plotInfo[changeid[i]].thick*sfac)<10.0
                drawPsym   = self->getpsym(plotInfo[changeid[i]].psym,plotInfo[changeid[i]].symsize,newthick,newcolor,old=drawPsym)
                if obj_isa(plotInfo[changeid[i]].obj,'IDLgrPlot') then begin
                   zpos = 0
                   if finite(plotInfo[changeid[i]].zpos) then zpos = plotInfo[changeid[i]].zpos
                   if self.zlog then begin
                      if zpos gt 0 then zpos = alog10(zpos) $
                      else if finite(self.zran[1,1]) then zpos = 1.+alog10(self.zran[1,1])
                   endif
                   zpos = (-1.0e-4)*(1+(plotInfo[changeid[i]].layer))+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)                 
                   plotInfo[changeid[i]].obj->setproperty,color=newcolor,thick=newthick,linestyle=newlinesty,zvalue=zpos
                endif else begin
                   plotInfo[changeid[i]].obj->setproperty,color=newcolor,thick=newthick,linestyle=newlinesty
                endelse
                ;update the legend
                self->updatelegend
                ;change the color and thickness of the error plot if any
                if changeid[i]+1 lt nplots then begin
                   if plotInfo[changeid[i]+1].type eq -1 then begin
                      plotInfo[changeid[i]+1].layer = plotInfo[changeid[i]].layer
                      plotInfo[changeid[i]+1].color = newcolor
                      plotInfo[changeid[i]+1].thick = plotInfo[changeid[i]].thick
                      plotInfo[changeid[i]+1].obj->getproperty,data=data
                      if obj_isa(plotInfo[changeid[i]].obj,'IDLgrPlot') then data[2,*] = zpos
                      plotInfo[changeid[i]+1].obj->setproperty,thick=newthick,color=newcolor,data=data
                   endif
                endif
                ;change arrow color if any
                if changeid[i] gt 0 then begin
                   if plotInfo[changeid[i]-1].type eq -3 then begin
                      plotInfo[changeid[i]-1].layer = plotInfo[changeid[i]].layer
                      plotInfo[changeid[i]-1].color = newcolor
                      plotInfo[changeid[i]-1].obj->getproperty,data=data
                      if obj_isa(plotInfo[changeid[i]].obj,'IDLgrPlot') then data[2,*] = zpos
                      plotInfo[changeid[i]-1].obj->setproperty,color=newcolor,data=data
                   endif
                endif
                end
            ;2d plot contour 
            1:  begin
                zpos = 0.0
                if finite(plotInfo[changeid[i]].zpos) then zpos = plotInfo[changeid[i]].zpos
                if self.zlog then begin
                   if zpos gt 0 then zpos = alog10(zpos) $
                   else if finite(self.zran[1,1]) then zpos = 1.+alog10(self.zran[1,1])
                endif
                zpos = (-1.0e-2)+(-1.0e-4)*(1+(plotInfo[changeid[i]].layer))+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)
                plotInfo[changeid[i]].obj->getproperty,data=data,palette=drawPal
                data[2,*] = zpos                
                drawPal=self->getpalette(plotInfo[changeid[i]].coltable,oldpal=drawPal)
                plotInfo[changeid[i]].obj->setproperty,shading=plotInfo[changeid[i]].shading,data=data
                end
            ;2d surface
            2:  begin
                plotInfo[changeid[i]].obj->getproperty,palette=drawPal
                drawPal=self->getpalette(plotInfo[changeid[i]].coltable,oldpal=drawPal)
                plotInfo[changeid[i]].obj->setproperty,shading=plotInfo[changeid[i]].shading
                end
            ;filled polygon
            3:  begin
                nz = n_elements(*plotInfo[changeid[i]].zPtr)
                if nz eq 0 then begin
                   zpos = 0.0
                   if finite(plotInfo[changeid[i]].zpos) then zpos = plotInfo[changeid[i]].zpos
                   if self.zlog then begin
                      if zpos gt 0 then zpos = alog10(zpos) $
                      else if finite(self.zran[1,1]) then zpos = 1.+alog10(self.zran[1,1])
                   endif
                   zpos = (-1.0e-3)+(-1.0e-4)*(1+(plotInfo[changeid[i]].layer))+zpos & zpos = (zclip[1]+1e-4)>zpos<(zclip[0]-1e-4)
                   plotInfo[changeid[i]].obj->getproperty,data=data
                   data[2,*] = zpos
                   plotInfo[changeid[i]].obj->setproperty,color=plotInfo[changeid[i]].color,data=data
                endif else $
                   plotInfo[changeid[i]].obj->setproperty,color=plotInfo[changeid[i]].color
                end
            ;volume
            4:  begin
                plotInfo[changeid[i]].obj->getproperty,uvalue=drawPal
                drawPal=self->getpalette(plotInfo[changeid[i]].coltable,oldpal=drawPal)
                drawPal->getproperty,red_values=r,green_values=g,blue_values=b
                plotInfo[changeid[i]].obj->setproperty,rgb_table0=[[r],[g],[b]]
                end
            else:
           endcase
       endfor
       (*self.plotInfo) = temporary(plotInfo)
       redraw = 1>redraw
    endif
    if n_elements(render_method) ne 0 then begin
       self.render_method = keyword_set(render_method[0])
       self->my_menu_toggle,['dm_textrm_0','dm_textrm_1'],self.render_method
       set_view = 1b
       redraw = 1>redraw
    endif
    if n_elements(hideaxes) ne 0 then begin
       self.hideAxes = keyword_set(hideaxes[0])
       if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->setproperty,hide=self.hideAxes
       if obj_valid(self.drawxAxis[1]) then self.drawxAxis[1]->setproperty,hide=self.hideAxes
       if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->setproperty,hide=self.hideAxes
       if obj_valid(self.drawyAxis[1]) then self.drawyAxis[1]->setproperty,hide=self.hideAxes
       if is3d                         then self.drawzAxis->setproperty,hide=self.hideAxes
       if obj_valid(self.xgrid)        then self.xgrid->setproperty,hide=((~self.showxgrid) or self.hideAxes)
       if obj_valid(self.ygrid)        then self.ygrid->setproperty,hide=((~self.showygrid) or self.hideAxes)
       if obj_valid(self.zgrid)        then self.zgrid->setproperty,hide=((~self.showzgrid) or self.hideAxes)
       id = self->my_widget_id('dm_cs_hideaxes')
       if id gt 0 then dm_set_button,id,~self.hideAxes,onstring='Hide Axes',offstring='Show Axes'
       self->my_widget_control,'dm_showgridmenu',sensitive=(~self.hideAxes)
       redraw = 1>redraw
    endif
    if n_elements(legdcolumns) ne 0 then begin
       self.drawLegend->setproperty,columns=legdcolumns[0]
       redraw = 1>redraw
    endif
    if n_elements(legdgap) ne 0 then begin
       self.drawLegend->setproperty,gap=legdgap[0]
       redraw = 1>redraw
    endif
    if n_elements(legdbordergap) ne 0 then begin
       self.drawLegend->setproperty,border_gap=legdbordergap[0]
       redraw = 1>redraw
    endif
    if n_elements(legdglyphwidth) ne 0 then begin
       self.drawLegend->setproperty,glyph_width=legdglyphwidth[0]
       redraw = 1>redraw
    endif
    if n_elements(legdoutlinethick) ne 0 then begin
       self.legdoutlinethick = (([1.0,0.0])[self.idl_version ge 8.1])>(legdoutlinethick[0])<10.0
       self.drawLegend->setproperty,outline_thick=sfac*self.legdoutlinethick
       redraw = 1>redraw
    endif
    if n_elements(legdshowfill) ne 0 then begin
       self.legdshowfill = keyword_set(legdshowfill[0])
       id = self->my_widget_id('dm_cs_showfill')
       dm_set_button,id,self.legdshowfill,onstring='Show Filled Background',offstring='Hide Filled Background'
       self.drawLegend->setproperty,show_fill=self.legdshowfill
       redraw = 2>redraw
    endif
    if n_elements(legdshowoutline) ne 0 then begin
       self.legdshowoutline = keyword_set(legdshowoutline[0])
       id = self->my_widget_id('dm_cs_outline')
       dm_set_button,id,self.legdshowoutline,onstring='Show Outline',offstring='Hide Outline'
       self->my_widget_control,'dm_cs_lgndoutlinethick',sensitive=self.legdshowoutline
       self.drawLegend->setproperty,show_outline=self.legdshowoutline
       redraw = 1>redraw
    endif
    if n_elements(hidelegend) ne 0 then begin
       self.hideLegend = keyword_set(hidelegend[0])
       self.drawLegend->setproperty,hide=self.hideLegend
       id = self->my_widget_id('dm_cs_hidelegend')
       dm_set_button,id,~self.hideLegend,onstring='Hide Legend',offstring='Show Legend'
       redraw = 1>redraw
    endif
    if n_elements(xtitle) ne 0 then begin
       self.font[1]->getproperty,name=fontname
       self.xtit->getproperty,strings=old & new = self->textadjust(xtitle[0],fontname=fontname)
       self.xtit->setproperty,strings=new
       redraw = (1+self->checktextefc(new,old))>redraw
    endif
    if n_elements(ytitle) ne 0 then begin
       self.font[2]->getproperty,name=fontname
       self.ytit->getproperty,strings=old & new = self->textadjust(ytitle[0],fontname=fontname)
       self.ytit->setproperty,strings=new
       redraw = (1+self->checktextefc(new,old))>redraw
    endif
    if n_elements(ztitle) ne 0 then begin
       self.font[3]->getproperty,name=fontname
       self.ztit->getproperty,strings=old & new = self->textadjust(ztitle[0],fontname=fontname)
       self.ztit->setproperty,strings=new
       redraw = (1+self->checktextefc(new,old))>redraw
    endif
    if n_elements(ititle) ne 0 then begin
       self.font[8]->getproperty,name=fontname
       self.cbtit->getproperty,strings=old & new = self->textadjust(ititle[0],fontname=fontname)
       self.cbtit->setproperty,strings=new
       if (strlen(old) eq 0) or (strlen(ititle[0]) eq 0) then redraw=2 else redraw=(1+self->checktextefc(new,old))>redraw
    endif
    if n_elements(title) ne 0 then begin
       self.font[4]->getproperty,name=fontname
       self.title->getproperty,strings=old & new = self->textadjust(title[0],fontname=fontname)
       self.title->setproperty,strings=new
       if (strlen(old) eq 0) or (strlen(title[0]) eq 0) then redraw=2 else redraw=(1+self->checktextefc(new,old))>redraw
       if self.compound eq 0 then begin
          if strlen(self.wtit) eq 0 then base_title = (strlen(title[0]) eq 0?'dm_plot':title[0]) else base_title = self.wtit+': '+title[0]
          widget_control,self.tlb,base_set_title=self->textadjust(base_title,/reverse,fontname=fontname)
       endif
       if (old ne title[0]) and self.parent_events and ~keyword_set(noevent) then begin
          sendevent = {dm_plot_changetitle,ID:self.tlb,TOP:self.group_leader,HANDLER:self.tlb,object:self,wtitle:self.wtit,title:self->textadjust(title[0],/reverse,fontname=fontname)}   
          if obj_valid(self.parentobj) then $
             call_method,self.parenthandler,self.parentobj,sendevent $
          else if self.group_leader ne 0 then $
             widget_control,self.group_leader,send_event=sendevent,/no_copy
       endif
    endif
    if n_elements(extragap) eq 4 then begin
       ind = where(extragap eq 0,count)
       if count ne 0 then extragap[ind] = !values.f_nan
       if dm_to_string(self.extragap,sep=',') ne dm_to_string(extragap,sep=',') then redraw = 2 ;need to redraw      
       self.extragap = extragap
       dm_set_button,self->my_widget_id('dm_cs_extragap'),stregex(dm_to_string(extragap,sep=''),'[1-9]',/boolean)
    endif
    if n_elements(vt_col) ne 0 then begin
       self.vt_col = 0>(vt_col)<2
       self->my_menu_toggle,['dm_vtcol_none','dm_vtcol_avg2','dm_vtcol_avg3'],self.vt_col
       if n_elements((*self.plotInfo)) ne 0 then begin
          conplot = where((*self.plotInfo)[*].type eq 1,count)
          if count ne 0 then redraw = 2 ;need to redraw
       endif
    endif
    if n_elements(ltitle) ne 0 then begin
       self.font[5]->getproperty,name=fontname
       self.ltit->getproperty,strings=old & new = self->textadjust(ltitle[0],fontname=fontname)
       self.ltit->setproperty,strings=new
       if new ne old then redraw = 2
    endif
    if n_elements(legdpos) eq 2 then begin
       self.legdpos=0>(legdpos)<1
       redraw = 2 ;need to redraw legend
    endif
    if n_elements(xtickmajor) ne 0 then begin
       self.tickmajor[0+4*self.xlog] = (-1)>(xtickmajor[0])
       if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->setproperty,major=self.tickmajor[0+4*self.xlog]
       if obj_valid(self.drawxAxis[1]) then self.drawxAxis[1]->setproperty,major=self.tickmajor[0+4*self.xlog]
       redraw = 2  ;need to redraw x grid
    endif
    if n_elements(xtickinterval) ne 0 then begin
       if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->setproperty,tickinterval=xtickinterval[0]
       if obj_valid(self.drawxAxis[1]) then self.drawxAxis[1]->setproperty,tickinterval=xtickinterval[0]
       redraw = 2
    endif
    if n_elements(xtickvalue) ne 0 then begin
       if obj_valid(self.drawxAxis[0]) then self.drawxAxis[0]->setproperty,tickvalues=xtickvalue
       if obj_valid(self.drawxAxis[1]) then self.drawxAxis[1]->setproperty,tickvalues=xtickvalue
       redraw = 2  ;need to redraw y grid
    endif
    if n_elements(ytickmajor) ne 0 then begin
       self.tickmajor[1+4*self.ylog] = (-1)>(ytickmajor[0])
       if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->setproperty,major=self.tickmajor[1+4*self.ylog]
       if obj_valid(self.drawyAxis[1]) then self.drawyAxis[1]->setproperty,major=self.tickmajor[1+4*self.ylog]
       redraw = 2  ;need to redraw y grid
    endif
    if n_elements(ytickinterval) ne 0 then begin
       if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->setproperty,tickinterval=ytickinterval[0]
       if obj_valid(self.drawyAxis[1]) then self.drawyAxis[1]->setproperty,tickinterval=ytickinterval[0]
       redraw = 2
    endif
    if n_elements(ytickvalue) ne 0 then begin
       if obj_valid(self.drawyAxis[0]) then self.drawyAxis[0]->setproperty,tickvalues=ytickvalue
       if obj_valid(self.drawyAxis[1]) then self.drawyAxis[1]->setproperty,tickvalues=ytickvalue
       redraw = 2  ;need to redraw y grid
    endif
    if n_elements(ztickmajor) ne 0 then begin
       self.tickmajor[2+4*self.zlog] = (-1)>(ztickmajor[0])
       if is3d then self.drawzAxis->setproperty,major=self.tickmajor[2+4*self.zlog]
       redraw = 2  ;need to redraw z grid
    endif
    if n_elements(ztickinterval) ne 0 then begin
       if is3d then self.drawzAxis->setproperty,tickinterval=ztickinterval[0]
       redraw = 2  ;need to redraw z grid
    endif
    if n_elements(ztickvalue) ne 0 then begin
       if is3d then self.drawzAxis->setproperty,tickvalues=ztickvalue
       redraw = 2  ;need to redraw z grid
    endif
    if n_elements(itickmajor) ne 0 then begin
       self.tickmajor[3+4*self.ilog] = (-1)>(itickmajor[0])
       if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->setproperty,major=self.tickmajor[3+4*self.ilog]
       if obj_valid(self.drawyAxis[3]) then self.drawyAxis[3]->setproperty,major=self.tickmajor[3+4*self.ilog]
       redraw = 2
    endif
    if n_elements(itickinterval) ne 0 then begin
       if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->setproperty,tickinterval=itickinterval[0]
       if obj_valid(self.drawyAxis[3]) then self.drawyAxis[3]->setproperty,tickinterval=itickinterval[0]
       redraw = 2  ;need to redraw z grid
    endif
    if n_elements(itickvalue) ne 0 then begin
       if obj_valid(self.drawyAxis[2]) then self.drawyAxis[2]->setproperty,tickvalues=itickvalue
       if obj_valid(self.drawyAxis[3]) then self.drawyAxis[3]->setproperty,tickvalues=itickvalue
       redraw = 2  ;need to redraw y grid
    endif
    if n_elements(bgcolor) ne 0 then begin
       self.bgcol = keyword_set(bgcolor)
       self->my_menu_toggle,['dm_bgblack','dm_bgwhite'],self.bgcol
       if obj_valid(self.csplotobj) then self.csplotobj->setproperty,bgcolor=self.bgcol
       redraw = 2
    endif
    if n_elements(volclip) ne 0 then begin
       self.volclip = (-1)>(volclip)<7
       redraw = 2  ;need to redraw
    endif
    if n_elements(xlog) ne 0 then begin
       new = keyword_set(xlog)
       if self.xlog ne new then begin
          self.xlog = new
          dm_set_button,self->my_widget_id('dm_xlogBut'),new,onstring='X Normal Scale',offstring='X Logarithmic Scale'
          redraw    = 2 ;need to reset view
          logaxis   = 0 ;x axis
          resetzoombox = 1b ;might need to reset the slice and cut zoombox
          if ptr_valid(self.zoomstack) then begin
             self.xran[*,1-self.xlog] = (*self.zoomstack)[0:1,0]
             self.yran[*,self.ylog]   = (*self.zoomstack)[2:3,0]
             ptr_free,self.zoomstack
          endif
          self->my_widget_control,'dm_xtickintervalBut',sensitive=(~self.xlog)
       endif
    endif
    if n_elements(ylog) ne 0 then begin
       new = keyword_set(ylog)
       if self.ylog ne new then begin
          self.ylog = new
          dm_set_button,self->my_widget_id('dm_ylogBut'),new,onstring='Y Normal Scale',offstring='Y Logarithmic Scale'
          redraw    = 2 ;need to reset view       
          logaxis   = 1 ;y axis
          resetzoombox = 1b
          if ptr_valid(self.zoomstack) then begin
             self.xran[*,self.xlog]   = (*self.zoomstack)[0:1,0]
             self.yran[*,1-self.ylog] = (*self.zoomstack)[2:3,0]
             ptr_free,self.zoomstack
          endif
          self->my_widget_control,'dm_ytickintervalBut',sensitive=(~self.ylog)
       endif
    endif
    if n_elements(zlog) ne 0 then begin
       new = keyword_set(zlog)
       if self.zlog ne new then begin
          self.zlog = new
          dm_set_button,self->my_widget_id('dm_zlogBut'),new,onstring='Z Normal Scale',offstring='Z Logarithmic Scale'
          redraw    = 2 ;need to reset view
          resetzoombox = 1b
          self->my_widget_control,'dm_ztickintervalBut',sensitive=(~self.zlog)
       endif
    endif
    if n_elements(ilog) ne 0 then begin
       new = keyword_set(ilog)
       if self.ilog ne new then begin
          self.ilog = new
          dm_set_button,self->my_widget_id('dm_ilogBut'),new,onstring='I Normal Scale',offstring='I Logarithmic Scale'
          redraw    = 2 ;need to reset view
          self->my_widget_control,'dm_itickintervalBut',sensitive=(~self.ilog)
       endif
    endif
    if n_elements(isotropic) ne 0 then begin
       new = keyword_set(isotropic)
       if self.isotropic ne new then begin
          self.isotropic = new
          dm_set_button,self->my_widget_id('dm_isoBut'),self.isotropic,onstring='Disable Isotropic Scaling',offstring='Enable Isotropic Scaling'
          if self.parent_events and ~keyword_set(noevent) then begin
             sendevent = {dm_plot_isotropic,ID:self.tlb,TOP:self.group_leader,HANDLER:self.tlb,object:self,value:self.isotropic}
             if obj_valid(self.parentobj) then $
                call_method,self.parenthandler,self.parentobj,sendevent $
             else if self.group_leader ne 0 then $    ; send an event there
                widget_control,self.group_leader,send_event=sendevent,/no_copy
          endif
          redraw = 2  ;need to reset view
       endif
    endif
    if n_elements(hideintbar) ne 0 then begin
       self.hideIntbar = keyword_set(hideintbar[0])
       dm_set_button,self->my_widget_id('dm_cs_hidecbar'),~self.hideIntbar,onstring='Hide Colorbar',offstring='Show Colorbar'
       if obj_valid(self.colBar) then begin
          self.drawxAxis[2]->setproperty,hide=self.hideIntbar
          self.drawxAxis[3]->setproperty,hide=self.hideIntbar
          self.drawyAxis[2]->setproperty,hide=self.hideIntbar
          self.drawyAxis[3]->setproperty,hide=self.hideIntbar
          self.colBar->setproperty,hide=self.hideIntbar
       end
       self->my_widget_control,'dm_'+['ititBut','cbarfontBut','imajorBut','iminorBut','iticklenBut','isubticklenBut'],sensitive=(~self.hideIntbar)
       redraw = 2  ;need to reset view
    endif
    if n_elements(cbarpos) eq 2 then begin
       self.cbarpos = cbarpos
       if obj_valid(self.colBar) then begin
          if is3d then cshift = 0.5 else cshift = 0.0
          self.drawxAxis[2]->setproperty,location=[1+self.cbarpos[0]-cshift/2.,-cshift/4.,zclip[0]-0.1],range=1+self.cbarpos-cshift/2.
          self.drawyAxis[2]->setproperty,location=[1+self.cbarpos[0]-cshift/2.,-cshift/4.,zclip[0]-0.1]
          self.drawxAxis[3]->setproperty,location=[1+self.cbarpos[1]-cshift/2.,1-cshift/4.,zclip[0]-0.1],range=1+self.cbarpos-cshift/2.
          self.drawyAxis[3]->setproperty,location=[1+self.cbarpos[1]-cshift/2.,-cshift/4.,zclip[0]-0.1]
          self.colBar->setproperty,geomx=1+self.cbarpos-cshift/2.
          redraw = 2  ;need to reset view
       endif
    endif
    if n_elements(xdat) ne 0 then begin
       if n_elements(xerr) eq n_elements(xdat) then tmpdat = [xdat-xerr,xdat+xerr] $
       else tmpdat = xdat
       tmp_xmin = min(tmpdat,max=tmp_xmax,/nan)
       self.xran[*,0] = [temporary(tmp_xmin),temporary(tmp_xmax)]
       if self.xran[0,0] eq self.xran[1,0] then begin
          tmp = (self.xran[0,0] eq 0)? 0.5:abs(self.xran[0,0]/10.)
          self.xran[0,0] = self.xran[0,0]-tmp
          self.xran[1,0] = self.xran[1,0]+tmp
       endif else begin
          if (n_elements(zdat) eq 0) and (n_elements(idat) eq 0) then $
             self.xran[*,0] = self.xran[*,0]+[-0.1,0.1]*(self.xran[1,0]-self.xran[0,0])
       endelse
       finelts = where(finite(tmpdat),count)
       if count gt 0 then poselts = where(tmpdat[finelts] gt 0,count)
       if count gt 0 then begin
          tmp_xmax = max(tmpdat[finelts[poselts]],min=tmp_xmin)
       endif else begin
          tmp_xmin = 1 & tmp_xmax = 10.0
       endelse
       finelts = -1 & poselts = -1 & tmpdat = 0
       self.xran[0,1] = (tmp_xmin gt self.xran[0,0])?((self.xran[0,0] gt 0)?(self.xran[0,0]):(tmp_xmin)):(self.xran[0,0])
       self.xran[1,1] = (tmp_xmax gt self.xran[1,0])?((self.xran[1,0] gt 0)?(self.xran[1,0]):(tmp_xmax)):(self.xran[1,0])
       if self.xran[1,1] le self.xran[0,1] then begin
          self.xran[0,1] = self.xran[0,1]/8.0
          self.xran[1,1] = self.xran[0,1]*10.0
       endif
    endif
    if n_elements(ydat) ne 0 then begin
       if n_elements(yerr) eq n_elements(ydat) then tmpdat = [ydat-abs(yerr),ydat+abs(yerr)] $
       else tmpdat = ydat
       tmp_ymin = min(tmpdat,max=tmp_ymax,/nan)
       self.yran[*,0] = [temporary(tmp_ymin),temporary(tmp_ymax)]
       if self.yran[0,0] eq self.yran[1,0] then begin
          tmp = (self.yran[0,0] eq 0)? 0.5:abs(self.yran[0,0]/10.)
          self.yran[0,0] = self.yran[0,0]-tmp
          self.yran[1,0] = self.yran[1,0]+tmp
       endif else begin
          if (n_elements(zdat) eq 0) and (n_elements(idat) eq 0) then $
             self.yran[*,0] = self.yran[*,0]+[-0.1,0.1]*(self.yran[1,0]-self.yran[0,0])
       endelse
       finelts = where(finite(tmpdat),count)
       if count gt 0 then poselts = where(tmpdat[finelts] gt 0,count)
       if count gt 0 then begin
          tmp_ymax = max(tmpdat[finelts[poselts]],min=tmp_ymin)
       endif else begin
          tmp_ymin = 1 & tmp_ymax = 10.0
       endelse
       finelts = -1 & poselts = -1 & tmpdat = 0 
       self.yran[0,1] = (tmp_ymin gt self.yran[0,0])?((self.yran[0,0] gt 0)?(self.yran[0,0]):(tmp_ymin)):(self.yran[0,0])
       self.yran[1,1] = (tmp_ymax gt self.yran[1,0])?((self.yran[1,0] gt 0)?(self.yran[1,0]):(tmp_ymax)):(self.yran[1,0])
       if self.yran[1,1] le self.yran[0,1] then begin
          self.yran[0,1] = self.yran[0,1]/8.0
          self.yran[1,1] = self.yran[0,1]*10.0
       endif
    endif
    if (n_elements(zdat) eq 0) and (n_elements(idat) ne 0) then begin
       zdat = temporary(idat)
       if (n_elements(zerr) eq 0) and (n_elements(ierr) ne 0) then zerr = temporary(ierr)
    endif
    if n_elements(zdat) ne 0 then begin
       if n_elements(zerr) eq n_elements(zdat) then tmpdat = [zdat-zerr,zdat+zerr] $
       else tmpdat = zdat
       tmp_zmin = min(tmpdat,max=tmp_zmax,/nan)
       self.zran[*,0] = [temporary(tmp_zmin),temporary(tmp_zmax)]
       if self.zran[0,0] eq self.zran[1,0] then begin
          tmp = (self.zran[0,0] eq 0)? 0.5:abs(self.zran[0,0]/10.)
          self.zran[0,0] = self.zran[0,0]-tmp
          self.zran[1,0] = self.zran[1,0]+tmp
       endif
       finelts = where(finite(tmpdat),count)
       if count gt 0 then poselts = where(tmpdat[finelts] gt 0,count)
       if count gt 0 then begin
          tmp_zmax = max(tmpdat[finelts[poselts]],min=tmp_zmin)
       endif else begin
          tmp_zmin = 1 & tmp_zmax = 10.0
       endelse
       finelts = -1 & poselts = -1 & tmpdat = 0
       self.zran[0,1] = (tmp_zmin gt self.zran[0,0])?((self.zran[0,0] gt 0)?(self.zran[0,0]):(tmp_zmin)):(self.zran[0,0])
       self.zran[1,1] = (tmp_zmax gt self.zran[1,0])?((self.zran[1,0] gt 0)?(self.zran[1,0]):(tmp_zmax)):(self.zran[1,0])
       if self.zran[1,1] le self.zran[0,1] then begin
          self.zran[0,1] = self.zran[0,1]/8.0 
          self.zran[1,1] = self.zran[0,1]*10.0
       endif
       self.zmin = self.zran[0,self.zlog]
       self.zmax = self.zran[1,self.zlog]
    endif
    if n_elements(idat) ne 0 then begin
       tmp_imax = max(idat,min=tmp_imin,/nan)
       self.iran[*,0] = [temporary(tmp_imin),temporary(tmp_imax)]
       if self.iran[0,0] eq self.iran[1,0] then begin
          tmp = (self.iran[0,0] eq 0)? 0.5:abs(self.iran[0,0]/2.)
          self.iran[0,0] = self.iran[0,0]-tmp
          self.iran[1,0] = self.iran[1,0]+tmp
       endif
       finelts=where(finite(idat),count)
       if count gt 0 then poselts=where(idat[finelts] gt 0,count)
       if count gt 0 then begin
          tmp_imax = max(idat[finelts[poselts]],min=tmp_imin)
       endif else begin
          tmp_imin = 1 & tmp_imax = 10.0
       endelse
       finelts = -1 & poselts = -1
       self.iran[0,1] = (tmp_imin gt self.iran[0,0])?((self.iran[0,0] gt 0)?(self.iran[0,0]):(tmp_imin)):(self.iran[0,0])
       self.iran[1,1] = (tmp_imax gt self.iran[1,0])?((self.iran[1,0] gt 0)?(self.iran[1,0]):(tmp_imax)):(self.iran[1,0])
       if self.iran[1,1] le self.iran[0,1] then begin
          self.iran[0,1] = self.iran[0,1]/8.0
          self.iran[1,1] = self.iran[0,1]*10.0
       endif
       self.zmin = self.iran[0,self.ilog]
       self.zmax = self.iran[1,self.ilog]
    endif
    if n_elements(xrange) eq 2 then begin
       if (total(finite(xrange)) eq 2) then begin
          if xrange[1] gt xrange[0] then begin
             redraw = 2
             if ~keyword_set(zoom) then zoom = 0
             if self.xlog then begin
                if xrange[0] gt 0 then self.xran[0,1] = xrange[0]
                if xrange[1] gt 0 then self.xran[1,1] = xrange[1]
             endif else self.xran[*,0] = xrange
             if (self.slicetype ge 0) or (self.cuttype ge 0) then resetzoombox = 1b
          endif
       endif
    endif
    if n_elements(yrange) eq 2 then begin
       if (total(finite(yrange)) eq 2) then begin
          if yrange[1] gt yrange[0] then begin
             redraw = 2
             if ~keyword_set(zoom) then zoom = 0
             if self.ylog then begin
                if yrange[0] gt 0 then self.yran[0,1] = yrange[0]
                if yrange[1] gt 0 then self.yran[1,1] = yrange[1]
             endif else self.yran[*,0] = yrange
             if (self.slicetype ge 0) or (self.cuttype ge 0) then resetzoombox = 1b
          endif
       endif
    endif
    if n_elements(zrange) eq 2 then begin
       if (total(finite(zrange)) eq 2) then begin
          if zrange[1] gt zrange[0] then begin
             redraw = 2
             if self.zlog then begin
                if zrange[0] gt 0 then self.zran[0,1] = zrange[0]
                if zrange[1] gt 0 then self.zran[1,1] = zrange[1]
             endif else self.zran[*,0] = zrange
             if self.slicetype ge 0 then resetzoombox = 1b
          endif
       endif
    endif
    if (n_elements(idat) eq 0) and n_elements(zdat) ne 0 then self.iran=self.zran
    if n_elements(irange) eq 2 then begin
       if (total(finite(irange)) eq 2) then begin
          if irange[1] gt irange[0] then begin
             redraw = 2
             if self.ilog then begin
                if irange[0] gt 0 then self.iran[0,1] = irange[0]
                if irange[1] gt 0 then self.iran[1,1] = irange[1]
             endif else self.iran[*,0]=irange
          endif
       endif
    endif
    if n_elements(zmin) ne 0 then self.zmin = zmin[0]
    if n_elements(zmax) ne 0 then self.zmax = zmax[0]
    if (n_elements(xdat) ne 0) and (n_elements(ydat) ne 0) then begin
       redraw = 2  ;need to reset view
       ptr_free,self.zoomstack
       if obj_valid(self.drawxAxis[0]) then begin
          self.tickmajor = [-1,-1,-1,-1,-1,-1,-1,-1]
          self.tickminor = [-1,-1,-1, 0,-1,-1,-1,-1]
       endif
       self->erase,title=title,/nodraw  ;cornertxt will be lost
       if n_elements(idat) ne 0 then begin
          self->add_plot,xdat,ydat,zdat,idat,zerr=zerr,ierr=ierr,no_copy=no_copy,surfplot=surfplot,coltable=coltable,shading=shading,interpolate=interpolate,opacity=opacity,error=error
       endif else begin
          if n_elements(zdat) ne 0 then begin
             self->add_plot,xdat,ydat,zdat,xerr=xerr,yerr=yerr,zerr=zerr,no_copy=no_copy,surfplot=surfplot,coltable=coltable,shading=shading,usepolygon=usepolygon,layer=layer,$
                   legend=legend,thick=thick,color=color,coldefine=coldefine,psym=psym,linestyle=linestyle,symsize=symsize,contourplot=contourplot,addarrow=addarrow,$
                   arrowangle=arrowangle,arrowlength=arrowlength,error=error 
          endif else begin
             self->add_plot,xdat,ydat,xerr=xerr,yerr=yerr,no_copy=no_copy,legend=legend,thick=thick,color=color,coldefine=coldefine,psym=psym,linestyle=linestyle,symsize=symsize,$
                   layer=layer,usepolygon=usepolygon,addarrow=addarrow,arrowangle=arrowangle,arrowlength=arrowlength,error=error
          endelse
       endelse
       ;cursor position string
       self->clearmotionevent
    endif
    if n_elements(cornertxt) ne 0 then begin
       self.font[7]->getproperty,name=fontname
       self.cornertxt->setproperty,strings=self->textadjust(cornertxt[0],fontname=fontname),hide=(strlen(cornertxt[0]) eq 0)
       redraw = 1>redraw
    endif
    if keyword_set(resetzoombox) and (self.cuttype ge 0) and obj_valid(self.zoomBox) then begin
       if n_elements(logaxis) ne 0 then begin
          self.zoomBox->getproperty,data=zbdata
          if logaxis eq 0 then begin
             if self.xlog then begin
                zbdata[0,*] = alog10((1e-20)>(zbdata[0,*]))
             endif else begin
                zbdata[0,*] = 10.0^(zbdata[0,*])
             endelse 
          endif else if logaxis eq 1 then begin
             if self.ylog then begin
                zbdata[1,*] = alog10((1e-20)>(zbdata[1,*]))
             endif else begin
                zbdata[1,*] = 10.0^(zbdata[1,*])
             endelse 
          endif
          self.zoomBox->setproperty,data=zbdata
          if self.cuttype eq 2 then self.cuttype = -1
       endif
       self->cut,self.cuttype,/noquestion
    endif
    if keyword_set(resetzoombox) and (self.slicetype ge 0) and obj_valid(self.sliceBox) then begin
       self->slice,self.slicetype,/noquestion
    endif
    if keyword_set(nodraw) then return
    if keyword_set(set_view) and obj_valid(self.drawxAxis[0]) then self->set_view
    if redraw eq 1 then self->draw,/view,nototop=nototop $
    else if redraw eq 2 then self->draw,zoom=zoom,nototop=nototop
end

;set the slice box color
pro dm_plot::setsliceboxcolor,colortable,draw=draw
    if (n_elements(colortable) eq 0) or (~obj_valid(self.sliceBox)) or (self.slicetype eq -1) then return
    self.sliceBox->getproperty,data=data,vert_color=vtc
    zsw = (max(data[self.slicetype,*]) eq min(data[self.slicetype,*]))  ;zero slice width flag
    rgb = self->getpalette(colortable,/coloravg)
    tmp = (25b)*(1-zsw)*[0b,2b,3b,1b,2b,3b,4b,2b]                       ;different shades
    vtc = 0>(rgb#(bytarr(n_elements(tmp))+1b)-(bytarr(n_elements(rgb))+1b)#tmp)
    self.sliceBox->setproperty,vert_color=vtc
    if keyword_set(draw) then self->draw,/nototop
end

;setup correct viewing plane rectangle and suppress xaxis[1]'s tickname
;keywords
;   save:       if set, change white color to black color for saving purpose
;   landscape:  if set, the image is rotated
pro dm_plot::set_view,save=save,landscape=landscape,destination=destination
    if keyword_set(save) then bgcolor=[255b,255b,255b]*self.papercol else bgcolor=[255b,255b,255b]*self.bgcol
    if n_elements(destination) ne 0 then isprinter = (destination eq self.printer) 
    if obj_valid(self.drawxAxis[1]) then begin
       self.drawxAxis[1]->getproperty,ticktext=xtick
       if obj_valid(xtick) then begin
          xtick->getproperty,strings=tmp
          for i=0,n_elements(tmp)-1 do tmp[i]=''
          xtick->setproperty,strings=tmp,/hide
          self.drawxAxis[1]->setproperty,ticktext=xtick
       endif
    endif
    self->getproperty,xran=xran,yran=yran,zran=zran,iran=iran,is3d=is3d,dimension=dim,zclip=zclip
    xsize = 1>(dim[0]) & xoffset = 20>(xsize*0.06)
    ysize = 1>(dim[1]) & yoffset = 20>(ysize*0.06)  
    fsize = self.fsize & axsthick = self.axisthick & grdthick = self.gridthick & otlthick = self.legdoutlinethick
    sfac1 = ([1>(mean(dim/self.default[4:5])),1.0])[keyword_set(isprinter)]
    sfac2 = ([1>(min(dim/self.default[4:5])),1.0])[keyword_set(isprinter)]
    fsize = fix(sfac1*fsize[*])
    axsthick = (([1.0,0.0])[self.idl_version ge 8.1])>(sfac2*axsthick)<10.0
    grdthick = (([1.0,0.0])[self.idl_version ge 8.1])>(sfac2*grdthick)<10.0
    otlthick = (([1.0,0.0])[self.idl_version ge 8.1])>(sfac2*otlthick)<10.0
    for i=0,n_elements(fsize)-1 do self.font[i]->setproperty,size=fsize[i]     ;modify fontsize
    for i=0,3 do begin                                                         ;modify axis thickness
        if obj_valid(self.drawxAxis[i]) then self.drawxAxis[i]->setproperty,thick=axsthick
        if obj_valid(self.drawyAxis[i]) then self.drawyAxis[i]->setproperty,thick=axsthick
    endfor
    if is3d then self.drawzAxis->setproperty,thick=axsthick
    grids = [self.xgrid,self.ygrid,self.zgrid]
    for i=0,2 do begin
        if obj_valid(grids[i]) then grids[i]->setproperty,thick=grdthick
    endfor

    nplot = n_elements(*self.plotInfo) 
    if nplot ne 0 then begin
       onedplot = where(((*self.plotInfo)[*].type le 0) and ((*self.plotInfo)[*].type gt -3),onedcount)
       twodplot = where(((*self.plotInfo)[*].type gt 0) and ((*self.plotInfo)[*].type ne 3),twodcount)
       polyplot = where((*self.plotInfo)[*].type eq 3,polycount)
    endif
    viewplane_rect = [-0.1,0.0,1.1,1.0] & offset = [0.0,0.0,0.0,0.0]
    if is3d then begin
       cshift = -0.5
       viewplane_rect = viewplane_rect+[-0.7,-0.35,self.cbarpos[1]-cshift/2.0,0.35]
       tmp = (fsize[3]+fsize[0])/xsize
       offset[0] = offset[0]-tmp
       offset[2] = offset[2]+tmp
    endif else begin
       cshift = 0.0
       tmp = (fsize[2]+fsize[0])/xsize
       offset[0] = offset[0]-tmp
       offset[2] = offset[2]+tmp
       tmp = (fsize[1]+fsize[0])/ysize
       offset[1] = offset[1]-tmp
       offset[3] = offset[3]+tmp
    endelse
    self.title->getproperty,strings=title
    if strlen(title) ne 0 then offset[3] = offset[3]+fsize[4]/ysize
    if (~self.hideIntbar) and keyword_set(twodcount) then begin
       viewplane_rect[2] = viewplane_rect[2]+self.cbarpos[1]
       offset[2] = offset[2]+fsize[0]/xsize
       self.cbtit->getproperty,strings=title
       if strlen(title) ne 0 then offset[2] = offset[2]+fsize[7]/xsize
    endif
    viewplane_rect = viewplane_rect+offset
    self.drawView->setproperty,viewplane_rect=viewplane_rect        ;start with preset values to get consistent results
    self.tranView->setproperty,viewplane_rect=viewplane_rect 
    
    ;get the axis tickmarks to figure out the offset of the viewplane
    if obj_valid(self.drawxAxis[0]) and obj_valid(self.drawyAxis[0]) then begin
       self.drawxAxis[0]->setproperty,ticktext=obj_new()
       self.drawxAxis[0]->getproperty,ticktext=xtick,tickvalues=xtickvalue,major=xmajor
       if obj_valid(xtick) and (xmajor ne 0) then begin
          xtick->getproperty,strings=xticktext
          if self.tickstyle then begin
             xticktext = dm_to_string(xtickvalue,exponent=self.xlog)
             ind = where(xticktext eq '1e0',count)
             if self.xlog and (count ne 0) and (n_elements(xticktext) eq count) then xticktext[ind] = '1'
             xtick->setproperty,strings=xticktext
          endif
          xtick->setproperty,render_method=self.render_method
       endif
       self.drawyAxis[0]->setproperty,ticktext=obj_new()
       self.drawyAxis[0]->getproperty,ticktext=ytick,tickvalues=ytickvalue,major=ymajor
       if obj_valid(ytick) and (ymajor ne 0) then begin
          ytick->getproperty,strings=yticktext
          if self.tickstyle then begin
             yticktext = dm_to_string(ytickvalue,exponent=self.ylog)
             ind = where(yticktext eq '1e0',count)
             if self.ylog and (count ne 0) and (n_elements(yticktext) eq count) then yticktext[ind] = '1'
             ytick->setproperty,strings=yticktext
          endif
          ytick->setproperty,render_method=self.render_method
       endif
    endif
    if obj_valid(self.xtit) then self.xtit->setproperty,render_method=self.render_method
    if obj_valid(self.ytit) then self.ytit->setproperty,render_method=self.render_method
    if obj_valid(self.ztit) then self.ztit->setproperty,render_method=self.render_method
    if obj_valid(self.title) then self.title->setproperty,render_method=self.render_method
    if is3d then begin
       self.drawGroup->getproperty,transform=view_t & view_t = transpose(view_t[0:2,0:2])
       self.drawzAxis->setproperty,ticktext=obj_new()
       self.drawzAxis->getproperty,ticktext=ztick,tickvalues=ztickvalue,major=zmajor
       if obj_valid(ztick) and (zmajor ne 0) then begin
          ztick->getproperty,strings=zticktext
          if self.tickstyle then begin
             zticktext = dm_to_string(ztickvalue,exponent=self.zlog)
             ind = where(zticktext eq '1e0',count)
             if self.zlog and (count ne 0) and (n_elements(zticktext) eq count) then zticktext[ind] = '1'
             ztick->setproperty,strings=zticktext
          endif
          ztick->setproperty,render_method=self.render_method
       endif
       tmp0 = self->get_view_range(self.drawxAxis[0],destination=destination)  & tmp0 = view_t#tmp0 
       tmp1 = self->get_view_range(self.drawyAxis[0],destination=destination)  & tmp1 = view_t#tmp1
       tmp2 = self->get_view_range(self.drawzAxis,destination=destination)     & tmp2 = view_t#tmp2
       tmp3 = self->get_view_range(self.xtit,destination=destination)          & tmp3[0,*] = (tmp3[0,*]-xran[0])/(xran[1]-xran[0])+cshift & tmp3 = view_t#tmp3
       tmp4 = self->get_view_range(self.ytit,destination=destination)          & tmp4[1,*] = (tmp4[1,*]-yran[0])/(yran[1]-yran[0])+cshift & tmp4 = view_t#tmp4 
       tmp5 = self->get_view_range(self.ztit,destination=destination)          & tmp5[2,*] = (tmp5[2,*]-zran[0])/(zran[1]-zran[0])        & tmp5 = view_t#tmp5 
       if xmajor ne 0 then begin
       tmp6 = self->get_view_range(xtick,destination=destination)              & tmp6[0,*] = (tmp6[0,*]-xran[0])/(xran[1]-xran[0])+cshift & tmp6 = view_t#tmp6
       endif else tmp6 = tmp0
       if ymajor ne 0 then begin
       tmp7 = self->get_view_range(ytick,destination=destination)              & tmp7[1,*] = (tmp7[1,*]-yran[0])/(yran[1]-yran[0])+cshift & tmp7 = view_t#tmp7
       endif else tmp7 = tmp1
       if zmajor ne 0 then begin
       tmp8 = self->get_view_range(ztick,destination=destination)              & tmp8[2,*] = (tmp8[2,*]-zran[0])/(zran[1]-zran[0])        & tmp8 = view_t#tmp8 
       endif else tmp8 = tmp2
       minx = min([tmp0[0,*],tmp1[0,*],tmp2[0,*],tmp3[0,*],tmp4[0,*],tmp5[0,*],tmp6[0,*],tmp7[0,*],tmp8[0,*]],max=maxx) & view_xran = [minx,maxx]
       miny = min([tmp0[1,*],tmp1[1,*],tmp2[1,*],tmp3[1,*],tmp4[1,*],tmp5[1,*],tmp6[1,*],tmp7[1,*],tmp8[1,*]],max=maxy) & view_yran = [miny,maxy]
       if self.showxgrid or self.showygrid or self.showzgrid then begin
          tmp3[0,*] = tmp2[0,*]+tmp0[0,1]-tmp0[0,0]
          tmp3[1,*] = tmp2[1,*]+tmp0[1,1]-tmp0[1,0]
          tmp4[0,*] = tmp0[0,*]+tmp2[0,1]-tmp2[0,0]
          tmp4[1,*] = tmp0[1,*]+tmp2[1,1]-tmp2[1,0]
          minx = min([reform(tmp3[0,*]),tmp4[0,1]],max=maxx) 
          miny = min([reform(tmp3[1,*]),tmp4[1,1]],max=maxy)
          view_xran[0] = (view_xran[0])<(minx)
          view_xran[1] = (view_xran[1])>(maxx)
          view_yran[0] = (view_yran[0])<(miny)
          view_yran[1] = (view_yran[1])>(maxy)
       endif
    endif else if obj_valid(self.drawxAxis[0]) and obj_valid(self.drawyAxis[0]) then begin
       view_xran = reform((self->get_view_range(self.drawxAxis[0],destination=destination))[0,*])
       view_yran = reform((self->get_view_range(self.drawyAxis[0],destination=destination))[1,*])
       if ymajor ne 0 then begin
          tmp = reform((self->get_view_range(ytick,destination=destination))[1,*])
          view_yran[1] = ((tmp[1]-yran[0])/(yran[1]-yran[0]))>(view_yran[1])
       endif
       if xmajor ne 0 then begin
          tmp = reform((self->get_view_range(xtick,destination=destination))[0,*])
          view_xran[1] = ((tmp[1]-xran[0])/(xran[1]-xran[0]))>(view_xran[1])
       endif
       view_yran[0] = (self->get_view_range(self.xtit,destination=destination))[1,0]
       self.ytit->getproperty,strings=ytit
       view_xran[0] = (self->get_view_range(self.ytit,destination=destination))[0,strlen(ytit) eq 0]
    endif
    if obj_valid(self.drawxAxis[1]) then tmp = self->get_view_range(self.drawxAxis[1],destination=destination)
    if obj_valid(self.drawyAxis[1]) then tmp = self->get_view_range(self.drawyAxis[1],destination=destination)
    self.title->getproperty,strings=title
    if strlen(title) ne 0 then begin
       if is3d then begin
          offset = ([0.2,0.3])[self.showxgrid or self.showygrid or self.showzgrid]
          if self.isotropic and (self.iso3dtype eq 1) then location=[0,offset+(zran[1]-zran[0])/(yran[1]-yran[0]),zclip[0]-0.09] else location=[0,1+offset,zclip[0]-0.09]
          self.title->setproperty,location=location
       endif
       tmp = self->get_view_range(self.title,destination=destination)
       view_yran[1] = (tmp[1,1])>(view_yran[1])
       if is3d then begin
          view_xran[0] = (tmp[0,0])<(view_xran[0])
          view_xran[1] = (tmp[0,1])>(view_xran[1])
          view_yran[0] = (tmp[1,0])<(view_yran[0])
       endif
    endif
    if nplot ne 0 then begin
       if (~self.hideIntbar) and (twodcount ne 0) then begin
          tmp = self->get_view_range(self.drawxAxis[2],destination=destination) & view_xran[1] = (tmp[0,1])>(view_xran[1])
          tmp = self->get_view_range(self.drawxAxis[3],destination=destination)
          tmp = self->get_view_range(self.drawyAxis[2],destination=destination)
          tmp = self->get_view_range(self.drawyAxis[3],destination=destination)
          self.drawyAxis[3]->setproperty,ticktext=obj_new()
          self.drawyAxis[3]->getproperty,ticktext=cytick,tickvalues=ytickvalue,major=cymajor
          if obj_valid(cytick) and (cymajor ne 0) then begin
             cytick->getproperty,strings=yticktext
             if self.tickstyle then begin
                yticktext = dm_to_string(ytickvalue,exponent=self.ilog)
                ind = where(yticktext eq '1e0',count)
                if self.ilog and (count ne 0) and (n_elements(yticktext) eq count) then yticktext[ind] = '1'
                cytick->setproperty,strings=yticktext
             endif 
             tmp = self->get_view_range(cytick,destination=destination)
             tmp[1,*] = (tmp[1,*]-iran[0])/(iran[1]-iran[0])+cshift/4.
             view_xran[1] = (tmp[0,1])>(view_xran[1])
             view_yran[1] = (tmp[1,1])>(view_yran[1])
             view_yran[0] = (tmp[1,0])<(view_yran[0])
             cytick->setproperty,render_method=self.render_method
          endif
          self.cbtit->getproperty,strings=title
          if strlen(title) ne 0 then view_xran[1] = ((self->get_view_range(self.cbtit,destination=destination))[0,1])>(view_xran[1])
          self.cbtit->setproperty,render_method=self.render_method
       endif
       if (~self.hideLegend) and (onedcount ne 0) and is3d then begin
          show = where((*self.plotInfo)[onedplot].hide eq 0,count)
          if count gt 0 then show = where(strlen(strcompress((*self.plotInfo)[onedplot[show]].legend,/remove_all)) gt 0,count)
          if count gt 0 then begin
             tmp = self->get_view_range(self.drawLegend,destination=destination)
             view_xran[0] = (tmp[0,0])<(view_xran[0])
             view_xran[1] = (tmp[0,1])>(view_xran[1])
             view_yran[0] = (tmp[1,0])<(view_yran[0]) 
             view_yran[1] = (tmp[1,1])>(view_yran[1])
          endif
       endif
    endif
    
    if n_elements(view_xran) ne 0 then begin
       if finite(self.extragap[0]) then view_xran[0] = view_xran[0]-self.extragap[0]  ;left
       if finite(self.extragap[1]) then view_xran[1] = view_xran[1]+self.extragap[1]  ;right
       if finite(self.extragap[2]) then view_yran[1] = view_yran[1]+self.extragap[2]  ;top
       if finite(self.extragap[3]) then view_yran[0] = view_yran[0]-self.extragap[3]  ;bottom
       if keyword_set(landscape) then begin
          tmp = view_xran
          view_xran = view_yran
          view_yran = [1-tmp[1],1-tmp[0]]
       endif
       viewplane_rect = [view_xran[0],view_yran[0],view_xran[1]-view_xran[0],view_yran[1]-view_yran[0]]  ;viewing volume   
    endif
   
    if xsize gt 2*xoffset then xoffset1 = xoffset/(xsize-2.0*xoffset)*viewplane_rect[2] else xoffset1 = 0.0
    if ysize gt 2*yoffset then yoffset1 = yoffset/(ysize-2.0*yoffset)*viewplane_rect[3] else yoffset1 = 0.0
    viewplane_rect = viewplane_rect+[-xoffset1,-yoffset1,2.0*xoffset1,2.0*yoffset1]

    if self.isotropic and (total(finite([xran,yran],/nan)) eq 0) then begin ;isotropic scaling
       xoffset = 0.0 & yoffset = 0.0
       if keyword_set(landscape) then begin
          tmp  = xran
          xran = yran
          yran = tmp
       endif
       aspect = (yran[1]-yran[0])/(xran[1]-xran[0])
       ratio  = float(ysize)/float(xsize)
       ;(y0+dy)/(x0+dx)==ratio/Aspect
       yoffset = 0.0>(viewplane_rect[2]*ratio/aspect-viewplane_rect[3]) 
       xoffset = 0.0>(viewplane_rect[3]*aspect/ratio-viewplane_rect[2])
       viewplane_rect = viewplane_rect+[-xoffset/2.0,-yoffset/2.0,xoffset,yoffset]
    endif

    ;the cursor position status string is always at the lower left corner
    if keyword_set(landscape) then begin
       self.cursorpos->setproperty,xcoord_conv=[(1-viewplane_rect[1]-viewplane_rect[3])*0.9,1],ycoord_conv=[viewplane_rect[0]*0.9,1],zcoord_conv=[1,1]
       self.cornertxt->setproperty,xcoord_conv=[(1-viewplane_rect[1]-viewplane_rect[3])*0.9,1],ycoord_conv=[viewplane_rect[0]*0.9,1],zcoord_conv=[1,1]       
    endif else begin
       self.cursorpos->setproperty,xcoord_conv=[viewplane_rect[0]*0.9,1],ycoord_conv=[viewplane_rect[1]*0.9,1],zcoord_conv=[1,1] 
       self.cornertxt->setproperty,xcoord_conv=[viewplane_rect[0]*0.9,1],ycoord_conv=[viewplane_rect[1]*0.9,1],zcoord_conv=[1,1] 
    endelse       
    self.drawView->setproperty,viewplane_rect=viewplane_rect,color=bgcolor,hide=0
    self.tranView->setproperty,viewplane_rect=viewplane_rect
    self.viewplane = viewplane_rect

    ;reverse black and white color of the axis if necessary
    for i=0,3 do begin
        if obj_valid(self.drawxAxis[i]) then begin
           self.drawxAxis[i]->getproperty,color=color,title=title,use_text_color=use_text_color
           self.drawxAxis[i]->setproperty,color=[255b,255b,255b]-bgcolor
           if obj_valid(title) then begin
              if use_text_color then begin
                 title->getproperty,color=color,fill_background=fill_background,fill_color=fill_color
                 if (total(abs(color-bgcolor)) eq 0) and ((~fill_background) or (total(abs(fill_color-bgcolor)) eq 0)) then color=[255b,255b,255b]-bgcolor 
              endif else color = [255b,255b,255b]-bgcolor
              title->setproperty,color=color
           endif
        endif
        if obj_valid(self.drawyAxis[i]) then begin
           self.drawyAxis[i]->getproperty,color=color,title=title,use_text_color=use_text_color
           self.drawyAxis[i]->setproperty,color=[255b,255b,255b]-bgcolor
           if obj_valid(title) then begin
              if use_text_color then begin
                 title->getproperty,color=color,fill_background=fill_background,fill_color=fill_color
                 if (total(abs(color-bgcolor)) eq 0) and ((~fill_background) or (total(abs(fill_color-bgcolor)) eq 0)) then color=[255b,255b,255b]-bgcolor 
              endif else color = [255b,255b,255b]-bgcolor
              title->setproperty,color=color
           endif
        endif
    endfor
    if is3d then self.drawzAxis->setproperty,color=[255b,255b,255b]-bgcolor
    ;reverse black and white for the grids if necessary
    if self.showxgrid then begin
       self.xgrid->getproperty,color=color
       if total(abs(color-bgcolor)) eq 0 then self.xgrid->setproperty,color=[255b,255b,255b]-color
    endif
    if self.showygrid then begin
       self.ygrid->getproperty,color=color
       if total(abs(color-bgcolor)) eq 0 then self.ygrid->setproperty,color=[255b,255b,255b]-color
    endif
    if self.showzgrid then begin
       self.zgrid->getproperty,color=color
       if total(abs(color-bgcolor)) eq 0 then self.zgrid->setproperty,color=[255b,255b,255b]-color
    endif
    ;reverse black and white for text objects and modify their font sizes
    for j=0,1 do begin
        oChildArr = ([self.drawModel,self.drawGroup])[j]->IDL_Container::Get(/ALL, COUNT=nKids)
        for i=0,nKids-1 do begin
            if obj_isa(oChildArr[i],'IDLgrText') then begin
               oChildArr[i]->getproperty,color=color,font=ofont,name=name,fill_background=fill_background,fill_color=fill_color
               if (total(abs(color-bgcolor)) eq 0) and ((~fill_background) or (total(abs(fill_color-bgcolor)) eq 0)) then oChildArr[i]->setproperty,color=[255b,255b,255b]-bgcolor 
               if name eq 'text' then begin
                  help,ofont,output=id & id=strsplit(id,' ',/extract) & id=id[n_elements(id)-1]
                  index = where(*self.textsize eq id,count)
                  if count eq 1 then begin
                     tmp_fsize = (*self.textsize)[index+1]
                     tmp_fsize = fix((1>min(dim/self.default[4:5]))*float(tmp_fsize))
                     ofont->setproperty,size=tmp_fsize
                  endif
               endif
               oChildArr[i]->setproperty,render_method=self.render_method
            endif
        endfor
    endfor
    ;update symbol size and color and line thickness
    if nplot ne 0 then begin
       for i=0,onedcount-1 do begin
           thick = (([1.0,0.0])[self.idl_version ge 8.1])>((*self.plotInfo)[onedplot[i]].thick*sfac2)<10.0
           (*self.plotInfo)[onedplot[i]].obj->getproperty,symbol=drawPsym,color=color
           if total(abs(color-bgcolor)) eq 0 then begin
              (*self.plotInfo)[onedplot[i]].obj->setproperty,color=[255b,255b,255b]-color
              (*self.plotInfo)[onedplot[i]].color = [255b,255b,255b]-color
           endif
           if obj_valid(drawPsym) then begin
              drawPsym = self->getpsym((*self.plotInfo)[onedplot[i]].psym,(*self.plotInfo)[onedplot[i]].symsize,thick,(*self.plotInfo)[onedplot[i]].color,old=drawPsym,landscape=landscape)
              drawPsym->getproperty,data=tmp,color=color
              if total(abs(color-bgcolor)) eq 0 then drawPsym->setproperty,color=[255b,255b,255b]-color
              if obj_valid(tmp) then begin
                 tmp->getproperty,color=color
                 if total(abs(color-bgcolor)) eq 0 then tmp->setproperty,color=[255b,255b,255b]-color
              endif
           endif
           (*self.plotInfo)[onedplot[i]].obj->setproperty,thick=thick
       endfor
       if onedcount ne 0 then begin
          ;reverse drawlegend black and white color if necessary, change item thickness
          self.drawLegend->getproperty,item_color=item_color,item_thick=item_thick,item_obj=item_obj,fill_color=fill_color,show_fill=show_fill,text_color=text_color,outline_color=outline_color
          if total(abs(fill_color+bgcolor-[255b,255b,255b])) eq 0 then fill_color=bgcolor
          if (total(abs(text_color-bgcolor)) eq 0) and ((~show_fill) or (total(abs(fill_color-bgcolor)) eq 0)) then text_color=[255b,255b,255b]-bgcolor
          if (total(abs(outline_color-bgcolor)) eq 0) and ((~show_fill) or (total(abs(fill_color-bgcolor)) eq 0)) then outline_color=[255b,255b,255b]-bgcolor
          for i=0,n_elements(item_obj)-1 do begin
              if (total(abs(item_color[*,i]-bgcolor)) eq 0) and (~show_fill) then item_color[*,i]=[255b,255b,255b]-bgcolor $
              else if (total(abs(item_color[*,i]-fill_color)) eq 0) and (show_fill) then item_color[*,i]=[255b,255b,255b]-fill_color
              if obj_valid(item_obj[i]) then begin
                 item_obj[i]->getproperty,thick=thick  ;use symbol thickness in the legend
                 item_thick[i] = thick
              endif
          endfor
          self.ltit->getproperty,color=color
          if (total(abs(color-bgcolor)) eq 0) and ((~show_fill) or (total(abs(fill_color-bgcolor)) eq 0)) then self.ltit->setproperty,color=[255b,255b,255b]-color
          ;update legend position   
          new_yconv = [self.legdpos[1],1]   
          new_xconv = [self.legdpos[0]+cshift,1]
          self.drawLegend->setproperty,item_color=item_color,item_thick=item_thick,text_color=text_color,outline_color=outline_color,$
               ycoord_conv=new_yconv,xcoord_conv=new_xconv,outline_thick=otlthick,fill_color=fill_color
          self.drawLegend->settextrendermethod,render_method=self.render_method
       endif 
       for i=0,polycount-1 do begin
           (*self.plotInfo)[polyplot[i]].obj->getproperty,color=color
           if total(abs(color-bgcolor)) eq 0 then begin
              (*self.plotInfo)[polyplot[i]].obj->setproperty,color=[255b,255b,255b]-color
              (*self.plotInfo)[polyplot[i]].color = [255b,255b,255b]-color
           endif
       endfor
       if keyword_set(save) then tmpcolor=[255b,255b,255b]*self.misscol else tmpcolor=bgcolor
       if twodcount gt 0 then begin
          for i=0,twodcount-1 do begin
              if (~obj_isa((*self.plotInfo)[twodplot[i]].obj,'IDLgrImage')) then begin
                 (*self.plotInfo)[twodplot[i]].obj->getproperty,color=color
                 if total(abs(color-bgcolor)) eq 0 then begin
                    (*self.plotInfo)[twodplot[i]].obj->setproperty,color=[255b,255b,255b]-bgcolor
                    (*self.plotInfo)[twodplot[i]].color = [255b,255b,255b]-bgcolor
                 endif
              endif
              if obj_isa((*self.plotInfo)[twodplot[i]].obj,'IDLgrVolume') then (*self.plotInfo)[twodplot[i]].obj->getproperty,uvalue=drawPal $
              else (*self.plotInfo)[twodplot[i]].obj->getproperty,palette=drawPal
              drawPal->getproperty,red_values=r,green_values=g,blue_values=b
              r[0]=tmpcolor[0] & g[0]=tmpcolor[1] & b[0]=tmpcolor[2]
              drawPal->setproperty,red_values=temporary(r),green_values=temporary(g),blue_values=temporary(b)
          endfor
       endif
    endif
end

pro dm_plot::showview
    if obj_valid(self.zoombox) then begin
       self.drawWin->draw,self.drawView,/create_instance
       self.drawWin->draw,self.tranView,/draw_instance
    endif else self.drawWin->draw,self.drawView
end

;slice volume object
;parameters:
;   type:        0:x-slice 1:y-slice 2:z-slice -1:disable
;keyword:
;   askinterval: if set, ask for the animation interval
;   noquestion:  if set, no dialog window for the slice thickness
;   nototop:     if set, the slice plot window will not be push to the top
;   ind_step:    integer, used for saving animation, the returned value is |ind_step|++ or -(|ind_step|--) depending on the animation direction 
;   n_step:      returns the number of steps of animation
pro dm_plot::slice,type,askinterval=askinterval,noquestion=noquestion,nototop=nototop,ind_step=ind_step,n_step=n_step
    if n_elements(*self.plotInfo) eq 0 then return
    if (type lt -1) or (type gt 2) then return
    if type eq -1 then begin
       self.sliceBox->setproperty,/hide
       self.slicetype = -1
       if obj_valid(self.csplotobj) then obj_destroy,self.csplotobj
       self->clearmotionevent,/no_kbrd
       self->set_cursortxt,''
       return
    endif else begin
       self->getproperty,xran=xran,yran=yran,zran=zran,dimension=dim
       xys = fltarr(8,3)
       ind = [[1,1,0,0,1,1,0,0],[0,1,1,0,0,1,1,0],[1,1,1,1,0,0,0,0]]
       con = [4,3,0,1,2,4,6,7,4,5,4,1,5,4,0,4,2,6,5,1,4,7,6,2,3,4,0,3,7,4]
       xys[*,0] = xran[ind[*,0]]
       xys[*,1] = yran[ind[*,1]]
       xys[*,2] = zran[ind[*,2]]
       ran  = reform(([[[self.xran]],[[self.yran]],[[self.zran]]])[*,*,type])
       ran1 = reform(([[xran],[yran],[zran]])[*,type])
       log  = ([self.xlog,self.ylog,self.zlog])[type]
       if ~keyword_set(noquestion) then begin
          info = ['Use 0 thickness to go through the intrinsic steps.','Decimal place is optional, for display only.']
          self->getaxislabel,type,label=label
          if obj_valid(self.select) then begin
             index = where((*self.plotInfo).obj eq self.select,count)
             if count ne 0 then begin
                tmpmax = max(*(([(*self.plotInfo)[index[0]].xPtr,(*self.plotInfo)[index[0]].yPtr,(*self.plotInfo)[index[0]].zPtr])[type]),min=tmpmin)
                info = [info,label+' range=['+dm_to_string(tmpmin)+', '+dm_to_string(tmpmax)+']']
                if obj_valid(self.csplotobj) then info = ['Clear the thickness value to remove the slice.',info] 
             endif
          endif 
          if obj_valid(self.csplotobj) then self.csplotobj->getproperty,shading=shading 
          if n_elements(shading) eq 0 then shading=0
          if keyword_set(askinterval) then begin
             name = [label+' thickness:','shading:','animation interval:','decimal place:']
             info = [info,'The interval is in seconds.','Press Esc button to stop the animation.']
             default = [self.sliceinfo,shading,self.default[11],self.cs_resl[3+type]]
             is_droplist = [0,1,0,0]
          endif else begin
             name = [label+' thickness:','shading:','decimal place:']
             default = [self.sliceinfo,shading,self.cs_resl[3+type]]
             is_droplist = [0,1,0]
          endelse
          answer = dm_dialog_input(name,default=default,/float,cancel=cancel,info=info,dialog_parent=self.tlb,is_droplist=is_droplist,droplist_content=ptr_new(['Flat','Gouraud']),/align_center,/return_number,xsize=65)
          if keyword_set(cancel) then return
          if finite(answer[0],/nan) then begin
             self->slice,-1
             return
          endif 
          self.sliceinfo = abs(answer[0])
          shading = answer[1]
          if keyword_set(askinterval) then begin
             if finite(answer[2]) then begin
                if answer[2] gt 0 then self.default[11] = answer[2]
             endif
          endif  
          if finite(answer[2+keyword_set(askinterval)]) then begin
            if round(answer[2+keyword_set(askinterval)]) eq answer[2+keyword_set(askinterval)] then self.cs_resl[3+type] = answer[2+keyword_set(askinterval)]
          endif
          if (~self.animation[0]) and (~self.animation[3]) then begin
             self->set_cursortxt,'Drag the slice '+(['box','plane'])[self.sliceinfo eq 0]+' or use arrow keys to move it.',/nodraw
             self.animation[3] = 1b
          endif
       endif else begin
          self.sliceBox->getproperty,data=data
          tmpmax = max(data[type,*],min=tmpmin)
          xy0 = (tmpmax+tmpmin)/2.
          if xy0 gt ran1[1] or xy0 lt ran1[0] then xy0 = !valuse.f_nan
       endelse
       if n_elements(xy0) eq 0 then xy0 = !values.f_nan
       if finite(xy0,/nan) then begin
          indvol = where((*self.plotInfo)[*].type eq 4,nvol)
          if nvol eq 0 then return
          dat = *(([(*self.plotInfo)[indvol].xPtr,(*self.plotInfo)[indvol].yPtr,(*self.plotInfo)[indvol].zPtr])[type])
          if log then dat = alog10(dat)
          xy0 = mean(ran1)
          tmp = min(abs(dat-xy0),i_min)
          xy0 = dat[i_min]
       endif
       if n_elements(ind_step) ne 0 then begin
          if self.sliceinfo eq 0 then begin
             index = where((*self.plotInfo)[*].type eq 4,count)
             if type eq 0 then begin
                uniqv = *(*self.plotInfo)[index[0]].xPtr
                for i=1,count-1 do uniqv = [uniqv,*(*self.plotInfo)[index[i]].xPtr]
             endif else if type eq 1 then begin
                uniqv = *(*self.plotInfo)[index[0]].yPtr
                for i=1,count-1 do uniqv = [uniqv,*(*self.plotInfo)[index[i]].yPtr]
             endif else begin
                uniqv = *(*self.plotInfo)[index[0]].zPtr
                for i=1,count-1 do uniqv = [uniqv,*(*self.plotInfo)[index[i]].zPtr]
             endelse
             if log then index = where(uniqv ge 10.0^ran1[0] and uniqv le 10.0^ran1[1],count) $
             else index = where(uniqv ge ran1[0] and uniqv le ran1[1],count)
             if count ne 0 then uniqv = uniqv[index]
             uniqv = uniqv[uniq(uniqv,sort(uniqv))] & n_step = n_elements(uniqv)
             if self.animdir then xy0 = uniqv[n_step-1-abs(ind_step)] else xy0 = uniqv[abs(ind_step)]
          endif else begin
             if log then tmpran = 10.0^ran1 else tmpran = ran1
             n_step = fix((tmpran[1]-tmpran[0])/self.sliceinfo+0.5)
             if self.animdir then xy0 = tmpran[1]-(abs(ind_step)+0.5)*self.sliceinfo else xy0 = tmpran[0]+(abs(ind_step)+0.5)*self.sliceinfo
          endelse
          if log then xy0 = alog10(xy0)
          ind_step = ind_step+1
          if ind_step eq n_step then ind_step = -(n_step-2) ;reverse direction
       endif
       if log then begin
          sliceran = 10.0^xy0+[-0.5,0.5]*self.sliceinfo
          xys[*,type] = 10.0^xy0+(ind[*,type]-0.5)*self.sliceinfo
          xys[*,type] = alog10((1e-20)>(xys[*,type]))
       endif else begin
          sliceran = xy0+[-0.5,0.5]*self.sliceinfo
          xys[*,type] = xy0+(ind[*,type]-0.5)*self.sliceinfo
       endelse   
       xys[*,type] = (ran1[0])>(xys[*,type])<(ran1[1])
       sliceran = (ran[0,log])>(sliceran)<(ran[1,log])
       self.sliceBox->setproperty,data=transpose(xys),polygons=con,vert_color=bytarr(3,8),hide=0
       self.slicetype = type
    endelse
    self->slicedata,sliceran=sliceran,xdat=xdat,ydat=ydat,zdat=zdat,zerr=zerr,title=title,xtit=xtit,ytit=ytit,ztit=ztit,coltable=coltable,iran=iran,ilog=ilog,xinfo=xinfo,yinfo=yinfo
    self->setsliceboxcolor,self->getpalette(/currentcoltable),/draw
    if ~obj_valid(self.csplotobj) then begin
       if self.idl_version ge 5.6 then scr_size = get_screen_size() else device,get_screen_size=scr_size
       if dim[0] eq scr_size[0] then dim = self.default[4:5]
       self.csplotobj = obj_new('dm_plot',xdat,ydat,zdat,zerr=zerr,title=title,xtit=xtit,ytit=ytit,itit=ztit,parentobj=self,/nokeepcurrent,/usepolygon,coltable=coltable,iran=iran,ilog=ilog,$
            background=(['black','white'])[self.bgcol],wtitle='Slice',xsize=dim[0],ysize=dim[1],shading=shading,vt_col=self.vt_col,render_method=self.render_method,xinfo=xinfo,yinfo=yinfo) 
       self->aligncsplot   ;align plot windows
       selftotop = 1
    endif else begin
       if n_elements(xdat) eq 0 then self.csplotobj->erase,/keepaxes,title=title,nototop=nototop $
       else self.csplotobj->setproperty,xdat=xdat,ydat=ydat,zdat=zdat,zerr=zerr,title=title,xtit=xtit,ytit=ytit,itit=ztit,/usepolygon,coltable=coltable,bgcolor=self.bgcol,iran=iran,$
           vt_col=self.vt_col,wtitle='Slice',shading=shading,nototop=nototop,xinfo=xinfo,yinfo=yinfo
    endelse
    self.csplotobj->draw,nototop=nototop
    self->setproperty,/keyboard_events,nototop=(keyword_set(nototop) and ~keyword_set(selftotop))
end

;get slice data for volume plots
;input keywords:
;    sliceran: slice range, if sliceran[0]=sliceran[1] then choose the closest single slice of the data
;output keywords:
;    xdat,ydat,zdat,zerr,title,xtit,ytit,coltable,iran,ilog
pro dm_plot::slicedata,sliceran=sliceran,xdat=xdat,ydat=ydat,zdat=zdat,zerr=zerr,title=title,xinfo=xinfo,xtit=xtit,yinfo=yinfo,ytit=ytit,ztit=ztit,coltable=coltable,iran=iran,ilog=ilog
    if n_elements(*self.plotInfo) eq 0 then return 
    indvol = where((*self.plotInfo)[*].type eq 4,nvol) 
    if nvol eq 0 then return 
    if self.slicetype lt 0 or self.slicetype gt 2 then return
    coltable = (*self.plotInfo)[indvol[0]].coltable
    self->getproperty,xtit=xtit,ytit=ytit,ztit=ztit,itit=itit,iran=iran,ilog=ilog,xinfo=xinfo0,yinfo=yinfo0,zinfo=zinfo0
    if obj_valid(self.csplotobj) then self.csplotobj->getproperty,iran=iran,ilog=ilog,coltable=coltable
    if ilog then iran = 10.0^iran
    ran0 = [self.xran[0,self.xlog],self.yran[0,self.ylog],self.zran[0,self.zlog]]
    ran1 = [self.xran[1,self.xlog],self.yran[1,self.ylog],self.zran[1,self.zlog]]
    self->getaxislabel,self.slicetype,label=title0,unit=unit
    if n_elements(sliceran) eq 2 then begin
       if finite(sliceran[0],/nan) then sliceran[0] = ran0[self.slicetype]
       if finite(sliceran[1],/nan) then sliceran[1] = ran1[self.slicetype]
       idx   = ((self.slicetype+1) mod 3)<((self.slicetype+2) mod 3)
       idy   = ((self.slicetype+1) mod 3)>((self.slicetype+2) mod 3)
       xtit  = ([xtit,ytit,ztit])[idx] & ytit = ([xtit,ytit,ztit])[idy] & ztit = itit
       tinfo = ([xinfo0,yinfo0,zinfo0])[self.slicetype] & ishkl_t = (total(abs(tinfo.vaxis)) ne 0)
       xinfo = ([xinfo0,yinfo0,zinfo0])[idx] & ishkl_x = (total(abs(xinfo.vaxis)) ne 0)
       yinfo = ([xinfo0,yinfo0,zinfo0])[idy] & ishkl_y = (total(abs(yinfo.vaxis)) ne 0)
       for i=0,nvol-1 do begin
           okierr = ptr_valid((*self.plotInfo)[indvol[i]].diPtr)
           if okierr then begin
              if n_elements(*(*self.plotInfo)[indvol[i]].diPtr) eq 0 then okierr = 0b
           endif
           idat = float((*(*self.plotInfo)[indvol[i]].iPtr))
           if okierr then ierr = float((*(*self.plotInfo)[indvol[i]].diPtr))
           ;apply clipping 
           countx = 0 & county = 0 & countz = 0
           case self.volclip of
                -1: 
                 0: begin
                    indx = where(*(*self.plotInfo)[indvol[i]].xPtr le mean(self.xran[*,self.xlog],/nan),countx)
                    indy = where(*(*self.plotInfo)[indvol[i]].yPtr le mean(self.yran[*,self.ylog],/nan),county)  
                    indz = where(*(*self.plotInfo)[indvol[i]].zPtr ge mean(self.zran[*,self.zlog],/nan),countz)  
                    end
                 1: begin
                    indx = where(*(*self.plotInfo)[indvol[i]].xPtr le mean(self.xran[*,self.xlog],/nan),countx)
                    indz = where(*(*self.plotInfo)[indvol[i]].zPtr ge mean(self.zran[*,self.zlog],/nan),countz)
                    county = n_elements(*(*self.plotInfo)[indvol[i]].yPtr) & indy = lindgen(county)
                    end   
                 2: begin
                    indx = where(*(*self.plotInfo)[indvol[i]].xPtr le mean(self.xran[*,self.xlog],/nan),countx)
                    if countx gt 0 then begin
                       idat[indx,*,*] = !values.f_nan
                       if okierr then ierr[indx,*,*] = !values.f_nan
                    endif
                    end     
                 3: begin
                    indx = where(*(*self.plotInfo)[indvol[i]].xPtr ge mean(self.xran[*,self.xlog],/nan),countx)
                    if countx gt 0 then begin
                       idat[indx,*,*] = !values.f_nan
                       if okierr then ierr[indx,*,*] = !values.f_nan
                    endif
                    end       
                 4: begin
                    indy = where(*(*self.plotInfo)[indvol[i]].yPtr le mean(self.yran[*,self.ylog],/nan),county)
                    if county gt 0 then begin
                       idat[*,indy,*] = !values.f_nan
                       if okierr then ierr[*,indy,*] = !values.f_nan
                    endif
                    end   
                 5: begin
                    indy = where(*(*self.plotInfo)[indvol[i]].yPtr ge mean(self.yran[*,self.ylog],/nan),county)
                    if county gt 0 then begin
                       idat[*,indy,*] = !values.f_nan
                       if okierr then ierr[*,indy,*] = !values.f_nan
                    endif
                    end 
                 6: begin
                    indz = where(*(*self.plotInfo)[indvol[i]].zPtr le mean(self.zran[*,self.zlog],/nan),countz)
                    if countz gt 0 then begin
                       idat[*,*,indz] = !values.f_nan
                       if okierr then ierr[*,*,indz] = !values.f_nan
                    endif
                    end   
                 7: begin
                    indz = where(*(*self.plotInfo)[indvol[i]].zPtr ge mean(self.zran[*,self.zlog],/nan),countz)
                    if countz gt 0 then begin
                       idat[*,*,indz] = !values.f_nan
                       if okierr then ierr[*,*,indz] = !values.f_nan
                    endif
                    end                                                 
              else: 
           endcase
           if (countx gt 0) and (county gt 0) and (countz gt 0) then begin
              for ix = 0L,countx-1 do begin
                  for iy = 0L,county-1 do begin
                      idat[indx[ix],indy[iy],indz] = !values.f_nan
                      if okierr then ierr[indx[ix],indy[iy],indz] = !values.f_nan
                  endfor
              endfor
           endif 
           tmp0 = *(([(*self.plotInfo)[indvol[i]].xPtr,(*self.plotInfo)[indvol[i]].yPtr,(*self.plotInfo)[indvol[i]].zPtr])[self.slicetype])
           if sliceran[0] eq sliceran[1] then begin
              if sliceran[0] le max(tmp0) then begin
                 tmp1 = tmp0 & ntmp = n_elements(tmp0)
                 if ntmp gt 1 then tmp1[1:(ntmp-1)] = (tmp1[1:(ntmp-1)]+tmp1[0:(ntmp-2)])/2.
                 ind = where(tmp1 le sliceran[0],count)
                 if count gt 0 then begin
                    ind   = ind[count-1]
                    count = 1
                    tmpsv = tmp0[ind[0]]
                 endif
              endif else count = 0
           endif else begin
              ind = where((tmp0 le sliceran[1]) and (tmp0 ge sliceran[0]),count)
           endelse
           if count ne 0 then begin
              tmpx = *(([(*self.plotInfo)[indvol[i]].xPtr,(*self.plotInfo)[indvol[i]].yPtr,(*self.plotInfo)[indvol[i]].zPtr])[idx])
              tmpy = *(([(*self.plotInfo)[indvol[i]].xPtr,(*self.plotInfo)[indvol[i]].yPtr,(*self.plotInfo)[indvol[i]].zPtr])[idy])
              ntmpx = n_elements(tmpx) & ntmpy = n_elements(tmpy)
              if count eq 1 then begin
                 case self.slicetype of
                      0: tmpz = reform(idat[ind,*,*])
                      1: tmpz = reform(idat[*,ind,*])
                      2: tmpz = reform(idat[*,*,ind])
                 endcase
                 if okierr then begin
                    case self.slicetype of
                         0: tmpe = reform(ierr[ind,*,*])
                         1: tmpe = reform(ierr[*,ind,*])
                         2: tmpe = reform(ierr[*,*,ind])
                    endcase
                 endif
              endif else begin
                 if self.idl_version ge 8.0 then begin ;mean(dimension=dimension) is implemented in IDL 8.0
                    case self.slicetype of
                         0: tmpz = mean(idat[ind,*,*],dim=1,/nan)
                         1: tmpz = mean(idat[*,ind,*],dim=2,/nan)
                         2: tmpz = mean(idat[*,*,ind],dim=3,/nan)
                    endcase
                 endif else begin
                    case self.slicetype of
                         0: tmpz = total(idat[ind,*,*],1,/nan)/(1.0>(total(finite(idat[ind,*,*]),1)))
                         1: tmpz = total(idat[*,ind,*],2,/nan)/(1.0>(total(finite(idat[*,ind,*]),2)))
                         2: tmpz = total(idat[*,*,ind],3,/nan)/(1.0>(total(finite(idat[*,*,ind]),3)))
                    endcase
                 endelse
                 if okierr then begin
                    case self.slicetype of
                         0: begin
                            tmpe = sqrt(total((ierr[ind,*,*])^2,1,/nan))
                            nerr = total(finite(ierr[ind,*,*]),1)
                            end
                         1: begin
                            tmpe = sqrt(total((ierr[*,ind,*])^2,2,/nan))
                            nerr = total(finite(ierr[*,ind,*]),2)
                            end
                         2: begin
                            tmpe = sqrt(total((ierr[*,*,ind])^2,3,/nan))
                            nerr = total(finite(ierr[*,*,ind]),3)
                            end
                    endcase
                    nerr = 1>(nerr)
                    tmpe = tmpe/nerr
                 endif
              endelse
              if (i eq nvol-1) and (n_elements(xdat) eq 0) then begin
                 xdat = temporary(tmpx)
                 ydat = temporary(tmpy)
                 zdat = temporary(tmpz)
                 if n_elements(tmpe) ne 0 then zerr = temporary(tmpe)
              endif else begin
                 if n_elements(uniqx) eq 0 then begin
                    uniqx = tmpx & uniqy = tmpy
                 endif else begin
                    uniqx = [uniqx,tmpx] & uniqy = [uniqy,tmpy] 
                 endelse
                 tmpx = tmpx#(fltarr(ntmpy)+1)
                 tmpy = (fltarr(ntmpx)+1)#tmpy
                 if n_elements(xdat) eq 0 then begin
                    xdat = reform(temporary(tmpx),ntmpx*ntmpy,/overwrite)
                    ydat = reform(temporary(tmpy),ntmpx*ntmpy,/overwrite)
                    zdat = reform(temporary(tmpz),ntmpx*ntmpy,/overwrite)
                    if n_elements(tmpe) ne 0 then zerr = reform(temporary(tmpe),ntmpx*ntmpy,/overwrite)
                 endif else begin
                    xdat = [xdat,reform(temporary(tmpx),ntmpx*ntmpy,/overwrite)]
                    ydat = [ydat,reform(temporary(tmpy),ntmpx*ntmpy,/overwrite)]
                    zdat = [zdat,reform(temporary(tmpz),ntmpx*ntmpy,/overwrite)]
                    if (n_elements(tmpe) ne 0) and (n_elements(zerr) ne 0) then zerr = [zerr,reform(temporary(tmpe),ntmpx*ntmpy,/overwrite)]
                 endelse
              endelse
           endif
           idat = 0 & ierr = 0
       endfor
       if sliceran[0] eq sliceran[1] then begin
          if count eq 0 then tmpsv = float(sliceran[0])
          res   = finite(self.cs_resl[3+self.slicetype])?self.cs_resl[3+self.slicetype]:((abs(tmpsv) ge 1)?3:(1>(ceil(3-alog10(abs(tmpsv)+1e-7)))))
          title = title0+'='+dm_to_string(tmpsv,res=res)   
       endif else begin
          res   = finite(self.cs_resl[3+self.slicetype])?self.cs_resl[3+self.slicetype]:(1>(ceil(2-alog10(abs(sliceran[1]-sliceran[0])+1e-7))))
          title = title0+'=['+dm_to_string(sliceran[0],res=res)+', '+dm_to_string(sliceran[1],res=res)+']'
          if abs(sliceran[1]-sliceran[0]) le self.qoffsetthreshold then tmpsv = mean(sliceran)
       endelse
       if strlen(unit) ne 0 then title = title+' '+unit
       if ishkl_t and (ishkl_x or ishkl_y) and (n_elements(tmpsv) ne 0) then begin
          if ishkl_x then xtit = dm_set_viewlabel(xinfo.label,xinfo.vaxis,xinfo.offset+dm_to_number(dm_to_string(tmpsv,res=res))*tinfo.vaxis,xinfo.unit)
          if ishkl_y then ytit = dm_set_viewlabel(yinfo.label,yinfo.vaxis,yinfo.offset+dm_to_number(dm_to_string(tmpsv,res=res))*tinfo.vaxis,yinfo.unit)
       endif
    endif
    if n_elements(xdat) eq 0 then return
    ;rebinning
    if n_elements(uniqx) ne 0 then begin
       uniqx = uniqx[uniq(uniqx,sort(uniqx))]
       uniqy = uniqy[uniq(uniqy,sort(uniqy))]
       dm_stepgrid_bin,1,1,xdat,ydat,zdat,zerr=zerr,/checkfinite,uniq_xval=uniqx,uniq_yval=uniqy,group_leader=self.tlb
    endif
    ;apply xrange and yrange
    nx   = n_elements(xdat) & ny = n_elements(ydat)
    indx = where((xdat ge ran0[idx]) and (xdat le ran1[idx]),countx)
    indy = where((ydat ge ran0[idy]) and (ydat le ran1[idy]),county)
    if (countx eq 0) or (county eq 0) then begin
       tmp = temporary(xdat) & return
    endif
    okzerr = (n_elements(zerr) eq n_elements(zdat))
    if countx ne nx then begin
       if okzerr then zerr = zerr[indx,*]
       zdat = zdat[indx,*]
       xdat = xdat[indx]
    endif
    if county ne ny then begin
       if okzerr then zerr = zerr[*,indy]
       zdat = zdat[*,indy]
       ydat = ydat[indy]
    endif
    if n_elements(xdat) le 1 or n_elements(ydat) le 1 then tmp = temporary(xdat)  ;not a proper 2d data
end

;returns the data step for volume slice by keyboard control. key: 5-left 6-right 7-up 8-down
function dm_plot::slicestep,range,key,center=center
    positive = (key eq 6) or (key eq 7)
    if (self.slicetype eq 1) and (key lt 7) then positive = 1-positive  ;switch left and right for y-axis
    if n_elements(*self.plotInfo) eq 0 then return,0.0
    indvol = where((*self.plotInfo)[*].type eq 4,nvol)
    if nvol eq 0 then return,0.0
    if (self.slicetype lt 0) or (self.slicetype gt 2) then return,0.0
    v_max = max(range,/nan,min=v_min)
    n_max = max(range+(self.sliceinfo)*([-1.0,1.0])[positive],/nan,min=n_min)
    center = mean(range)+(self.sliceinfo)*([-1.0,1.0])[positive]
    for i=0,nvol-1 do begin
        dat = float(*(([(*self.plotInfo)[indvol[i]].xPtr,(*self.plotInfo)[indvol[i]].yPtr,(*self.plotInfo)[indvol[i]].zPtr])[self.slicetype]))
        i_curr = where((dat le v_max) and (dat ge v_min),count)
        if count eq 0 then begin ;current position is an empty box 
           if positive then i_next = (where(dat gt v_max,count))[0] else i_next = (where(dat lt v_min,count))[-1]
           if count eq 0 then step = 0.0 else step = dat[i_next]-mean(range)
           center = dat[i_next]
        endif else begin
           i_curr = i_curr[0-positive]
           i_next = (where((dat le n_max) and (dat ge n_min),count))[positive-1]
           if (i_next ne i_curr) and (count ne 0) then step = self.sliceinfo else begin
              if positive then i_next = (i_curr+1)<(n_elements(dat)-1) else i_next = 0>(i_curr-1)
              step = dat[i_next]-dat[i_curr]
              center = dat[i_next]
           endelse
        endelse
        if step ne 0 then break
    endfor
    return,(abs(step)>(self.sliceinfo))*([-1.0,1.0])[positive]
end

;special treatment of strings:
; 1. replace \AA with anstrom string('c5'xb)
; 2. replace \HW with !s!8h!r!a!6_!n!e !n!9w
; 3. replace some common LaTex Greek letters and symbols
;keywords:
;    reverse:   if set, return the latex strings, otherwise return the IDL format strings 
;    fontname:  used to determine whether the font is a symbol font or a hershey vector font
function dm_plot::textadjust,text,reverse=reverse,fontname=fontname
    ntext = n_elements(text)
    if ntext eq 0 then return,''
    if n_elements(fontname) eq 0 then fontnm = 'helvetica' else fontnm = strlowcase(fontname[0])
    vecfont = stregex(fontnm,'hershey',/boolean,/fold_case)
    djvfont = stregex(fontnm,'dejavu',/boolean,/fold_case)
    tmp0 = text  ;use as duplicate
    if vecfont then begin ;hershey vector font
       if (strpos(fontnm,'4') ne -1) or (strpos(fontnm,'7') ne -1) then header1 = '!6' else header1 = '!X' 
       if (strpos(fontnm,'3') ne -1) or (strpos(fontnm,'4') ne -1) or (strpos(fontnm,'12') ne -1) then header2 = '!4' else header2 = '!7'
       olds = ['\AA','\HW','\hbar'] 
       news = [header1+'!sA!r!u!9 % !n','!s!8h!r!a!6_!n!e !n'+header2+'x','!s!8h!r!a!6_!n!e !n']
       if (strpos(fontnm,'3') ne -1) or (strpos(fontnm,'4') ne -1) then news[0] = '!3'+string('c5'XB)
       olds = [olds,'\'+['pm','leq','geq','times','div','neq','perp','sim','equiv','infty','angle','deg','checkmark','oint','int','Int','subset','supset','in','partial','bigcap','bigcup']] 
       news = [news,'!9'+['+','l','b','X','/','=','x','A',':','$','a','%','C','J','i','I','0','2','e','d','3','1']]
       olds = [olds,'\'+['alpha','beta','chi','delta','epsilon','phi','gamma','eta','iota','varphi','kappa','lambda','mu','nu','pi','theta','rho','sigma','tau','upsilon','omega']]
       news = [news,header2+['a','b','v','d','e','u','c','g','i'],'!9P',header2+['j','k','l','m','p','h','q','r','s','t','x']]
       olds = [olds,'\'+['xi','psi','zeta','Gamma','Delta','Theta','Pi','Sigma','Phi','Psi','Omega','Lambda','Xi']]
       news = [news,header2+['n','w','f','C','D','H','P','R','U','W','X','K','N']]
       olds = [olds,'\'+[['left','down','right','up']+'arrow','female','male','boxtimes','boxcheck','box','propto']]
       news = [news,'!9'+['4','5','6','7','f','m','!sB!rX','!sB!rC','B','?']]
       olds = [olds,'\'+['eacute','Itilde']]
       news = [news,header1+['!se!r!u!9 ` !e !n','!s!e !nI!r!a!9A!n']]
       alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
       olds = [olds,'\vector'+alph]
       news = [news,header1+'!s'+alph+'!r!u!96!n']
       olds = [olds,'\vector'+strupcase(alph)] 
       news = [news,header1+'!s'+strupcase(alph)+'!r!a!96!n']
       olds = [olds,'\backslash'] & news = [news,'\']+'!X'
    endif else begin
       olds = '\'+['AA','HW','hbar','pm','deg','leq','geq','times','div','neq','equiv','approx','infty','copyright','registered']
       news = ['!x'+string('c5'XB),'!z(0127,03c9)','!z('+['0127','00b1','00b0','2264','2265','00d7','00f7','2260','2261','2248','221e','00a9','00ae']+')']
       olds = [olds,'\'+['alpha','beta','chi','delta','epsilon','phi','gamma','eta','iota','varphi','kappa','lambda','mu','nu','pi','theta','rho','sigma','tau','upsilon','varpi','omega']]
       news = [news,'!z('+['03b1','03b2','03c7','03b4','03b5','03d5','03b3','03b7','03b9','03c6','03ba','03bb','03bc','03bd','03c0','03b8','03c1','03c3','03c4','03c5','03d6','03c9']+')']
       olds = [olds,'\'+['xi','psi','zeta','Gamma','Delta','Theta','Pi','Sigma','Phi','Psi','Omega','Lambda','Xi','int',['leftright','left','up','right','down']+'arrow']]
       news = [news,'!z('+['03be','03c8','03b6','0393','0394','0398','03a0','03a3','03a6','03a8','03a9','039b','039e','222b','2194','2190','2191','2192','2193']+')']  
       olds = [olds,'\'+['partial','bigcap','onequarter','onehalf','threequarters','eacute','permil','Itilde']]
       news = [news,'!z('+['2202','2229','00bc','00bd','00be','00e9','2030','0128']+')'] 
       alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
       olds = [olds,'\vector'+[alph,strupcase(alph)]]
       news = [news,'!s'+alph+'!r!u!z(2192)!n','!s'+strupcase(alph)+'!r!a!z(2192)!n']
       olds = [olds,'\'+['yen','pound','euro','male','female']]
       news = [news,'!z('+['00a5','00a3','20ac','2642','2640']+')']
       olds = [olds,'\'+['bar']]
       news = [news,'!9!s'+string(96b)+'!r']
       if (self.idl_version ge 8.2) or djvfont then begin
          if djvfont then i_l = '!z(' else begin
             i_l = '!10!z('
             if (self.idl_version ge 8.6) then begin
                if stregex(fontnm,'italic',/boolean,/fold_case) then i_l = '!18!z('
                if stregex(fontnm,'bold',/boolean,/fold_case) then i_l = '!17!z('
                if stregex(fontnm,'italic',/boolean,/fold_case) and stregex(fontnm,'bold',/boolean,/fold_case) then i_l = '!19!z('
             endif
          endelse
          olds = [olds,'\'+['sim','perp','cong','propto','angle','supseteq','supset','nsubset','nsupset','subseteq','subset',['Leftright','Left','Up','Right','Down']+'arrow']]
          news = [news,i_l+['223c','22a5','2245','221d','2220','2287','2283','2284','2285','2286','2282','21d4','21d0','21d1','21d2','21d3']+')']
          olds = [olds,'\'+['notin','in','bigcup','gg','ll','oint','checkmark','boxcheck','boxtimes','box']]
          news = [news,i_l+['2209','2208','222a','226b','226a','222e','2713','2611','2612','2610']+')']
          olds = [olds,'\circled'+['one','two','three','four','five','six','seven','eight','nine','ten']]
          news = [news,i_l+'246'+['0','1','2','3','4','5','6','7','8','9']+')']
          olds = [olds,'\'+['one'+['seventh','ninth','tenth','third','sixth','eighth'],'twothirds','onefifth',['two','three','four']+'fifths','fivesixths',['three','five','seven']+'eighths']]
          news = [news,i_l+'215'+['0','1','2','3','9','b','4','5','6','7','8','a','c','d','e']+')']
       endif
       olds = [olds,'\backslash'] & news = [news,'\']+'!X'
   endelse
    if keyword_set(reverse) then begin
       tmp  = news 
       news = olds
       olds = temporary(tmp)
    endif
    nkey = n_elements(olds)
    for i=0L,ntext-1L do begin
        for j=0L,nkey-1L do begin
            tmp1 = strpos(tmp0[i],olds[j]) & len = strlen(olds[j])
            while(tmp1 ne -1) do begin
                 tmp0[i] = strmid(tmp0[i],0,tmp1)+news[j]+strmid(tmp0[i],tmp1+len,strlen(tmp0[i])-tmp1-len)
                 tmp1 = strpos(tmp0[i],olds[j])
            endwhile
        endfor
    endfor
    return, (ntext eq 1)?tmp0[0]:tmp0
end

;check if it needs to use triangle as text rendering method due to Windows 10 fall creator update
;return 0 for texture (preferred), 1 for triangle
function dm_plot::textrendermethod
    if !version.os_family eq 'Windows' then begin ;text rendering issue in windows 10 fall creator update
       spawn,'ver',result,/hide
       for i=0,n_elements(result)-1 do begin
           tmp = stregex(result[i],'Version +[0-9]+\.[0-9]+\.([0-9]+)',/subexp,/extract,/fold_case)
           if strlen(tmp[1]) gt 0 then begin
              if dm_to_number(tmp[1]) ge 16299 then begin   ;fall creator update and later when problem occurs
                 ofont  = obj_new('IDLgrFont','Helvetica',size=34)
                 otext  = obj_new('IDLgrText','test',recompute_dimensions=0,/enable,/onglass,font=ofont,render_method=0,color=[0,0,0])
                 oview  = obj_new('IDLgrView',color=[255,255,255],viewplane_rect=[0,0,2,2],projection=2)
                 ogroup = obj_new('IDLgrModel')
                 oview->add,ogroup
                 ogroup->add,otext
                 obuffer = obj_new('IDLgrBuffer',dimension=[100,40],color_model=0)
                 obuffer->draw,oView
                 obuffer->getproperty,image_data=image
                 obj_destroy,[ofont,otext,ogroup,oview,obuffer]
                 return,total(abs(image[*,0,0]-[255,255,255])) ne 0
              endif
           endif
       endfor
    endif
    return,0
end

;push the plot window on top of other applications
pro dm_plot::totop
    widget_control,self.tlb,/show,/realize,iconify=0
    widget_control,self.plotWin,/input_focus
end

;update the draw legend
;keywords:
;    draw: if set, show the view
;    newlabel: new labels to replace the visible legned labels, number of labels can be less
pro dm_plot::updatelegend,draw=draw,newlabel=newlabel
    nplot   = n_elements(*self.plotInfo)
    n_new   = n_elements(newlabel)
    keyword = {item_object:[obj_new()],item_name:[''],item_linestyle:[6]}
    if nplot gt 0 then begin
       onedplot = where((*self.plotInfo)[*].type eq 0,onedcount)
       if onedcount gt 0 then begin
          keyw = {item_name:[''],item_linestyle:[6],item_object:[obj_new()]}
          show = where((*self.plotInfo)[onedplot].hide eq 0,count)
          if count gt 0 then begin
             item_name    = ' '+(*self.plotInfo)[onedplot[show]].legend
             item_thick   = (*self.plotInfo)[onedplot[show]].thick
             item_linesty = (*self.plotInfo)[onedplot[show]].linestyle
             item_color   = (*self.plotInfo)[onedplot[show]].color
             item_object  = (*self.plotInfo)[onedplot[show]].obj
             for i=0,count-1 do begin
                 item_object[i]->getproperty,symbol=tmp1,thick=tmp2
                 item_object[i] = tmp1
                 item_thick[i]  = tmp2
             endfor
             if n_new gt 0 then begin
                self.font[5]->getproperty,name=fontname
                n_new = count<n_new
                for i=0,n_new-1 do begin
                    (*self.plotInfo)[onedplot[show[i]]].legend = self->textadjust(newlabel[i],fontname=fontname)
                    item_name[i] = ' '+(*self.plotInfo)[onedplot[show[i]]].legend
                endfor                
             endif
             show = where(strlen(strcompress(item_name,/remove_all)) gt 0,count)
             if count ne 0 then $
                keyword = {item_name:item_name[show],item_type:intarr(count),item_linestyle:item_linesty[show],$
                           item_thick:item_thick[show],item_color:item_color[*,show],item_object:item_object[show]}
          endif
       endif
    endif
    self.drawLegend->setproperty,_extra=keyword
    if keyword_set(draw) then self->showview
end

;mouse events in the plotwin
pro dm_plot::zoom,event
    if obj_valid(self.zoomBox) and (event.type eq 0) and (self.cuttype lt 0) and (self.slicetype lt 0) then return  ;this can happen if the cursor is moved outside the plot window
    self->getproperty,xran=xran,yran=yran,dimension=dim
    if obj_valid(self.zoomBox) then self.zoomBox->getproperty,data=data
    case event.type of
       0:   begin  ;mouse button down
            case event.press of
               1:   begin    ;left button down
                    self.select = obj_new()
                    widget_control,self.plotWin,/draw_motion_events
                    xstart = self.viewplane[0]+(0>(event.x/dim[0])<1)*self.viewplane[2]
                    ystart = self.viewplane[1]+(0>(event.y/dim[1])<1)*self.viewplane[3]
                    tmp = self.drawWin->select(self.drawView,[event.x,event.y])
                    if obj_valid(tmp[0]) then begin
                       if obj_isa(tmp[0],'IDLgrLegend') or (obj_isa(tmp[0],'IDLgrText') and (tmp[0] ne self.cursorpos)) and (tmp[0] ne self.cornertxt) then begin
                          tmp[0]->getproperty,name=name,uvalue=uvalue
                          if name eq 'text' then begin
                             if ~uvalue.normalize then nomove = 1b
                          endif
                          if ~keyword_set(nomove) then begin
                             self.moveLegend = 1b
                             self.select = tmp[0]
                             self.select->getproperty,xcoord_conv=x,ycoord_conv=y
                             self.legdOffset[0:1] = [x[0]-xstart,y[0]-ystart]
                             break
                          endif
                       endif
                    endif
                    if (self.cuttype ge 0) and obj_valid(self.zoomBox) then begin ;moving cutting range zoombox
                        self.moveLegend = 1b 
                    endif else begin
                       ;initialize the zoom box
                       xstart = xran[0]+(0.0>(xstart)<1.0)*(xran[1]-xran[0])
                       ystart = yran[0]+(0.0>(ystart)<1.0)*(yran[1]-yran[0])
                       self.zoomBox = obj_new('IDLgrPolyline',replicate(xstart,5),replicate(ystart,5),replicate(0.2,5),color=self->zoomboxcolor(),xcoord_conv=norm_coord(xran),ycoord_conv=norm_coord(yran))
                       self.tranModel = obj_new('IDLgrModel')
                       self.tranModel->add,self.zoomBox
                       ;take a snap shot of current image
                       self.drawWin->draw,self.drawView,/create_instance
                       self.tranView->add,self.tranModel
                    endelse
                    end
               else:
            endcase
            end
       1:   begin  ;mouse button up
            self->clearmotionevent
            if obj_valid(self.zoomBox) and (self.cuttype lt 0) and (self.slicetype lt 0) then begin
               xran = [min(data[0,[0,1]]),max(data[0,[0,1]])]
               yran = [min(data[1,[1,2]]),max(data[1,[1,2]])]
               obj_destroy,[self.zoomBox,self.tranModel]
               self.drawWin->draw,self.tranView,/draw_instance
               if (xran[1]-xran[0] ne 0) and (yran[1]-yran[0] ne 0) then begin
                  if ptr_valid(self.zoomstack) then *self.zoomstack = [[(*self.zoomstack)],[[self.xran[*,self.xlog],self.yran[*,self.ylog]]]] $
                  else self.zoomstack = ptr_new([self.xran[*,self.xlog],self.yran[*,self.ylog]])
                  self->setproperty,yran=(self.ylog)?(10.0^yran):yran,xran=(self.xlog)?(10.0^xran):xran,/zoom
                  if ~self.tooltip[1] then widget_control,self.plotWin,tooltip = 'Right click or left double click outside the plot to zoom out.'
               endif
            endif
            end
       2:   begin ;mouse motion
            xend = double(self.viewplane[0]+(0>(event.x/dim[0])<1)*self.viewplane[2])
            yend = double(self.viewplane[1]+(0>(event.y/dim[1])<1)*self.viewplane[3])
            if obj_valid(self.zoomBox) and (~obj_valid(self.select)) then begin
               xend = xran[0]+(0.0>(xend)<1.0)*(xran[1]-xran[0])
               yend = yran[0]+(0.0>(yend)<1.0)*(yran[1]-yran[0])
            endif
            if self.moveLegend then begin
               if obj_valid(self.zoomBox) and (~obj_valid(self.select)) then begin  ;moving the cut or slice range zoombox
                  xy0 = [xend,yend] 
                  data = self->cutzoombox(xy0,cutran=cutran,end_reached=end_reached)
                  if keyword_set(end_reached) then break
                  self->cutdata,cutran=cutran,xdat=xdat,ydat=ydat,yerr=yerr,ylog=ylog,xran=xran,yran=yran,title=title,xtit=xtit,ytit=ytit,linestyle=linestyle,color=color
                  if obj_valid(self.csplotobj) then begin
                     self.cursorpos->getproperty,strings=strings
                     if strlen(strings) ne 0 then self->set_cursortxt,''
                     if n_elements(xdat) eq 0 then self.csplotobj->erase,/keepaxes,/nototop,title=title $
                     else self.csplotobj->setproperty,xdat=xdat,ydat=ydat,yerr=yerr,ylog=ylog,xran=xran,yran=yran,title=title,xtit=xtit,ytit=ytit,color=color,psym='circle',linestyle=linestyle,/nototop
                  endif
               endif else if obj_valid(self.select) then begin
                  if ((~obj_isa(self.select,'IDLgrLegend')) and (~obj_isa(self.select,'IDLgrText'))) or (self.select eq self.cursorpos) or (self.select eq self.cornertxt) then break
                  self.select->getproperty,ycoord_conv=old_yconv,xcoord_conv=old_xconv
                  new_yconv = [yend+self.legdOffset[1],1]
                  new_xconv = [xend+self.legdOffset[0],1]
                  if obj_isa(self.select,'IDLgrLegend') then begin
                     self.legdpos[0] = self.legdpos[0]+new_xconv[0]-old_xconv[0]
                     self.legdpos[1] = self.legdpos[1]+new_yconv[0]-old_yconv[0]
                  endif
                  self.select->setproperty,xcoord_conv=new_xconv,ycoord_conv=new_yconv
               endif
            endif else begin
               if (~obj_valid(self.zoomBox)) then break $
               else if self.cuttype ge 0 then break
               data[0,[1,2]] = [xend,xend]
               data[1,[2,3]] = [yend,yend]    
            endelse
            if obj_valid(self.zoomBox) and (~obj_valid(self.select)) then begin
               self.zoomBox->setproperty,data=data
               self.drawWin->draw,self.tranView,/draw_instance
            endif else $
               self->showview
            end
       6:   if event.press and (self.cuttype ge 0) then begin ;keyboard events
            if (event.key lt 5) or (event.key gt 8) then return
            if self.xlog then data[0,*] = 10.0^data[0,*]
            if self.ylog then data[1,*] = 10.0^data[1,*]
            if (self.cuttype eq 2) and (self.cutinfo[2] ne 0) then begin
               tmpymax = max(data[1,*],min=tmpymin)
               ind1 = where(data[1,*] eq tmpymin,count1)
               ind2 = where(data[1,*] eq tmpymax,count2)
               if count1 ge 2 then xy0 = [mean([max(data[0,ind1]),min(data[0,ind1])]),tmpymin] $
               else xy0 = [mean(data[0,ind2],/double),tmpymax]
               ytmp = mean([tmpymax,tmpymin],/double)
               xy0  = [(self.xran[0,0])>(xy0[0]+(ytmp-xy0[1])/self.cutinfo[2])<(self.xran[1,0]),ytmp]
            endif else xy0 = [mean([min(data[0,*]),max(data[0,*])]),mean([min(data[1,*]),max(data[1,*])])]
            self->cutstep,xy0,event.key
            if self.xlog then xy0[0] = alog10(xy0[0])
            if self.ylog then xy0[1] = alog10(xy0[1])
            data = self->cutzoombox(xy0,cutran=cutran,end_reached=end_reached)
            if keyword_set(end_reached) then break
            self->cutdata,cutran=cutran,xdat=xdat,ydat=ydat,yerr=yerr,ylog=ylog,xran=xran,yran=yran,title=title,xtit=xtit,ytit=ytit,linestyle=linestyle,color=color
            if obj_valid(self.csplotobj) then begin
               self.cursorpos->getproperty,strings=strings
               if strlen(strings) ne 0 then self->set_cursortxt,''
               if n_elements(xdat) eq 0 then self.csplotobj->erase,/keepaxes,/nototop,title=title $
               else self.csplotobj->setproperty,xdat=xdat,ydat=ydat,yerr=yerr,ylog=ylog,xran=xran,yran=yran,title=title,xtit=xtit,ytit=ytit,color=color,psym='circle',linestyle=linestyle,/nototop
            endif
            self.zoomBox->setproperty,data=data
            self.drawWin->draw,self.tranView,/draw_instance
            widget_control,event.id,/clear_events  ;avoid overgenerating events when key is held pressed                
            endif
       else:
    endcase
end

;return the complementary of average color if there are green plots, otherwise return green
function dm_plot::zoomboxcolor
    if n_elements(*self.plotInfo) ne 0 then begin
       tmp = where(((*self.plotInfo).color[0] eq 0) and ((*self.plotInfo).color[1] eq 255) and ((*self.plotInfo).color[2] eq 0),cnt)
       if cnt ne 0 then return,255-fix([mean((*self.plotInfo).color[0]),mean((*self.plotInfo).color[1]),mean((*self.plotInfo).color[2])])
    endif
    return,self->getcolor('green')
end

;cleanup, life cycle method
pro dm_plot::Cleanup
    if self.compound then begin
       if widget_info(self.plotWin,/valid_id) then widget_control,self.plotWin,/destroy
    endif else begin
       if widget_info(self.tlb,/valid_id) then widget_control,self.tlb,/destroy
    endelse
    ;destroy all the plot symbols and text objects
    for j=0,1 do begin
        oChildArr = ([self.drawModel,self.drawGroup])[j]->IDL_Container::Get(/ALL, COUNT=nKids)
        for i=0,nKids-1 do begin
            if obj_isa(oChildArr[i],'IDLgrPlot') or obj_isa(oChildArr[i],'IDLgrPolyline') then begin
               oChildArr[i]->getproperty,symbol=tmp1
               if obj_valid(tmp1) then begin
                  tmp1[0]->getproperty,data=tmp2
                  if obj_valid(tmp2) then obj_destroy,tmp2
                  obj_destroy,tmp1
               endif
            endif else if obj_isa(oChildArr[i],'IDLgrText') then begin
               oChildArr[i]->getproperty,font=ofont
               obj_destroy,ofont
            endif
        endfor
    endfor
    if n_elements(*self.plotInfo) ne 0 then begin
       ;destroy the draw palettes
       twodplot = where(((*self.plotInfo)[*].type gt 0) and ((*self.plotInfo)[*].type ne 3),count1)
       for i=0,count1-1 do begin
           if obj_isa((*self.plotInfo)[twodplot[i]].obj,'IDLgrVolume') then (*self.plotInfo)[twodplot[i]].obj->getproperty,uvalue=tmp $
           else (*self.plotInfo)[twodplot[i]].obj->getproperty,palette=tmp
           if obj_valid(tmp) then obj_destroy,tmp
       endfor
       ptr_free,(*self.plotInfo)[*].xPtr,(*self.plotInfo)[*].yPtr,(*self.plotInfo)[*].zPtr,(*self.plotInfo)[*].iPtr,$ 
                (*self.plotInfo)[*].dxPtr,(*self.plotInfo)[*].dyPtr,(*self.plotInfo)[*].dzPtr,(*self.plotInfo)[*].diPtr
    endif
    if ptr_valid(self.ptr_movie) then obj_destroy,(*self.ptr_movie).mov_obj
    ptr_free,self.plotInfo,self.textsize,self.info,self.fname0,self.fname1,self.zoomstack,self.ptr_movie
    obj_destroy,[self.drawViewGp,self.drawView,self.tranView,self.font,self.printer,self.trackBall,self.cbtit,self.xtit,self.ytit,self.ztit,self.ltit,self.title]
end

;initialization, life cycle method
;usage:
;   newplot=obj_new('dm_plot')
;parameters:
;   NONE
;keyword:
;   see the definition for most of the keywords
;   background:    'white' or 'black', the default background color is white
;   compound:      if set, dm_plot behaves like a compound widget, see test_plot_compound for an example
;   contourplot:   if set, nxdat=nydat=nzdat will not be regarded as 3d line, Voronoi triangulation method will be used if usepolygon keyword is set
;   draw_motion_events: if set, allow draw motion event and the events will be passed out
;                  event structure is the same as WIDGET_DRAW event except for xval & yval
;                  {DM_PLOT_MOTION, ID:0L, TOP:0L, HANDLER:0L, TYPE: 0, X:0L, Y:0L,
;                  PRESS:0B, RELEASE:0B, CLICKS:0L, MODIFIERS:0L, CH:0B, KEY:0L, XVAL:0E, YVAL:0E}
;                  xval & yval are the converted x & y values of the current cursor
;   layer:         for layering of plots, 0 is the top level
;   nokeepcurrent: if set, no keep and make current menu
;   noparentevent: if set, will not send parent any events
;   notooltip:     if set, no tooltips for the plot window
;   shading:       0-flat  1-gouraud
;   surfplot:      if set, the 2D data is plotted as a surface plot
;   usepolygon:    if all xdat,ydat,and zdat are present, settting this keyword will use idlgrpolygon to
;                  draw the contour plot
;                  if only xdat and ydat are present, setting this keyword will creat a filled polygon
;fontsize keywords (font name keyword in parenthesis):
;   fsize (font):          an integer used for all font sizes 
;   axisfsize (axisfont):  an integer used for the font size of all axis titles
;   cbarfsize (cbarfont):  an integer used for the font size of the color intensity bar title
;   cursfsize (cursfont):  an integer used for the font size of the cursor position text
;   ctxtfsize (ctxtfont):  an integer used for the font size of the coner text
;   legdfsize (legdfont):  an integer used for the font size of the legend  
;   tickfsize (tickfont):  an integer used for tht font size of all axis tick text
;   titlfsize (titlfont):  an integer used for the font size of the plot title
function dm_plot::Init,xdat,ydat,zdat,idat,xerr=xerr,yerr=yerr,zerr=zerr,ierr=ierr,addarrow=addarrow,arrowangle=arrowangle,arrowlength=arrowlength,axisfsize=axisfsize,axisfont=axisfont,$
    axisthick=axisthick,background=background,cbarfsize=cbarfsize,cbarfont=cbarfont,cbarpos=cbarpos,coldefine=coldefine,coltable=coltable,color=color,compound=compound,contourplot=contourplot,$
    cornertxt=cornertxt,ctxtfsize=ctxtfsize,ctxtfont=ctxtfont,cursfsize=cursfsize,cursfont=cursfont,cutcolor=cutcolor,draw_motion_events=draw_motion_events,extragap=extragap,font=font,fsize=fsize,$
    gamma=gamma,gridthick=gridthick,gridlinestyle=gridlinestyle,gridontop=gridontop,group_leader=group_leader,hideaxes=hideaxes,hideintbar=hideintbar,hidelegend=hidelegend,isolatin1=isolatin1,$
    isotropic=isotropic,iso3dtype=iso3dtype,irange=irange,ilog=ilog,ititle=ititle,interpolate=interpolate,keep=keep,layer=layer,legdcolumns=legdcolumns,legdfsize=legdfsize,legdfont=legdfont,$
    legdgap=legdgap,legdbordergap=legdbordergap,legdglyphwidth=legdglyphwidth,legdoutlinethick=legdoutlinethick,legdpos=legdpos,legdshowfill=legdshowfill,legdshowoutline=legdshowoutline,legend=legend,$
    ltitle=ltitle,linestyle=linestyle,misscol=misscol,nokeepcurrent=nokeepcurrent,noparentevent=noparentevent,notooltip=notooltip,no_copy=no_copy,opacity=opacity,parentobj=parentobj,$
    parenthandler=parenthandler,path=path,psym=psym,qoffsetthreshold=qoffsetthreshold,render_method=render_method,shading=shading,showcursorpos=showcursorpos,showxgrid=showxgrid,$
    showygrid=showygrid,showzgrid=showzgrid,surfplot=surfplot,symsize=symsize,thick=thick,tickfsize=tickfsize,tickfont=tickfont,title=title,titlfsize=titlfsize,titlfont=titlfont,usepolygon=usepolygon,$
    vector=vector,volclip=volclip,vt_col=vt_col,vtrm_pt=vtrm_pt,widgetbase=widgetbase,wtitle=wtitle,xinfo=xinfo,xlog=xlog,xrange=xrange,xtitle=xtitle,xsize=xsize,yinfo=yinfo,ysize=ysize,ylog=ylog,$
    yrange=yrange,ytitle=ytitle,zinfo=zinfo,zlog=zlog,zmax=zmax,zmin=zmin,zrange=zrange,ztitle=ztitle,xsubticklen=xsubticklen,ysubticklen=ysubticklen,zsubticklen=zsubticklen,$
    isubticklen=isubticklen,xticklen=xticklen,yticklen=yticklen,zticklen=zticklen,iticklen=iticklen,xtickmajor=xtickmajor,ytickmajor=ytickmajor,ztickmajor=ztickmajor,itickmajor=itickmajor,$
    xtickminor=xtickminor,ytickminor=ytickminor,ztickminor=ztickminor,itickminor=itickminor

    if keyword_set(compound) and (n_elements(widgetbase) eq 0) and (n_elements(group_leader) eq 0) then begin
       ok = dialog_message('To be used as a compound widget, compound, widgetbase or group_leader keywords need to be set.',/error,/center)
       return,0
    endif
    
    self.idl_version = dm_to_number(!version.release)
   
    if self.idl_version lt 8.1 then begin    ;check mpeg license
       self.mpeglicense = 1b
       catch, myerror
       if myerror ne 0 then begin
          catch,/cancel
          self.mpeglicense = 0b
       end
       if self.mpeglicense then begin
          mpegID = mpeg_open([2,2])
          mpeg_close,mpegID
       endif
    endif else self.mpeglicense = 0b
    
    catch, myerror  ;avoid rare no printer error
    if myerror ne 0 then begin
       catch,/cancel
       no_printer = 1b
    endif
    if ~keyword_set(no_printer) then begin
       self.printer = obj_new('IDLgrPrinter',units=1,print_quality=2)
    endif
    
    catch, myerror
    if myerror ne 0 then begin
       catch,/cancel
       ok = dialog_message(!error_state.msg,/error,/center)
       return,0  ;indicating that an error occurs
    end

    if (self.idl_version lt 5.6) or (strlowcase(!version.os_family) ne 'windows') then notooltip = 1b   ;no tooltips for unix 
    if keyword_set(notooltip) then self.tooltip = [1b,1b,1b] else self.tooltip = [0b,0b,0b]
    self.compound   = keyword_set(compound)
    self.cuttype    = -1
    self.cutinfo    = [0,!values.f_nan,!values.f_nan]
    self.slicetype  = -1
    self.sliceinfo  = 0
    self.cs_resl[*] = !values.f_nan
    self.bgcol      = 1
    self.papercol   = 1b    ;default paper color is white
    if n_elements(background) ne 0 then begin
       if strlowcase(background) eq 'black' then self.bgcol=0
       if strlowcase(background) eq 'white' then self.bgcol=1
    endif
    bwcolor = self->getcolor((['white','black'])[self.bgcol])
    wbcolor = self->getcolor((['black','white'])[self.bgcol]) 
    if self.idl_version ge 6.0 then reg_extra = {register_properties:1}  ;register_properties keyword for IDL6.0 or later
    if n_elements(xsize) eq 0 then xsize = 600
    if n_elements(ysize) eq 0 then ysize = 400
    ;default values for [symsize,thick,shading,coltable,xsize,ysize,animation interval(spin,slice,dual)]
    cmap_names      = self->getpalette(/list)
    self.default    = [0.008,([1.0,1.5])[xsize gt 400],0.0,(where(strmatch(cmap_names,'MPL-Viridis',/fold_case)))[0],fix(xsize),fix(ysize),([[255b,255b,255b],[0L,0L,0L]])[*,self.bgcol],0.015,0.2,0.5]
    if n_elements(color) ne 0 then self.default[6:8] = self->getcolor(color,define=coldefine)
    if (n_elements(coltable) ne 0) and (n_elements(xdat) eq 0) then self.default[3] = 0>(fix(coltable[0]))<(n_elements(cmap_names)-1)
    self.xran[*]    = !values.f_nan
    self.yran[*]    = !values.f_nan
    self.zran[*]    = !values.f_nan
    self.iran[*]    = !values.f_nan
    self.zmin       = !values.f_nan & self.zmax=!values.f_nan
    self.tickstyle  = 0b
    self.tickmajor  = [-1,-1,-1,-1,-1,-1,-1,-1]
    self.tickminor  = [-1,-1,-1, 0,-1,-1,-1,-1]
    self.ticklen    = [0.025,0.018,0.018,0.016,0.025,0.025]
    self.subticklen = [0.5,0.5,0.5,0.5,0.5,0.5]
    
    cd,current=current 
    self.path = current
    ;check keywords
    if n_elements(parentobj) ne 0 then begin
       if obj_valid(parentobj) then begin
          if n_elements(group_leader) eq 0 then parentobj->getproperty,tlb=group_leader
          if n_elements(parenthandler) eq 0 then parenthandler='event'
          self.parentobj = parentobj
          self.parenthandler = parenthandler
       endif
    endif
    if n_elements(group_leader) ne 0 then self.group_leader=group_leader else self.group_leader=0
    if n_elements(path) ne 0 then begin
       if file_test(path[0],/directory) then self.path=path[0]
    endif
    if n_elements(qoffsetthreshold) ne 0 then self.qoffsetthreshold = abs(qoffsetthreshold[0]) else self.qoffsetthreshold = 0.5
    if n_elements(font)             eq 0 then font = 'Helvetica' else font = strjoin(strsplit(strtrim(font[0],2),' ',/extract),'*')
    if n_elements(title)            eq 0 then title  = ''
    if n_elements(xtitle)           ne 0 then xtitle = self->textadjust(strtrim(xtitle[0],2),fontname=font)       else xtitle = 'X'
    if n_elements(ytitle)           ne 0 then ytitle = self->textadjust(strtrim(ytitle[0],2),fontname=font)       else ytitle = 'Y'
    if n_elements(ztitle)           ne 0 then ztitle = self->textadjust(strtrim(ztitle[0],2),fontname=font)       else ztitle = 'Z'
    if n_elements(ititle)           ne 0 then ititle = self->textadjust(strtrim(ititle[0],2),fontname=font)       else ititle = ''
    if n_elements(ltitle)           ne 0 then ltitle = self->textadjust(strtrim(ltitle[0],2),fontname=font)       else ltitle = ''
    if n_elements(xinfo)            eq 0 then xinfo  = {vaxis:[0.,0.,0.],label:xtitle,offset:[0.,0.,0.],unit:''}
    if n_elements(yinfo)            eq 0 then yinfo  = {vaxis:[0.,0.,0.],lable:ytitle,offset:[0.,0.,0.],unit:''}
    if n_elements(zinfo)            eq 0 then zinfo  = {vaxis:[0.,0.,0.],lable:ztitle,offset:[0.,0.,0.],unit:''}
    if n_elements(cornertxt)        ne 0 then cornertxt = self->textadjust(cornertxt[0],fontname=font) else cornertxt = ''
    if n_elements(wtitle)           ne 0 then self.wtit = strtrim(wtitle[0],2)
    if n_elements(zmin)             ne 0 then self.zmin = zmin[0]
    if n_elements(zmax)             ne 0 then self.zmax = zmax[0]
    if n_elements(fsize)            ne 0 then begin
       self.fsize[*] = (4>(fix(fsize[0]))) & self.fsize[6:7] = (10>(fix(fsize[0]-2)))
    endif else begin
       self.fsize[*] = 12 & self.fsize[6:7] = 10
    endelse
    if n_elements(axisfsize)        ne 0 then self.fsize[1:3] = 4>(fix(axisfsize[0]))
    if n_elements(cbarfsize)        ne 0 then self.fsize[8]   = 4>(fix(cbarfsize[0]))
    if n_elements(ctxtfsize)        ne 0 then self.fsize[7]   = 4>(fix(ctxtfsize[0]))
    if n_elements(cursfsize)        ne 0 then self.fsize[6]   = 4>(fix(cursfsize[0]))
    if n_elements(legdfsize)        ne 0 then self.fsize[5]   = 4>(fix(legdfsize[0]))
    if n_elements(tickfsize)        ne 0 then self.fsize[0]   = 4>(fix(tickfsize[0]))
    if n_elements(titlfsize)        ne 0 then self.fsize[4]   = 4>(fix(titlfsize[0]))
    if n_elements(axisthick)        ne 0 then self.axisthick  = (([1.0,0.0])[self.idl_version ge 8.1])>(axisthick[0])<10.0 else self.axisthick=self.default[1]
    if n_elements(gridthick)        ne 0 then self.gridthick  = (([1.0,0.0])[self.idl_version ge 8.1])>(gridthick[0])<10.0 else self.gridthick=1.0
    if n_elements(gridlinestyle)    ne 0 then self.gridlinestyle = self->getlinestyle(gridlinestyle[0]) else self.gridlinestyle = 0
    if n_elements(cutcolor)         ne 0 then self.cutcolor   = keyword_set(cutcolor)
    if n_elements(gridontop)        ne 0 then self.gridontop  = keyword_set(gridontop[0]) else self.gridontop = 1b
    if n_elements(gamma)            ne 0 then self.gamma      = 0.1>(gamma)<10.0          else self.gamma = 1.0
    if n_elements(volclip)          ne 0 then self.volclip    = (-1)>(volclip)<7          else self.volclip = -1
    if n_elements(misscol)          ne 0 then self.misscol    = keyword_set(misscol)      else self.misscol = 1b
    if n_elements(vector)           ne 0 then self.vector     = keyword_set(vector)       else self.vector = 1      ;default use vector rendering for postscrit file
    if n_elements(isolatin1)        ne 0 then self.isolatin1  = keyword_set(isolatin1)    else self.isolatin1 = 1b  ;default isolatin1 on for postscrit file
    if n_elements(vt_col)           ne 0 then self.vt_col     = 0>(vt_col)<2              else self.vt_col = 0b     ;default use none for empty grid
    if n_elements(vtrm_pt)          ne 0 then self.vtrm_pt    = keyword_set(vtrm_pt)      else self.vtrm_pt = 0b    ;default VECT_TEXT_RENDER_METHOD = 0, use text primitive for postscript
    if n_elements(cbarpos)          eq 2 then self.cbarpos    = cbarpos                   else self.cbarpos = [0.08,0.16] 
    if n_elements(extragap)         eq 4 then self.extragap   = extragap                  else self.extragap[*] = !values.f_nan
    if n_elements(legdpos)          eq 2 then self.legdpos    = 0>(legdpos)<1             else self.legdpos = [0.05,0.9]
    if n_elements(legdcolumns)      eq 0 then legdcolumns     = 1
    if n_elements(legdgap)          eq 0 then legdgap         = 0.25 
    if n_elements(legdbordergap)    eq 0 then legdbordergap   = legdgap*2.0
    if n_elements(legdglyphwidth)   eq 0 then legdglyphwidth  = 1.5
    if n_elements(legdshowoutline)  ne 0 then self.legdshowoutline = keyword_set(legdshowoutline[0]) else self.legdshowoutline = 0b
    if n_elements(legdshowfill)     ne 0 then self.legdshowfill = keyword_set(legdshowfill[0]) else self.legdshowfill = 0b
    if n_elements(legdoutlinethick) ne 0 then self.legdoutlinethick = (([1.0,0.0])[self.idl_version ge 8.1])>(legdoutlinethick[0])<10.0 else self.legdoutlinethick = 1.0 
    if n_elements(render_method)    ne 0 then self.render_method = keyword_set(render_method) else self.render_method = self->textrendermethod()
    if n_elements(iso3dtype)        ne 0 then self.iso3dtype = iso3dtype[0]
    self.keep = keyword_set(keep)
    self.xlog = keyword_set(xlog)
    self.ylog = keyword_set(ylog)
    self.zlog = keyword_set(zlog)
    self.ilog = keyword_set(ilog)
    self.isotropic  = keyword_set(isotropic)
    self.showxgrid  = keyword_set(showxgrid)
    self.showygrid  = keyword_set(showygrid)
    self.showzgrid  = keyword_set(showzgrid)
    self.showcpos   = keyword_set(showcursorpos)
    self.hideAxes   = keyword_set(hideaxes)
    self.hideIntbar = keyword_set(hideintbar)
    self.hideLegend = keyword_set(hidelegend)
    if self.isotropic and (n_elements(xticklen)    ne 0) then yticklen = xticklen
    if self.isotropic and (n_elements(yticklen)    ne 0) then xticklen = yticklen
    if self.isotropic and (n_elements(xsubticklen) ne 0) then ysubticklen = xsubticklen
    if self.isotropic and (n_elements(ysubticklen) ne 0) then xsubticklen = ysubticklen
    if n_elements(xsubticklen)      ne 0 then self.subticklen[0+4*self.isotropic] = 0>(xsubticklen[0])<1
    if n_elements(ysubticklen)      ne 0 then self.subticklen[1+4*self.isotropic] = 0>(ysubticklen[0])<1
    if n_elements(zsubticklen)      ne 0 then self.subticklen[2] = 0>(zsubticklen[0])<1
    if n_elements(isubticklen)      ne 0 then self.subticklen[3] = 0>(isubticklen[0])<1
    if n_elements(xticklen)         ne 0 then self.ticklen[0+4*self.isotropic] = 0>(xticklen[0])
    if n_elements(yticklen)         ne 0 then self.ticklen[1+4*self.isotropic] = 0>(yticklen[0])
    if n_elements(zticklen)         ne 0 then self.ticklen[2] = 0>(zticklen[0])
    if n_elements(iticklen)         ne 0 then self.ticklen[3] = 0>(iticklen[0])
    if n_elements(xtickmajor)       ne 0 then self.tickmajor[0+4*self.xlog] = (-1)>(xtickmajor[0])
    if n_elements(ytickmajor)       ne 0 then self.tickmajor[1+4*self.ylog] = (-1)>(ytickmajor[0])
    if n_elements(ztickmajor)       ne 0 then self.tickmajor[2+4*self.zlog] = (-1)>(ztickmajor[0])
    if n_elements(itickmajor)       ne 0 then self.tickmajor[3+4*self.ilog] = (-1)>(itickmajor[0])
    if n_elements(xtickminor)       ne 0 then self.tickminor[0+4*self.xlog] = (-1)>(xtickminor[0])
    if n_elements(ytickminor)       ne 0 then self.tickminor[1+4*self.ylog] = (-1)>(ytickminor[0])
    if n_elements(ztickminor)       ne 0 then self.tickminor[2+4*self.zlog] = (-1)>(ztickminor[0])
    if n_elements(itickminor)       ne 0 then self.tickminor[3+4*self.ilog] = (-1)>(itickminor[0])
    self.textsize = ptr_new(/allocate_heap)
    for i=0,n_elements(self.font)-1 do self.font[i] = obj_new('IDLgrFont',font,size=self.fsize[i],substitute='Helvetica')
    if n_elements(tickfont)         ne 0 then self.font[0]->setproperty,name=strjoin(strsplit(strtrim(tickfont[0],2),' ',/extract),'*')
    if n_elements(axisfont)         ne 0 then for i=1,3 do self.font[i]->setproperty,name=strjoin(strsplit(strtrim(axisfont[0],2),' ',/extract),'*')
    if n_elements(titlfont)         ne 0 then self.font[4]->setproperty,name=strjoin(strsplit(strtrim(titlfont[0],2),' ',/extract),'*')
    if n_elements(legdfont)         ne 0 then self.font[5]->setproperty,name=strjoin(strsplit(strtrim(legdfont[0],2),' ',/extract),'*')
    if n_elements(cursfont)         ne 0 then self.font[6]->setproperty,name=strjoin(strsplit(strtrim(cursfont[0],2),' ',/extract),'*')
    if n_elements(ctxtfont)         ne 0 then self.font[7]->setproperty,name=strjoin(strsplit(strtrim(ctxtfont[0],2),' ',/extract),'*')
    if n_elements(cbarfont)         ne 0 then self.font[8]->setproperty,name=strjoin(strsplit(strtrim(cbarfont[0],2),' ',/extract),'*')
    self.fname0 = ptr_new(['helvetica','helvetica*italic','helvetica*bold','helvetica*bold*italic','courier','courier*italic','courier*bold','courier*bold*italic','times','times*italic',$
         'times*bold','times*bold*italic','symbol',(self.idl_version ge 8.2)?['monospace symbol',(self.idl_version ge 8.6)?['dejavusans','dejavusans*italic','dejavusans*bold',$
         'dejavusans*bold*italic']:'dejavusans']:'monospace symbol','hershey*3','hershey*4','hershey*5','hershey*6','hershey*7','hershey*8'])
    self.fname1 = ptr_new(['Helvetica','Helvetica Italic','Helvetica Bold','Helvetica Bold Italic','Courier','Courier Italic','Courier Bold','Courier Bold Italic','Times','Times Italic',$
         'Times Bold','Times Bold Italic','Symbol',(self.idl_version ge 8.2)?['Monospace Symbol',(self.idl_version ge 8.6)?['DejaVuSans','DejaVuSans Italic','DejaVuSans Bold',$
         'DejaVuSans Bold Italic']:'DejaVuSans']:'Monospace Symbol','Hershey '+['Simplex Roman','Simplex Greek','Duplex Roman','Complex Roman','Complex Greek','Complex Italic']]) 
    self.xtit   = obj_new('IDLgrText',xtitle,recompute_dimensions=2,font=self.font[1],/enable_formatting,_extra=reg_extra,uvalue=xinfo,name='xtitle')
    self.ytit   = obj_new('IDLgrText',ytitle,recompute_dimensions=2,font=self.font[2],/enable_formatting,_extra=reg_extra,uvalue=yinfo,name='ytitle')
    self.ztit   = obj_new('IDLgrText',ztitle,recompute_dimensions=2,font=self.font[3],/enable_formatting,_extra=reg_extra,uvalue=zinfo,name='ztitle')
    self.ltit   = obj_new('IDLgrText',ltitle,recompute_dimensions=2,font=self.font[5],/enable_formatting,_extra=reg_extra,name='ltitle',color=bwcolor) 
    self.cbtit  = obj_new('IDLgrText',ititle,recompute_dimensions=2,font=self.font[8],/enable_formatting,_extra=reg_extra,name='ititle')
    self.title  = obj_new('IDLgrText',self->textadjust(strtrim(title[0],2),fontname=font),recompute_dimensions=2,font=self.font[4],/enable_formatting,color=bwcolor,name='title',_extra=reg_extra) 
    self.motion_events = keyword_set(draw_motion_events) and (~keyword_set(noparentevent))
    self.parent_events = ~keyword_set(noparentevent)
    self.info   = ptr_new(['dm_plot: IDL '+!version.release+' Object Graphics for 1D, 2D, and 3D Plots','','Yiming Qiu (yiming.qiu@nist.gov)  9/2022'])
    self.textadjustinfo = '\AA for angstrom, \HW for hbar omega...'                      
    self.helpfile1 = 'dm_plot.pdf'
    self.helpfile2 = 'dm_plot_latex.pdf'
    defsysv,'!DAVE_PDFHELP_DIR',exists=exists
    if exists then begin
       pathsep = dm_define_pointer(/getpathsep)
       self.helpfile1 = !DAVE_PDFHELP_DIR+pathsep+self.helpfile1 
       self.helpfile2 = !DAVE_PDFHELP_DIR+pathsep+self.helpfile2 
    endif else begin
       self.helpfile1 = file_which(self.helpfile1,/include_current_dir)
       self.helpfile2 = file_which(self.helpfile2,/include_current_dir)
    endelse

    ;create the widgets
    accel_yn = (self.idl_version ge 6.1) and (~self.compound)   ;flag for accelerator keys in menu button
    if self.compound then begin
       if n_elements(group_leader) eq 0 then self.group_leader = widgetbase
       if n_elements(widgetbase)   eq 0 then widgetbase = group_leader
       self.tlb = self.group_leader
       widget_control,self.tlb,/tlb_size_events
       ;draw widget
       self.plotWin = widget_draw(widgetbase,/button_events,uname='dm_plotWin',graphics_level=2,scr_xsize=self.default[4],scr_ysize=self.default[5],$
                      xsize=self.default[4],ysize=self.default[5],renderer=1,retain=0,/no_copy,motion_events=(self.motion_events or self.showcpos),event_pro='dm_plot_event')
       bar = widget_base(self.plotWin,/CONTEXT_MENU)
       filemenu = widget_button(bar,value='File',/menu)
       editmenu = widget_button(bar,value='Edit',/menu)
       optnmenu = widget_button(bar,value='Options',/menu)
       helpmenu = widget_button(bar,value='Help',/menu)
       widget_control,self.plotWin,set_uvalue=self
    endif else begin
       if strlen(self.wtit) eq 0 then base_title = (strlen(title) eq 0?'dm_plot':title) else base_title = self.wtit+': '+title
       defsysv,'!DAVE_AUXILIARY_DIR',exists=exists
       if exists then icon = !DAVE_AUXILIARY_DIR+'dm_plot.ico' $
       else icon = file_which('dm_plot.ico',/include_current_dir)
       if self.idl_version ge 6.4 then icon_extra={bitmap:icon}
       self.tlb = widget_base(uname='dm_tlb',mbar=bar,group_leader=self.group_leader,/tlb_size_events,/col,ypad=0,xpad=0,/align_center,_extra=icon_extra,map=0,space=0,title=base_title)
       filemenu = widget_button(bar,value='File',/menu)
       editmenu = widget_button(bar,value='Edit',/menu)
       optnmenu = widget_button(bar,value='Options',/menu)
       if (self.group_leader ne 0) and ~keyword_set(nokeepcurrent) then begin
          keepmenu = widget_button(bar,value='Keep',/menu,uname='dm_keepmenu',sensitive=(~self.keep))
          mkcrmenu = widget_button(bar,value='Make Current',/menu,uname='dm_mkcrmenu',sensitive=self.keep)
          keepBut  = widget_button(keepmenu,value='Keep',uname='dm_keepBut',sensitive=(~self.keep),_extra=accel_yn?{accelerator:'Ctrl+K'}:{no_copy:1})
          mkcrBut  = widget_button(mkcrmenu,value='Make Current',uname='dm_mkcrBut',sensitive=self.keep,_extra=accel_yn?{accelerator:'Ctrl+U'}:{no_copy:1})
       endif
       helpmenu = widget_button(bar,value='Help',/menu)
       ;menu bar separator for Windows operating system
       if !version.os_family eq 'Windows' then $
          self.mbar[1] = widget_label(self.tlb,value=' ',sensitive=0,/dynamic_resize,xsize=1,scr_ysize=2)
       ;draw widget
       self.plotWin = widget_draw(self.tlb,/button_events,uname='dm_plotWin',graphics_level=2,scr_xsize=self.default[4],$
                    scr_ysize=self.default[5],xsize=self.default[4],ysize=self.default[5],renderer=1,retain=0,/no_copy,motion_events=(self.motion_events or self.showcpos))
       widget_control,self.tlb,set_uvalue=self
    endelse
    self.mbar[0] = bar
    ;file menu
    savemenu = widget_button(filemenu,value='Save Plot As',uname='dm_savemenu',/menu)
    animmenu = widget_button(filemenu,value='Save Animation As',uname='dm_animmenu',/menu)
    ppclmenu = widget_button(filemenu,value='Color of Paper Background',/menu)
    bgclmenu = widget_button(filemenu,value='Color of Missing Data',/menu)
    poscmenu = widget_button(filemenu,value=(['Postscript','Postscript/PDF'])[self.idl_version ge 8.0]+' File Options',/menu)
    readBut  = widget_button(filemenu,value='Read DAVE File...',uname='dm_readDAVE',/separator)
    readBut  = widget_button(filemenu,value='Read ASCII Multi-Column Line Plot Data File...',uname='dm_readBut')
    readBut  = widget_button(filemenu,value='Read 2D SPE File...',uname='dm_readSpe')
    printBut = widget_button(filemenu,value='Print...',uname='dm_printBut',/separator,_extra=accel_yn?{accelerator:'Ctrl+P'}:{no_copy:1},sensitive=~keyword_set(no_printer))
    pnsetBut = widget_button(filemenu,value='Printer Setup...',uname='dm_pnsetBut',sensitive=~keyword_set(no_printer))
    if  (~self.compound)  then $    ;exit button not allowed in compound widget
    exitBut  = widget_button(filemenu,value='Exit',uname='dm_exitBut',/separator)
    saveps   = widget_button(savemenu,value='PostScript File...',uname='dm_saveps',_extra=accel_yn?{accelerator:'Ctrl+Shift+S'}:{no_copy:1})
    if self.idl_version ge 8.0 then $
    savepdf  = widget_button(savemenu,value='PDF File...',uname='dm_savepdf',_extra=accel_yn?{accelerator:'Ctrl+Shift+P'}:{no_copy:1})
    savejpeg = widget_button(savemenu,value='JPEG File...',uname='dm_savejpg',_extra=accel_yn?{accelerator:'Ctrl+Shift+J'}:{no_copy:1})
    savegif  = widget_button(savemenu,value='GIF File...',uname='dm_savegif',_extra=accel_yn?{accelerator:'Ctrl+Shift+G'}:{no_copy:1})
    savebmp  = widget_button(savemenu,value='BMP File...',uname='dm_savebmp',_extra=accel_yn?{accelerator:'Ctrl+Shift+B'}:{no_copy:1})
    savepng  = widget_button(savemenu,value='PNG File...',uname='dm_savepng',_extra=accel_yn?{accelerator:'Ctrl+Shift+N'}:{no_copy:1})
    saveppm  = widget_button(savemenu,value='PPM File...',uname='dm_saveppm',_extra=accel_yn?{accelerator:'Ctrl+Shift+M'}:{no_copy:1})
    savetiff = widget_button(savemenu,value='TIFF File...',uname='dm_savetif',_extra=accel_yn?{accelerator:'Ctrl+Shift+T'}:{no_copy:1})
    saveascii= widget_button(savemenu,value='ASCII File...',uname='dm_saveasc',/separator,_extra=accel_yn?{accelerator:'Ctrl+Shift+A'}:{no_copy:1})
    if self.idl_version ge 8.1 then begin
       mp4menu = widget_button(animmenu,value='MP4 File',uname='dm_mp4menu',/menu)
       avimenu = widget_button(animmenu,value='AVI File',uname='dm_avimenu',/menu)
    endif else begin
       if self.mpeglicense then begin
          mpegmenu = widget_button(animmenu,value='MPEG File',uname='dm_mpgmenu',/menu)
       endif else begin
          mpeglics = widget_button(animmenu,value='MPEG File',uname='dm_mpeglicense')
       endelse
    endelse
    gifmenu  = widget_button(animmenu,value='Animated GIF File',uname='dm_gifmenu',/menu)
    if self.idl_version ge 6.3 then $
    mj2menu  = widget_button(animmenu,value='Motion JPEG2000 File',uname='dm_mj2menu',/menu)
    blackpp  = dm_widget_button(ppclmenu,value='Black',uname='dm_blackpaper')
    whitepp  = dm_widget_button(ppclmenu,value='White',uname='dm_whitepaper')
    dm_toggle_menubut,check=([blackpp,whitepp])[self.papercol],uncheck=([blackpp,whitepp])[1-self.papercol]
    blackbg  = dm_widget_button(bgclmenu,value='Black',uname='dm_blackbg')
    whitebg  = dm_widget_button(bgclmenu,value='White',uname='dm_whitebg')
    dm_toggle_menubut,check=([blackbg,whitebg])[self.misscol],uncheck=([blackbg,whitebg])[1-self.misscol]
    vectmenu = widget_button(poscmenu,value='Bitmap or Vector Graphic Output',/menu)
    usebitm  = dm_widget_button(vectmenu,value='Bitmap',uname='dm_bitmap')
    usevect  = dm_widget_button(vectmenu,value='Vector',uname='dm_vector')
    dm_toggle_menubut,check=([usebitm,usevect])[self.vector],uncheck=([usebitm,usevect])[1-self.vector]
    if self.idl_version ge 6.1 then begin
       vtrmmenu = widget_button(poscmenu,value='Text Rendering Method',/menu)
       vtrm_pr  = dm_widget_button(vtrmmenu,value='Text Primitive',uname='dm_vtrm_pr')
       vtrm_tr  = dm_widget_button(vtrmmenu,value='Triangle', uname='dm_vtrm_tr')
       dm_toggle_menubut,check=([vtrm_pr,vtrm_tr])[self.vtrm_pt],uncheck=([vtrm_pr,vtrm_tr])[1-self.vtrm_pt]
       if self.idl_version ge 6.4 then begin
          isolmenu = widget_button(poscmenu,value='Use Adobe ISO Latin 1 Font Encoding',/menu)
          isolyes  = dm_widget_button(isolmenu,value='Yes',uname='dm_isolatyes')
          isolno   = dm_widget_button(isolmenu,value='No', uname='dm_isolatno')
          dm_toggle_menubut,check=([isolno,isolyes])[self.isolatin1],uncheck=([isolno,isolyes])[1-self.isolatin1]
       endif
    endif
    ;edit menu
    copyBut  = widget_button(editmenu,value='Copy to Clipboard',uname='dm_saveclipbd',_extra=accel_yn?{accelerator:'Ctrl+C'}:{no_copy:1})
    textBut  = widget_button(editmenu,value='Add Text...',uname='dm_addtextBut',/separator)
    if ~lmgr(/vm) then $
    lineBut  = widget_button(editmenu,value='Add Line...',uname='dm_addlineBut')   
    titlmenu = widget_button(editmenu,value='Title',/menu,/separator)
    ctxtmenu = widget_button(editmenu,value='Corner Text',/menu)
    xaxsmenu = widget_button(editmenu,value='X Axis',/menu)
    yaxsmenu = widget_button(editmenu,value='Y Axis',/menu)
    zaxsmenu = widget_button(editmenu,value='Z Axis',/menu,uname='dm_zaxismenu',sensitive=0)
    iaxsmenu = widget_button(editmenu,value='I Axis',/menu,uname='dm_iaxismenu',sensitive=0)    
    titlBut  = widget_button(titlmenu,value='Title...',uname='dm_titlBut',_extra=accel_yn?{accelerator:'Ctrl+T'}:{no_copy:1})
    tfonBut  = widget_button(titlmenu,value='Title Font...',uname='dm_titlfontBut')
    ctstBut  = widget_button(ctxtmenu,value='String...',uname='dm_ctxtBut')
    ctftBut  = widget_button(ctxtmenu,value='Font...',uname='dm_ctxtfontBut')
    xtitBut  = widget_button(xaxsmenu,value='X Title...',uname='dm_xtitBut')
    xfonBut  = widget_button(xaxsmenu,value='X Title Font...',uname='dm_xtitfontBut')
    xranBut  = widget_button(xaxsmenu,value='X Range...',uname='dm_xranBut',_extra=accel_yn?{accelerator:'Alt+X'}:{no_copy:1})
    xmajBut  = widget_button(xaxsmenu,value='X Major Tick Number...',uname='dm_xmajorBut')
    xminBut  = widget_button(xaxsmenu,value='X Minor Tick Number...',uname='dm_xminorBut')
    xsmaBut  = widget_button(xaxsmenu,value='X Major Tick Length...',uname='dm_xticklenBut')
    xsmiBut  = widget_button(xaxsmenu,value='X Minor Tick Length...',uname='dm_xsubticklenBut')
    xtinBut  = widget_button(xaxsmenu,value='X Tick Interval...',uname='dm_xtickintervalBut')
    xlogBut  = dm_widget_button(xaxsmenu,value='X Logarithmic Scale',uname='dm_xlogBut',set_button=self.xlog,onstring='X Normal Scale',offstring='X Logarithmic Scale',/separator)
    ytitBut  = widget_button(yaxsmenu,value='Y Title...',uname='dm_ytitBut')
    yfonBut  = widget_button(yaxsmenu,value='Y Title Font...',uname='dm_ytitfontBut')
    yranBut  = widget_button(yaxsmenu,value='Y Range...',uname='dm_yranBut',_extra=accel_yn?{accelerator:'Alt+Y'}:{no_copy:1})
    ymajBut  = widget_button(yaxsmenu,value='Y Major Tick Number...',uname='dm_ymajorBut')
    yminBut  = widget_button(yaxsmenu,value='Y Minor Tick Number...',uname='dm_yminorBut')
    ysmaBut  = widget_button(yaxsmenu,value='Y Major Tick Length...',uname='dm_yticklenBut')
    ysmiBut  = widget_button(yaxsmenu,value='Y Minor Tick Length...',uname='dm_ysubticklenBut')
    ytinBut  = widget_button(yaxsmenu,value='Y Tick Interval...',uname='dm_ytickintervalBut')
    ylogBut  = dm_widget_button(yaxsmenu,value='Y Logarithmic Scale',uname='dm_ylogBut',set_button=self.ylog,$
               onstring='Y Normal Scale',offstring='Y Logarithmic Scale',_extra=accel_yn?{accelerator:'Ctrl+L'}:{no_copy:1},/separator)
    ztitBut  = widget_button(zaxsmenu,value='Z Title...',uname='dm_ztitBut')
    zfonBut  = widget_button(zaxsmenu,value='Z Title Font...',uname='dm_ztitfontBut')
    zranBut  = widget_button(zaxsmenu,value='Z Range...',uname='dm_zranBut',_extra=accel_yn?{accelerator:'Alt+Z'}:{no_copy:1})
    zmajBut  = widget_button(zaxsmenu,value='Z Major Tick Number...',uname='dm_zmajorBut')
    zminBut  = widget_button(zaxsmenu,value='Z Minor Tick Number...',uname='dm_zminorBut')
    zsmaBut  = widget_button(zaxsmenu,value='Z Major Tick Length...',uname='dm_zticklenBut')
    zsmiBut  = widget_button(zaxsmenu,value='Z Minor Tick Length...',uname='dm_zsubticklenBut')
    ztinBut  = widget_button(zaxsmenu,value='Z Tick Interval...',uname='dm_ztickintervalBut')
    zlogBut  = dm_widget_button(zaxsmenu,value='Z Logarithmic Scale',uname='dm_zlogBut',set_button=self.zlog,onstring='Z Normal Scale',offstring='Z Logarithmic Scale',/separator)
    ititBut  = widget_button(iaxsmenu,value='I Title...',uname='dm_ititBut')
    cbfonBut = widget_button(iaxsmenu,value='I Title Font...',uname='dm_cbarfontBut')
    iranBut  = widget_button(iaxsmenu,value='I Range...',uname='dm_iranBut',_extra=accel_yn?{accelerator:'Alt+I'}:{no_copy:1})
    imajBut  = widget_button(iaxsmenu,value='I Major Tick Number...',uname='dm_imajorBut')
    iminBut  = widget_button(iaxsmenu,value='I Minor Tick Number...',uname='dm_iminorBut')
    ismaBut  = widget_button(iaxsmenu,value='I Major Tick Length...',uname='dm_iticklenBut')
    ismiBut  = widget_button(iaxsmenu,value='I Minor Tick Length...',uname='dm_isubticklenBut')
    itinBut  = widget_button(iaxsmenu,value='I Tick Interval...',uname='dm_itickintervalBut')
    ilogBut  = dm_widget_button(iaxsmenu,value='I Logarithmic Scale',uname='dm_ilogBut',set_button=self.zlog,onstring='I Normal Scale',offstring='I Logarithmic Scale',/separator)
    axthBut  = widget_button(editmenu,value='Axis Thickness...',uname='dm_cs_axisthick')
    ttxmenu  = widget_button(editmenu,value='Axis Tick Text',/menu)
    afonBut  = widget_button(ttxmenu,value='Tick Text Font...',uname='dm_cs_axistickfont')
    tickmenu = widget_button(ttxmenu,value='Tick Text Format',/menu)
    idltick  = dm_widget_button(tickmenu,set_button=1-self.tickstyle,value='Default',uname='dm_idltick')
    owntick  = dm_widget_button(tickmenu,set_button=self.tickstyle,value='Abbreviated or Exponent (log scale)',uname='dm_owntick')
    psymBut  = widget_button(editmenu,value='Plot Symbol...',uname='dm_psymBut',sensitive=0,/separator)
    lineBut  = widget_button(editmenu,value='Plot Linestyle...',uname='dm_lineBut',sensitive=0)
    pcolBut  = widget_button(editmenu,value='Plot Color...',uname='dm_pcolBut',sensitive=0)
    lgndmenu = widget_button(editmenu,value='Legend',uname='dm_lgndmenu',sensitive=0,/menu)
    lgndBut  = widget_button(lgndmenu,value='Legend Label...',uname='dm_lgndBut')
    lfonBut  = widget_button(lgndmenu,value='Legend Font...',uname='dm_lgndfontBut')
    titlbut  = widget_button(lgndmenu,value='Legend Title...',uname='dm_ltitBut')
    lgapbut  = widget_button(lgndmenu,value='Legend Gap...',uname='dm_cs_lgndgap')
    bgapbut  = widget_button(lgndmenu,value='Legend Border Gap...',uname='dm_cs_lgndbordergap')
    gwidbut  = widget_button(lgndmenu,value='Legend Glyph Width...',uname='dm_cs_lgndwidth')
    olthbut  = widget_button(lgndmenu,value='Legend Outline Thickness...',uname='dm_cs_lgndoutlinethick')
    oulnbut  = dm_widget_button(lgndmenu,value='Show Outline',uname='dm_cs_outline',set_button=self.legdshowoutline,onstring='Show Outline',offstring='Hide Outline')
    fillbut  = dm_widget_button(lgndmenu,value='Show Fill',uname='dm_cs_showfill',set_button=self.legdshowfill,onstring='Show Filled Background',offstring='Hide Filled Background')
    ctabBut  = widget_button(editmenu,value='Color Table...',uname='dm_cs_coltable',sensitive=0,_extra=accel_yn?{accelerator:'Ctrl+M'}:{no_copy:1},/separator)
    gamaBut  = widget_button(editmenu,value='Color Palette Gamma...',uname='dm_cs_gamma',sensitive=0)
    shadBut  = widget_button(editmenu,value='Shading...',uname='dm_cs_shade',sensitive=0)
    vtclmenu = widget_button(editmenu,value='Empty Grid Color',/menu,sensitive=0,uname='dm_vtcolmenu')
    vt_corn  = dm_widget_button(vtclmenu,set_button=(self.vt_col eq 0),value='None',uname='dm_vtcol_none')
    vt_avg2  = dm_widget_button(vtclmenu,set_button=(self.vt_col eq 1),value='Average of Minimum 2 Neighbors',uname='dm_vtcol_avg2')
    vt_avg3  = dm_widget_button(vtclmenu,set_button=(self.vt_col eq 2),value='Average of Minimum 3 Neighbors',uname='dm_vtcol_avg3')
    intpBut  = widget_button(editmenu,value='Interpolate...',uname='dm_cs_volinterp',sensitive=0,/separator)
    opctBut  = widget_button(editmenu,value='Opacity...',uname='dm_cs_volopacity',sensitive=0)
    maskBut  = widget_button(editmenu,value='Clipping...',uname='dm_cs_volclip',sensitive=0)
    ;option menu
    bgclmenu = widget_button(optnmenu,value='Plot Window Background Color',/menu)
    bgblack  = dm_widget_button(bgclmenu,value='Black',uname='dm_bgblack',set_button=1-self.bgcol,_extra=accel_yn?{accelerator:'Ctrl+B'}:{no_copy:1})
    bgwhite  = dm_widget_button(bgclmenu,value='White',uname='dm_bgwhite',set_button=self.bgcol,_extra=accel_yn?{accelerator:'Ctrl+W'}:{no_copy:1})
    if ~self.compound then begin
    void     = widget_button(optnmenu,value='Plot Window Size...',uname='dm_pwsizeBut')
    void     = widget_button(optnmenu,value='Plot Window Base Title...',uname='dm_pwTitleBut')
    endif
    if !version.os_family eq 'Windows' then begin
    pfntmenu = widget_button(optnmenu,value='Plot Window Text Rendering Method',uname='ptextrmMenu',/menu)
    void     = dm_widget_button(pfntmenu,value='Texture',uname='dm_textrm_0',set_button=(self.render_method eq 0))
    void     = dm_widget_button(pfntmenu,value='Triangles',uname='dm_textrm_1',set_button=(self.render_method eq 1))  
    endif
    isotBut  = dm_widget_button(optnmenu,value='Isotropic Scaling',uname='dm_isoBut',set_button=self.isotropic,$
       onstring='Disable Isotropic Scaling',offstring='Enable Isotropic Scaling',/separator,_extra=accel_yn?{accelerator:'Ctrl+I'}:{no_copy:1})
    cposBut  = dm_widget_button(optnmenu,value='Show Cursor Position Status',uname='dm_showcposBut',_extra=accel_yn?{accelerator:'Ctrl+S'}:{no_copy:1},$
       set_button=self.showcpos,onstring='Hide Cursor Position Status',offstring='Show Cursor Position Status')
    gridmenu = dm_widget_button(optnmenu,value='Show Grid',/menu,uname='dm_showgridmenu',sensitive=(~self.hideAxes),set_button=(self.showxgrid or self.showygrid or self.showzgrid),/separator)
    haxsBut  = dm_widget_button(optnmenu,value='Show Axes',uname='dm_cs_hideaxes',set_button=~self.hideAxes,onstring='Hide Axes',offstring='Show Axes')
    hideBut  = dm_widget_button(optnmenu,value='Show Legend',uname='dm_cs_hidelegend',sensitive=0,set_button=~self.hideLegend,onstring='Hide Legend',offstring='Show Legend')
    hideBut  = dm_widget_button(optnmenu,value='Show Colorbar',uname='dm_cs_hidecbar',sensitive=0,set_button=~self.hideIntbar,onstring='Hide Colorbar',offstring='Show Colorbar')    
    gridBut  = widget_button(gridmenu,value='Show Grid',uname='dm_cs_grid',_extra=accel_yn?{accelerator:'Ctrl+G'}:{no_copy:1})
    gridBut  = dm_widget_button(gridmenu,value='Show X Grid',uname='dm_xgridBut',set_button=self.showxgrid,/separator,$
       onstring='Hide X Grid',offstring='Show X Grid',_extra=accel_yn?{accelerator:'Ctrl+X'}:{no_copy:1})
    gridBut  = dm_widget_button(gridmenu,value='Show Y Grid',uname='dm_ygridBut',set_button=self.showygrid,$
       onstring='Hide Y Grid',offstring='Show Y Grid',_extra=accel_yn?{accelerator:'Ctrl+Y'}:{no_copy:1})
    gridBut  = dm_widget_button(gridmenu,value='Show Z Grid',uname='dm_zgridBut',set_button=self.showzgrid,sensitive=obj_valid(self.drawzAxis),$
       onstring='Hide Z Grid',offstring='Show Z Grid',_extra=accel_yn?{accelerator:'Ctrl+Z'}:{no_copy:1})
    gdclBut  = widget_button(gridmenu,value='Grid Color...',uname='dm_gridcolor',/separator)
    gdlsBut  = widget_button(gridmenu,value='Grid Linestyle...',uname='dm_gridlinestyle')
    gdthBut  = widget_button(gridmenu,value='Grid Thickness...',uname='dm_gridthick')
    gdpsmenu = widget_button(gridmenu,value='Grid Position',uname='dm_gridpositionmenu',/menu)
    void     = dm_widget_button(gdpsmenu,value='Top',uname='dm_gridpos_top',set_button=self.gridontop)
    void     = dm_widget_button(gdpsmenu,value='Bottom',uname='dm_gridpos_bot',set_button=(self.gridontop eq 0))
    if self.idl_version ge 6.0 then $
    vallBut  = widget_button(optnmenu,value='Show All Plots',uname='dm_show_all',sensitive=0)
    anmsBut  = widget_button(optnmenu,value='Animation Speed...',uname='dm_cs_animspd',sensitive=0,/separator)
    anmdBut  = dm_widget_button(optnmenu,value='Reverse Animation Direction',uname='dm_cs_animdir',sensitive=0,set_button=self.animdir)
    egapBut  = dm_widget_button(optnmenu,value='Extra Boundary Gap...',uname='dm_cs_extragap',set_button=stregex(dm_to_string(self.extragap,sep=''),'[1-9]',/boolean),/separator)
    ;help menu
    if (~lmgr(/vm)) and (~lmgr(/runtime)) and (strlen(self.helpfile1) ne 0) then $
       void  = widget_button(helpmenu,value='IDL Programming with dm_plot',uname='dm_help1But',_extra=accel_yn?{accelerator:'F1'}:{no_copy:1})
    if strlen(self.helpfile2) ne 0 then $
       void  = widget_button(helpmenu,value='Latex Commands and IDL Embedded Formatting Commands',uname='dm_help2But',_extra=accel_yn?{accelerator:'F2'}:{no_copy:1})
    void     = widget_button(helpmenu,value='About dm_plot',uname='dm_selfBut',separator=((strlen(self.helpfile1) ne 0) or (strlen(self.helpfile2) ne 0)))
    ;context senstive menu
    self->build_menu,menuname='dm_cs_axisMenu',value=[['Title','Font','Range','Thickness','Tick Text Font','Major Tick Number','Minor Tick Number','Major Tick Length','Minor Tick Length',$
       'Tick Interval']+'...','Logarithmic Scale','Extra Boundary Gap...','Hide Axes'],uname='dm_cs_'+['title','font','range','axisthick','axistickfont','axistickmajor','axistickminor',$
       'axismajorticklength','axisminorticklength','axistickinterval','logscale','extragap','hideaxes'],ischeck=[bytarr(10),1b,1b,0b],isseparator=[bytarr(10),1b,1b,1b]  ;axis
    self->build_menu,menuname='dm_cs_titleMenu',value=['Title','Font']+'...',uname='dm_cs_'+['title','font'],/propsheet ;title
    self->build_menu,menuname='dm_cs_plotMenu',value=[['Symbol','Color','Linestyle','Thickness','Legend','Layer','Formula']+'...','Arrow','Show Grid','Hide Error Bar','Hide Legend',$
       'Hide Axes','Remove'],uname='dm_cs_'+['symbol','color','linestyle','linethick','legend','layer','formula','arrMenu','grid','hideerror','hidelegend','hideaxes','remove'],$
       isseparator=[0,0,0,0,0,0,0,0,1,0,0,0,1],/propsheet,ismenu=[bytarr(7),1,bytarr(5)],kidmenu=ptr_new({value:'Arrow '+['Angle','Length']+'...',uname:'dm_cs_'+['arrowangle','arrowlength'],$
       ischeck:[0,0],isseparator:[0,0],ismenu:0,issensitive:1})     ;1-d plot object
    self->build_menu,menuname='dm_cs_plot3dMenu',value=[['Symbol','Color','Linestyle','Thickness','Legend','Formula']+'...','Arrow','Show Grid','Hide Legend','Hide Axes','Rotate...','Animation','Remove'],$
       uname=['dm_cs_'+['symbol','color','linestyle','linethick','legend','formula','arrMenu','grid','hidelegend','hideaxes','rotate'],'','dm_cs_remove'],isseparator=[0,0,0,0,0,0,0,1,0,0,1,0,1],$
       ismenu=[bytarr(6),1,0,0,0,0,1,0],/propsheet,kidmenu=[ptr_new({value:'Arrow '+['Angle','Length']+'...',uname:'dm_cs_'+['arrowangle','arrowlength'],ischeck:[0,0],isseparator:[0,0],$
       ismenu:0,issensitive:1}),ptr_new({value:['Spin','Reverse Animation Direction'],uname:'dm_cs_'+['spin','animdir'],ischeck:[0,1],isseparator:[0,1],ismenu:0,issensitive:1})] ;3d line plot     
    self->build_menu,menuname='dm_cs_arrowMenu',value=['Arrow Angle','Arrow Length']+'...',uname='dm_cs_'+['arrowangle','arrowlength'] ;arrow polygon
    self->build_menu,menuname='dm_cs_twodMenu',value=[['Color Table','Color Palette Gamma','Layer']+'...','Shading','Empty Grid Color','Show Grid','Hide Colorbar','Hide Axes','Animation',$
       'Cut'],uname='dm_cs_'+['coltable','gamma','layer','shademenu','egcMenu','grid','hidecbar','hideaxes','animMenu','cutMenu'],isseparator=[0,0,0,0,0,1,0,0,1,0],$
       ismenu=[0,0,0,1,1,0,0,0,1,1],kidmenu=[ptr_new({value:['Flat','Gouraud'],uname:'dm_cs_shade'+['flat','gouraud'],ischeck:[1,1],isseparator:[0,0],ismenu:0,issensitive:1}),$
       ptr_new({value:['None','Average of Minimum '+['2','3']+' Neighbors'],uname:'dm_vtcol_'+['none','avg2','avg3'],ischeck:[1,1,1],isseparator:[0,0,0],ismenu:0,issensitive:1}),$
       ptr_new({value:[['X','Y']+'-cut...','Reverse Animation Direction'],uname:'dm_cs_'+['xcut2p','ycut2p','animdir'],ischeck:[0,0,1],isseparator:[0,0,1],ismenu:0,issensitive:1}),$
       ptr_new({value:['Along X...','Along Y...','Arbitrary Direction...'],uname:'dm_cs_'+['xcut','ycut','arbcut'],ischeck:[1,1,1],isseparator:0,ismenu:0,issensitive:1})] ;2-d contour
    self->build_menu,menuname='dm_cs_surfMenu',value=[['Color Table','Color Palette Gamma','Shading']+'...','Show Grid','Hide Colorbar','Hide Axes','Rotate...','Animation'],$
       uname=['dm_cs_'+['coltable','gamma','shade','grid','hidecbar','hideaxes','rotate'],''],isseparator=[0,0,0,1,0,0,1,0],ismenu=[0,0,0,0,0,0,0,1],$
       kidmenu=ptr_new({value:['Spin','Reverse Animation Direction'],uname:'dm_cs_'+['spin','animdir'],ischeck:[0,1],isseparator:[0,1],ismenu:0,issensitive:1}) ;2-d surface
    self->build_menu,menuname='dm_cs_legendMenu',value=[['Labels','Font','Title','Number of Columns','Gap','Border Gap','Glyph Width','Outline Thickness']+'...','Show Outline','Show Fill',$
       'Hide Legend'],uname='dm_'+['lgndBut','cs_font','cs_title','cs_lgndcolnum','cs_lgndgap','cs_lgndbordergap','cs_lgndwidth','cs_lgndoutlinethick','cs_outline','cs_showfill',$
       'cs_hidelegend'],isseparator=[bytarr(8),1b,0b,0b],/propsheet ;legend
    self->build_menu,menuname='dm_cs_cornertxtMenu',value=['String...','Font...'],uname='dm_cs_'+['title','font']  ;corner text menu
    self->build_menu,menuname='dm_cs_cbarMenu',value=[['Title','Font','Range','Color Table','Color Palette Gamma','Shading','Thickness','Tick Text Font',['Major','Minor']+' Tick Number',$
       ['Major','Minor']+' Tick Length','Tick Interval']+'...','Logarithmic Scale','Width and Position...','Extra Boundary Gap...','Hide Colorbar'],uname='dm_cs_'+['title','font','range',$
       'coltable','gamma','shade','axisthick','axistickfont','axistick'+['major','minor'],'axis'+['major','minor']+'ticklength','axistickinterval','logscale','cbarpos','extragap',$
       'hidecbar'],isseparator=[bytarr(13),1b,1b,0b,1b],ischeck=[bytarr(13),1b,0b,1b,0b] ;color bar
    self->build_menu,menuname='dm_cs_textMenu',value=[['String','Font','Color','Orientation','Position']+'...','Show Fill','Remove'],uname='dm_cs_'+['title','font','txtcolor','textori',$
       'textpos','txtshowfill','remove'],isseparator=[0,0,0,0,0,1,1],/propsheet   ;text
    self->build_menu,menuname='dm_cs_gridMenu',value=['Grid '+['Color','Linestyle','Thickness']+'...','Grid Position','Hide Grid'],uname=['dm_grid'+['color','linestyle','thick',$
       'positionmenu'],'dm_cs_hidegrid'],isseparator=[0,0,0,0,1],ismenu=[0,0,0,1,0],kidmenu=[ptr_new({value:['Top','Bottom'],uname:'dm_gridpos_'+['top','bot'],ischeck:[1,1],$
       isseparator:[0,0],ismenu:0,issensitive:1})] ;grids
    self->build_menu,menuname='dm_cs_polyMenu',value=['Color...','Layer...','Show Grid','Hide Axes','Remove'],uname='dm_cs_'+['color','layer','grid','hideaxes','remove'],$
       isseparator=[0,0,1,0,1],/propsheet  ;filled polygon
    self->build_menu,menuname='dm_cs_poly3dMenu',value=['Color...','Show Grid','Hide Axes','Rotate...','Animation','Remove'],uname=['dm_cs_'+['color','grid','hideaxes','rotate'],'',$
       'dm_cs_remove'],ismenu=[0,0,0,0,1,0],isseparator=[0,1,0,1,0,1],/propsheet,kidmenu=ptr_new({value:'Spin',uname:'dm_cs_spin',ischeck:0,ismenu:0,isseparator:0,issensitive:1}) ;filled polygon 3d
    self->build_menu,menuname='dm_cs_volMenu',value=[['Color Table','Color Palette Gamma','Interpolate','Opacity','Clipping']+'...','Show Grid','Hide Colorbar','Hide Axes','Rotate...',$
       'Animation','Slice'],uname=['dm_cs_'+['coltable','gamma','volinterp','volopacity','volclip','grid','hidecbar','hideaxes','rotate'],'',''],ismenu=[bytarr(9),1b,1b],$
       isseparator=[bytarr(5),1b,0b,0b,1b,0b,0b],/propsheet,kidmenu=[ptr_new({value:['Spin',['X','Y','Z']+'-slice',['X','Y','Z']+'-slice (Dual Plots)...','Reverse Animation Direction'],$
       uname:'dm_cs_'+['spin',['x','y','z']+'slice',['x','y','z']+'slice2p','animdir'],ischeck:[bytarr(7),1b],isseparator:[bytarr(7),1b],ismenu:0b,issensitive:1}),$
       ptr_new({value:['X','Y','Z']+'-slice...',uname:'dm_cs_vol'+['x','y','z']+'slice',ischeck:[1b,1b,1b],ismenu:0b,isseparator:0b,issensitive:1})]  ;volume
    if (~self.compound) then begin
       dm_center_kid,self.tlb,self.group_leader,/side
       widget_control,self.tlb,/realize
    endif else $
       widget_control,self.plotWin,/realize
    widget_control,self.plotWin,get_value=oWindow
    zclip           = [1.6,-1.6]
    self.drawWin    = oWindow
    self.drawWin->getproperty,resolution=resolution 
    self.resolution = resolution 
    self.drawView   = obj_new('IDLgrView',location=[0,0],dimensions=self.default[4:5],viewplane_rect=[0,0,1,1],color=wbcolor,zclip=zclip,/hide)
    self.tranView   = obj_new('IDLgrView',/transparent,location=[0,0],dimensions=self.default[4:5])
    self.drawModel  = obj_new('IDLgrModel',lighting=0)
    self.drawGroup  = obj_new('IDLgrModel',lighting=0)
    self.drawViewGp = obj_new('IDLgrViewgroup')
    self.drawViewGp->add,self.drawView
    self.drawViewGp->add,self.tranView
    self.drawModel->add,self.drawGroup
    self.drawView->add,self.drawModel
    self.xgrid = obj_new('IDLgrPolyline',color=self->getcolor('gray'),hide=((~self.showxgrid) or self.hideAxes),thick=self.gridthick,linestyle=self.gridlinestyle,name='grid')
    self.ygrid = obj_new('IDLgrPolyline',color=self->getcolor('gray'),hide=((~self.showygrid) or self.hideAxes),thick=self.gridthick,linestyle=self.gridlinestyle,name='grid')
    self.zgrid = obj_new('IDLgrPolyline',color=self->getcolor('gray'),hide=((~self.showzgrid) or (~obj_valid(self.drawzAxis)) or self.hideAxes),thick=self.gridthick,linestyle=self.gridlinestyle,name='grid')
    self.drawGroup->add,self.xgrid
    self.drawGroup->add,self.ygrid
    self.drawGroup->add,self.zgrid
    self.sliceBox = obj_new('IDLgrPolygon',/hide)
    self.drawGroup->add,self.sliceBox
    self.drawLegend = obj_new('dm_Legend',text_color=bwcolor,xcoord_conv=[self.legdpos[0],1],ycoord_conv=[self.legdpos[1],1],zcoord_conv=[zclip[0],zclip[0]]-0.1,font=self.font[5],$
       name='legend',gap=legdgap[0],border_gap=legdbordergap[0],outline_color=bwcolor,fill_color=wbcolor,outline_thick=self.legdoutlinethick,show_outline=self.legdshowoutline,$
       glyph_width=legdglyphwidth[0],title=self.ltit,show_fill=self.legdshowfill,columns=legdcolumns[0],_extra=reg_extra)
    if self.idl_version ge 6.0 then begin    ;register some properties
       self.drawLegend->registerproperty,'columns',2,       name='columns'
       self.drawLegend->registerproperty,'border_gap',3,    name='border gap'
       self.drawLegend->registerproperty,'fill_color',5,    name='fill color'
       self.drawLegend->registerproperty,'gap',3
       self.drawLegend->registerproperty,'glyph_width',3,   name='glyph width'
       self.drawLegend->registerproperty,'outline_color',5, name='outline color'
       self.drawLegend->registerproperty,'show_fill',1,     name='show fill'
       self.drawLegend->registerproperty,'show_outline',1,  name='show outline'
       self.drawLegend->registerproperty,'text_color',5,    name='text color'
    endif
    self.drawModel->add,self.drawLegend
    self.cursorpos = obj_new('IDLgrText','',font=self.font[6],color=bwcolor,zcoord_conv=[1.0,1.0],recompute_dimensions=2,/enable_formatting,_extra=reg_extra,hide=(~self.showcpos),name='cursorpos')
    self.cornertxt = obj_new('IDLgrText',cornertxt,font=self.font[7],color=bwcolor,zcoord_conv=[1.0,1.0],recompute_dimensions=2,/enable_formatting,_extra=reg_extra,name='cornertxt')
    self.drawModel->add,self.cursorpos
    self.drawModel->add,self.cornertxt
    self.trackBall = obj_new('Trackball',(self.default[4:5])/2,self.default[5]/2)
    self.plotInfo  = ptr_new(/allocate_heap)
    if self.bgcol then self.drawWin->draw,self.drawView    ;white background
  
    case n_params() of
       2: self->setproperty,xdat=xdat,ydat=ydat,xerr=xerr,yerr=yerr,no_copy=no_copy,legend=legend,symsize=symsize,linestyle=linestyle,thick=thick,psym=psym,color=color,coldefine=coldefine,$
             cornertxt=cornertxt,xrange=xrange,yrange=yrange,layer=layer,usepolygon=usepolygon,addarrow=addarrow,arrowangle=arrowangle,arrowlength=arrowlength,/nodraw,error=error
       3: self->setproperty,xdat=xdat,ydat=ydat,zdat=zdat,xerr=xerr,yerr=yerr,zerr=zerr,no_copy=no_copy,surfplot=surfplot,shading=shading,coltable=coltable,usepolygon=usepolygon,$
             xrange=xrange,yrange=yrange,zrange=zrange,irange=irange,legend=legend,symsize=symsize,linestyle=linestyle,thick=thick,psym=psym,color=color,coldefine=coldefine,/nodraw,$
             contourplot=contourplot,cornertxt=cornertxt,addarrow=addarrow,arrowangle=arrowangle,arrowlength=arrowlength,error=error
       4: self->setproperty,xdat=xdat,ydat=ydat,zdat=zdat,idat=idat,zerr=zerr,ierr=ierr,no_copy=no_copy,surfplot=surfplot,shading=shading,coltable=coltable,cornertxt=cornertxt,$
             xrange=xrange,yrange=yrange,zrange=zrange,irange=irange,interpolate=interpolate,opacity=opacity,/nodraw,error=error
       else:
    endcase
    if keyword_set(error) then begin  ;fatal error: incorrect data format
       self->Cleanup
       return,0
    endif 

    if (~self.compound) then begin
       tmp1 = widget_info(self.tlb,/geometry)
       tmp2 = widget_info(self.plotWin,/geometry)
       self.menumargin = tmp1.scr_ysize-tmp2.scr_ysize
       if xregistered('dave',/noshow) and (self.group_leader ne 0) then begin
          self.enotebook = 1b
          RET = DAVE_SET_FOCUS(self.tlb)
       endif
       xmanager,'dm_plot',self.tlb,cleanup='dm_plot_Exit',event_handler='dm_plot_event',/no_block
    endif else begin
       self.menumargin = 0
       self->draw,/nototop,/view
    endelse
    if widget_info(self.mbar[1],/valid_id) then begin
       geom = widget_info(self.mbar[1],/geometry)
       self.menumargin = geom.ysize
    endif
    return,1
end

;class definition
pro dm_plot__define
    struct={dm_plot,        $   ;class name
      group_leader:     0L, $   ;group leader of this object
      parentobj: obj_new(), $   ;parent object
      parenthandler:    '', $   ;event handler of parent object,default is 'event'
      path:             '', $   ;working directory
      tlb:              0L, $   ;identifier of top level base
      compound:         0b, $   ;1-compound widget 0-stand-alone plot window
      animation: bytarr(4), $   ;flags for [animation,pause,started at least once,cut or slice started at least once]
      animdir:          0b, $   ;animation direction 0:default 1:reversed
      mbar:      lonarr(2), $   ;[menu bar wid,menu bar separator wid]
      menumargin:       0s, $   ;save the menu bar margin for unix OP   
      xran:    dblarr(2,2), $   ;xrange [*,0]-current range [*,1]-current log range
      yran:    dblarr(2,2), $   ;yrange
      zran:    dblarr(2,2), $   ;zrange
      iran:    dblarr(2,2), $   ;irange for 2d plots, shown in color bar
      zoomstack: ptr_new(), $   ;points to a [4,*] array, stores the zoom history by mouse, change to log scale will clear this history
      zmin:             0e, $   ;zmin for contour plot and surface plot
      zmax:             0e, $   ;zmax
      plotWin:          0L, $   ;draw widget
      tooltip:   bytarr(3), $   ;flags for tooltip flag [popup, zoom, rotation]
      motion_events:    0b, $   ;0-doesn't allow draw motion events 1-allow
      parent_events:    0b, $   ;0-doesn't send any events to parent 1-yes
      render_method:    0b, $   ;text rendering method 0-texture 1-triangles
      font:      objarr(9), $   ;font  0:axis ticks 1:xtitle 2:ytitle 3:ztitle 4:title 5:legend 6:cursorpos 7:cornertxt 8:color bar title
      fsize:     intarr(9), $   ;font size
      fname0:    ptr_new(), $   ;store all availbale real font names
      fname1:    ptr_new(), $   ;store shown font names in dialog input windows
      axisthick:      1.5e, $   ;axis thickness
      qoffsetthreshold: 0e, $   ;qoffset range threshold for renaming axis titles, default 0.5
      title:     obj_new(), $   ;title
      xtit:      obj_new(), $   ;xtitle
      ytit:      obj_new(), $   ;ytitle
      ztit:      obj_new(), $   ;ztitle
      ltit:      obj_new(), $   ;legend title
      cbtit:     obj_new(), $   ;colbar title
      wtit:             '', $   ;window title
      xlog:             0b, $   ;log10 scale x flag
      ylog:             0b, $   ;log10 scale y flag
      zlog:             0b, $   ;log10 scale z flag
      ilog:             0b, $   ;log10 scale i flag    shown in colorbar
      tickmajor: intarr(8), $   ;[x axis, y axis, z axis, cbar axis,x log,...]--tick major number
      tickminor: intarr(8), $   ;[x axis, y axis, z axis, cbar axis,x log,...]--tick minor number
      ticklen:   fltarr(6), $   ;[x axis, y axis, z axis, cbar axis,x iso, y iso]--major tick length
      subticklen:fltarr(6), $   ;[x axis, y axis, z axis, cbar axis,x iso, y iso]--minor tick length
      hideAxes:         0b, $   ;if set, x,y,z axes will be hidden, excluding the intensity bar
      volclip:          0s, $   ;volume mask, -1 none
      drawWin:   obj_new(), $   ;draw window object
      drawViewGp:obj_new(), $   ;contains drawViewGp and tranView, used for saving animation which requires drawing the tranView
      drawView:  obj_new(), $   ;draw view object
      drawModel: obj_new(), $   ;draw model object
      drawGroup: obj_new(), $   ;contains all moveable graphic atoms, for surface rotation
      tranView:  obj_new(), $   ;transparent view for zoom box
      tranModel: obj_new(), $   ;model object for zoom box
      zoomBox:   obj_new(), $   ;zoom box, a polyline object
      sliceBox:  obj_new(), $   ;slice box, a polygon object
      trackBall: obj_new(), $   ;trackall object for rotation
      xgrid:     obj_new(), $   ;xgrid lines
      ygrid:     obj_new(), $   ;ygrid lines
      zgrid:     obj_new(), $   ;zgrid lines
      gridlinestyle:    0s, $   ;grid linestyle
      gridthick:      1.0e, $   ;grid thickness
      gridontop:        1b, $   ;2d grid position, default on top
      showxgrid:        0b, $   ;show xgrid flag
      showygrid:        0b, $   ;show ygrid flag
      showzgrid:        0b, $   ;show zgrid flag
      cursorpos: obj_new(), $   ;cursor position status text object
      cornertxt: obj_new(), $   ;lower corner text object,same position and style as cursorpos
      showcpos:         0b, $   ;flag for showing cursor position status text
      drawLegend:obj_new(), $   ;legends
      moveLegend:       0b, $   ;flag for legend movement
      hideLegend:       0b, $   ;hide legend flag
      legdOffset:fltarr(3), $   ;offset for legend movement, legdOffset[2] saves the starting center of the sliceBox
      legdpos:   fltarr(2), $   ;position of the legend
      legdoutlinethick: 0e, $   ;legend outline thickness
      legdshowoutline:  0b, $   ;flag for showing the legend outline
      legdshowfill:     0b, $   ;flag for showing filled background
      hideIntbar:       0b, $   ;flag for showing the intensity bar in 2d contour plot
      plotInfo:  ptr_new(), $   ;plot informations
      drawxAxis: objarr(4), $   ;x axis
      drawyAxis: objarr(4), $   ;y axis
      drawzAxis: obj_new(), $   ;z axis
      colBar:    obj_new(), $   ;color bar
      cbarpos:   fltarr(2), $   ;color bar location with respect to the right most axis [left, right], default=[0.08, 0.16]
      gamma:            1e, $   ;gamma value for the color palette, applied to all color palette, default is 1.0
      vt_col:           0b, $   ;polygon empty grid vertex color method 0: corner 1: average of minimum 2 neighbors 2: average of minimum 3 neightbors     
      isotropic:        0b, $   ;1-isotropic 0-aspect
      iso3dtype:        0b, $   ;0-xy only 1-xyz
      keep:             0b, $   ;1: keep this plot  0:open to new plots
      extragap:  fltarr(4), $   ;[left,right,top,bottom]  extra boundary gap
      viewplane: fltarr(4), $   ;view plane rectangle
      printer:   obj_new(), $   ;printer
      select:    obj_new(), $   ;selected object
      default:  fltarr(12), $   ;default values for [symsize,thick,shading,coltable,xsize,ysize,r,g,b,animation intervals(spin,slice,dualplot)]
      misscol:          0b, $   ;flag for missing data color in saved file, default is white:1
      bgcol:            0b, $   ;flag for background color, default is white(1) 
      papercol:         0b, $   ;flag for paper background color, default is white(1)
      isolatin1:        0b, $   ;flag for using iso latin 1 font encoding in postscript files
      vector:           0b, $   ;flag for using bitmap or vector output in saving postscript files 0:bitmap 1:vector
      vtrm_pt:          0b, $   ;flag for vect_text_rendering_method for postscript saving 0-primitive text 1-triangle
      textsize:  ptr_new(), $   ;to store the actual size of the text fonts, point to a string array
      tickstyle:        0b, $   ;0-idl default tick string format 1-use dm_to_string
      mpeglicense:      0b, $   ;0-mpeg not licensed  1-mpeg licensed
      resolution:  [0d,0d], $   ;resolution
      textadjustinfo:   '', $   ;special character info
      cuttype:          0s, $   ;-1 no cut, 0-cut along x, 1-cut along y, 2-arbitrary direction
      cutinfo:   fltarr(3), $   ;[width,step,slope]   
      cutcolor:         0b, $   ;0-use default average 1-use black or white
      fixcutrange:      0b, $   ;flag for fixing the cut range  0-automatic adjusting 1-fixed
      slicetype:        0s, $   ;-1 no slice, 0-x slice, 1-y slice, 2-z slice
      sliceinfo:        0e, $   ;width
      cs_resl:   fltarr(6), $   ;cut [0:2] and slice [3:5] title value resolution
      csplotobj: obj_new(), $   ;cut or slice plot window
      ptr_movie: ptr_new(), $   ;for movie operation
      info:      ptr_new(), $   ;self info
      helpfile1:        '', $   ;help file, programming
      helpfile2:        '', $   ;help file, latex commands
      idl_version:      0e, $   ;save the IDL version number
      enotebook:        0b  $   ;use Rob's enotebook
    }
end