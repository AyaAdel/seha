<div class="bx-std-menu-top-wrp">
    <script defer type="text/javascript">
    <!--
    var oBxDolStudioMenuTop = new BxDolStudioMenuTop({
        sActionUrl: 'http://localhost/seha/studio/ajax.php'
    });
    -->
    </script>
    <?php if(is_array($a['bx_repeat:menus'])) for($i=0; $i<count($a['bx_repeat:menus']); $i++){ ?>
        <div id="bx-std-menu-top bx-std-menu-top-<?php echo $a['bx_repeat:menus'][$i]['name'];?>" class="bx-std-menu-top bx-std-menu-top-<?php echo $a['bx_repeat:menus'][$i]['name'];?> bx-def-font-h1 bx-def-font-contrasted bx-def-box-sizing"><?php echo $a['bx_repeat:menus'][$i]['content'];?></div>
    <?php } else if(is_string($a['bx_repeat:menus'])) echo $a['bx_repeat:menus']; ?>
</div>