<?php echo $a['content'];?>
<script type="text/javascript">
    var <?php echo $a['js_object'];?> = new BxDolStudioFormsForms({
        sActionUrl: 'http://localhost/seha/grid.php',
        sPageUrl: 'http://localhost/seha/studio/builder_forms.php?page=forms',
        sObjNameGrid: '<?php echo $a['grid_object'];?>',
        sParamsDivider: '<?php echo $a['params_divider'];?>',
        sTextSearchInput: 'Search...'
    });
</script>