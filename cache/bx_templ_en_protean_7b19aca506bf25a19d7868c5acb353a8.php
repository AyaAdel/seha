<div id="bx-uploader-file-{storage_object}-{file_id}" class="bx-uploader-ghost">
    <div class="bx-uploader-ghost-preview bx-def-padding-right bx-def-padding-top">
        <img src="{file_icon}" class="bx-def-border" onload="$(this).css('background-image', 'url()')" />
    </div>
    <div class="bx-uploader-ghost-form ">
        <div class="bx-uploader-ghost-form-filename bx-def-padding-top bx-def-padding-bottom bx-def-font-grayed">{file_name}</div>
        <?php echo $a['nested_form'];?>
        <div class="bx-uploader-ghost-form-actions bx-def-margin-top bx-clearfix"><a class="bx-btn bx-btn-small" href="javascript:void(0);" onclick="{js_instance_name}.deleteGhost('{file_id}')">Delete</a></div>
    </div>
    <div class="bx-clear"></div>
</div>