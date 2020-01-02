<?php echo $a['content'];?>
<script type="text/javascript">
    var <?php echo $a['js_object'];?> = new BxDolStudioPolyglotEtemplates({
        sActionUrl: 'http://localhost/seha/grid.php',
        sObjNameGrid: '<?php echo $a['grid_object'];?>',
        sTextSearchInput: 'Search...'
    });
</script>