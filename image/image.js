global.myMfe.registerComponent('images', {
   create(node, props) {
       node.innerHTML = 'This is image';
       props.store.images.subscribe({
           next: val => {
              node.innerHTML = `Images are ${val.join(', ')}`;
           }
       })
   }
});