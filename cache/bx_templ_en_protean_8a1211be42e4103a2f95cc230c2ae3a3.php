<script>
    $(document).ready(function(){
        <?php echo $a['uploader_instance_name'];?> = new BxDolUploaderHTML5('<?php echo $a['engine'];?>', '<?php echo $a['storage_object'];?>', '<?php echo $a['uniq_id'];?>', {
            'multiple': <?php echo $a['multiple'];?>,
            'content_id': '<?php echo $a['content_id'];?>',
            'images_transcoder' : '<?php echo $a['images_transcoder'];?>',
            'storage_private' : '<?php echo $a['storage_private'];?>',
            'template_error_msg': '<div class="bx-uploader-msg-err">{error}</div>',
            'template_ghost': <?php echo $a['template_ghost'];?>
        });
    });
</script>