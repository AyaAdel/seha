<ul class="bx-menu-toolbar">
    <?php if(is_array($a['bx_repeat:menu_items'])) for($i=0; $i<count($a['bx_repeat:menu_items']); $i++){ ?>
        <li class="bx-menu-tab-<?php echo $a['bx_repeat:menu_items'][$i]['name'];?>  <?php echo $a['bx_repeat:menu_items'][$i]['class_add'];?>">
            <a href="<?php echo $a['bx_repeat:menu_items'][$i]['link'];?>" target="<?php echo $a['bx_repeat:menu_items'][$i]['target'];?>" onclick="<?php echo $a['bx_repeat:menu_items'][$i]['onclick'];?>" class="bx-def-margin-sec-left bx-def-font-contrasted" title="<?php echo $a['bx_repeat:menu_items'][$i]['title'];?>"><?php if($a['bx_repeat:menu_items'][$i]['bx_if:icon']['condition']){ ?><i class="sys-icon <?php echo $a['bx_repeat:menu_items'][$i]['bx_if:icon']['content']['icon'];?> bx-def-round-corners bx-def-font-contrasted"></i><?php } ?><?php if($a['bx_repeat:menu_items'][$i]['bx_if:image']['condition']){ ?><img style="background-image:url(<?php echo $a['bx_repeat:menu_items'][$i]['bx_if:image']['content']['icon_url'];?>)" src="http://localhost/seha/template/images/icons/spacer.gif" /><?php } ?></a>
        </li>
    <?php } else if(is_string($a['bx_repeat:menu_items'])) echo $a['bx_repeat:menu_items']; ?>
</ul>