;the strategy is to figure out the unique colors in a 3xmxn png file
;and replace the image by a single plane PNG file
;then replace the boundary with a unique color which will be transparent
pro png_trans,infname,outfname=outfname
    if n_elements(infname) eq 0 then infname='test.png'
    if n_elements(outfname) eq 0 then outfname='trans_'+infname

    ;read the png file
    READ_PNG, infname, Image,r,g,b

    dim = size(Image,/dimension)
    if n_elements(dim) eq 3 then begin
        bgcolor = Image[[0,1,2]]
        r = intarr(256)-1 & b=r & g=r
        data = bytarr(dim[1],dim[2])
        ;figure out the unique colors
        current = 0
        for i=0,dim[1]-1 do begin
            for j=0,dim[2]-1 do begin
                index = where(r eq Image[0,i,j] and g eq Image[1,i,j] and b eq Image[2,i,j],count)
                if count ne 0 then begin
                    data[i,j] = index[0]
                endif else begin
                    data[i,j] = current
                    if current le 254 then begin    ;255 is reserved for background
                        r[current]=Image[0,i,j]
                        g[current]=Image[1,i,j]
                        b[current]=Image[2,i,j]
                        current = 254<(current+1)
                    endif
                endelse
            endfor
        endfor
        r = byte(r) & g = byte(g) & b = byte(b)
        if current eq 254 then ok = dialog_message(['There are more than 255 unique colors in this image.',$
            'The transformed image may have lost some colors.'])
        bgcolor = (where(r eq bgcolor[0] and g eq bgcolor[1] and b eq bgcolor[2]))[0]
        if bgcolor eq -1 then bgcolor = 0b else bgcolor = byte(bgcolor)
    endif else begin
        data = Image
        bgcolor = data[0,0]
        index = where(data eq 255,count)
        if count ne 0 then data[index]=254b ;255 reserved for background
    endelse

    dim = size(data,/dimension)
    ;now replace the boundary background data to 255, crawling method
    data[0,0] = 255b
    crawl_boundary,data,0,0,dim,255b,bgcolor

    ; Create the transparent vector. Set all values to 255 (opaque).
    t = BytArr(256) + 255B

    ; Set the background value to 0
    t[255] = 0

    ; Create the PNG file.
    WRITE_PNG,outfname, data, r, g, b, TRANSPARENT = t
end


pro crawl_boundary,data,i,j,dim,transcolor,bgcolor
    up    = (i-1)>0
    down  = (i+1)<(dim[0]-1)
    left  = (j-1)>0
    right = (j+1)<(dim[1]-1)

    if up ne i and data[up,j] eq bgcolor then begin
        data[up,j] = transcolor
        crawl_boundary,data,up,j,dim,transcolor,bgcolor
    endif
    if down ne i and data[down,j] eq bgcolor then begin
        data[down,j] = transcolor
        crawl_boundary,data,down,j,dim,transcolor,bgcolor
    endif
    if left ne j and data[i,left] eq bgcolor then begin
        data[i,left] = transcolor
        crawl_boundary,data,i,left,dim,transcolor,bgcolor
    endif
    if right ne j and data[i,right] eq bgcolor then begin
        data[i,right] = transcolor
        crawl_boundary,data,i,right,dim,transcolor,bgcolor
    endif
end