jQuery(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/global",function(i,e){if(i.hasClass("premium-gCursor-yes"))if(!(i.data("pa_disable_cursor_on")||[]).includes(elementorFrontend.getCurrentDeviceMode())){var n=i.data("element_type"),t=i.data("id"),s={},o="section"===n?i.hasClass("elementor-inner-section"):i.closest(".elementor-section").hasClass("elementor-inner-section"),l={isInnerSection:o},r=o?"inner":"top";if(o&&(l.$innerSec="section"===n?i:i.closest(".elementor-inner-section"),l.innerSecId=l.$innerSec.data("id"),l.$parentCol=l.$innerSec.closest(".elementor-top-column"),l.parentColId=l.$parentCol.data("id"),l.$parentSec=l.$parentCol.closest(".elementor-top-section"),l.parentSecId=l.$parentSec.data("id")),"section"!==n&&(l.$section=i.closest(".elementor-"+r+"-section"),"widget"===n&&(l.$col=i.closest(".elementor-"+r+"-column"))),l.colId=l.$col?l.$col.data("id"):"",l.sectionId=l.$section?l.$section.data("id"):"",function(e,n){elementorFrontend.isEditMode();var t=i.find("#premium-global-cursor-"+n),o=i.find("#premium-global-cursor-temp-"+n),r=0!==t.length||0!==o.length;elementorFrontend.isEditMode()&&r?(s=t.data("gcursor"),"widget"!==e||s||(s=o.data("gcursor"))):s=i.data("gcursor");if(!s)return;if(s.eleInfo=l,s.elemId=n,0!==Object.keys(s).length)}(n,t),!s)return!1;elementorFrontend.isEditMode()||!i.data("pa_mobile_disabled")?elementorFrontend.waypoint(i,function(){new paCustomCursorHandler(n,i,s).generateCursor()}):i.removeClass("premium-gCursor-yes")}else i.removeClass("premium-gCursor-yes")})})
;