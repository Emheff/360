AFRAME.registerComponent("set-image",{schema:{on:{type:"string"},target:{type:"selector"},src:{type:"string"},dur:{type:"number",default:3e3}},init:function(){var t=this.data,e=this.el;this.setupFadeAnimation(),e.addEventListener(t.on,function(){t.target.emit("set-image-fade"),setTimeout(function(){t.target.setAttribute("material","src",t.src)},t.dur)})},setupFadeAnimation:function(){var t=this.data,e=this.data.target;e.dataset.setImageFadeSetup||(e.dataset.setImageFadeSetup=!0,e.setAttribute("animation__fade",{property:"material.color",startEvents:"set-image-fade",dir:"alternate",dur:t.dur,from:"#a10022",to:"black"}))}});