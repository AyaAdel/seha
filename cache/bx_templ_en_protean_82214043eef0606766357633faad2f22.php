<?php echo $a['content'];?>
<script type="text/javascript">
    var <?php echo $a['js_object'];?> = new BxDolStudioFormsSearchFields({
        sActionUrl: 'http://localhost/seha/grid.php',
        sPageUrl: '<?php echo $a['page_url'];?>',
        sObjNameGrid: '<?php echo $a['grid_object'];?>',
        sParamsDivider: '<?php echo $a['params_divider'];?>',
        sTextSearchInput: 'Search...'
    });
</script>