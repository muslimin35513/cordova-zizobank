(function framework7ComponentLoader(e,o){void 0===o&&(o=!0);document,window;var n=e.$,i=(e.Template7,e.utils),t=(e.device,e.support,e.Class,e.Modal,e.ConstructorMethods,e.ModalMethods,{toggleClicked:function(e){var o=e.closest(".accordion-item").eq(0);o.length||(o=e.parents("li").eq(0));var n=e.parents(".accordion-item-content").eq(0);n.length&&n.parents(o).length||e.parents("li").length>1&&e.parents("li")[0]!==o[0]||this.accordion.toggle(o)},open:function(e){var o=this,t=n(e),c=!1;function r(){c=!0}if(t.trigger("accordion:beforeopen",{prevent:r},r),o.emit("accordionBeforeOpen",t[0],r),!c){var a=t.parents(".accordion-list").eq(0),s=t.children(".accordion-item-content");if(s.removeAttr("aria-hidden"),0===s.length&&(s=t.find(".accordion-item-content")),0!==s.length){var d=a.length>0&&t.parent().children(".accordion-item-opened");d.length>0&&o.accordion.close(d),s.transitionEnd((function(){t.hasClass("accordion-item-opened")?(s.transition(0),s.css("height","auto"),i.nextFrame((function(){s.transition(""),t.trigger("accordion:opened"),o.emit("accordionOpened",t[0])}))):(s.css("height",""),t.trigger("accordion:closed"),o.emit("accordionClosed",t[0]))})),s.css("height",s[0].scrollHeight+"px"),t.trigger("accordion:open"),t.addClass("accordion-item-opened"),o.emit("accordionOpen",t[0])}}},close:function(e){var o=this,t=n(e),c=!1;function r(){c=!0}if(t.trigger("accordion:beforeclose",{prevent:r},r),o.emit("accordionBeforeClose",t[0],r),!c){var a=t.children(".accordion-item-content");0===a.length&&(a=t.find(".accordion-item-content")),t.removeClass("accordion-item-opened"),a.attr("aria-hidden",!0),a.transition(0),a.css("height",a[0].scrollHeight+"px"),a.transitionEnd((function(){t.hasClass("accordion-item-opened")?(a.transition(0),a.css("height","auto"),i.nextFrame((function(){a.transition(""),t.trigger("accordion:opened"),o.emit("accordionOpened",t[0])}))):(a.css("height",""),t.trigger("accordion:closed"),o.emit("accordionClosed",t[0]))})),i.nextFrame((function(){a.transition(""),a.css("height",""),t.trigger("accordion:close"),o.emit("accordionClose",t[0])}))}},toggle:function(e){var o=n(e);0!==o.length&&(o.hasClass("accordion-item-opened")?this.accordion.close(e):this.accordion.open(e))}}),c={name:"accordion",create:function(){i.extend(this,{accordion:{open:t.open.bind(this),close:t.close.bind(this),toggle:t.toggle.bind(this)}})},clicks:{".accordion-item .item-link, .accordion-item-toggle, .links-list.accordion-list > ul > li > a":function(e){t.toggleClicked.call(this,e)}}};if(o){if(e.prototype.modules&&e.prototype.modules[c.name])return;e.use(c),e.instance&&(e.instance.useModuleParams(c,e.instance.params),e.instance.useModule(c))}return c}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
