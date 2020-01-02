<div id="bx-uploader-file-{storage_object}-{file_id}" class="bx-uploader-ghost bx-def-margin-sec-top bx-clearfix">
    <input type="hidden" name="<?php echo $a['name'];?>" value="{file_id}" />
    <div class="bx-ug-icon bx-def-margin-sec-right">
        <img src="{file_icon}" class="bx-def-round-corners bx-base-text-icon bx-base-text-icon-{file_id}" />
    </div>
    <div class="bx-ug-content">
		<div>
	        <a class="bx-btn bx-btn-small bx-def-margin-sec-right" href="javascript:void(0);" onclick="javascript: {js_instance_name}.deleteGhost('{file_id}');">Delete</a>
		</div>
    </div>
</div>