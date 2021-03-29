import { BehaviorSubject } from 'rxjs';

global.myMfe = {
    store: {
        productId: new BehaviorSubject(321),
        images: new BehaviorSubject([])
    },
    components: {},
    loadComponent(name) {
       document.querySelectorAll(`mfe-component[name=${name}]`).forEach(el => {
           // so that component does not load again
           if (!el.getAttribute('loaded')) {
               el.setAttribute('loaded', true);
           }
           const props = {
               store: this.store
           };
           // loop through all the attribute passed to custom element and build props
           Array.from(el.attributes).forEach(attr => {
               props[attr.name] = attr.value;
           });
           // productId will be passed as  'productid'
           console.log(props, 'props');
           this.components[name].create(el, props);
       })
    },
    registerComponent(name, info) {
        this.components[name] = info;
        this.loadComponent(name);

        // if (name === 'images') {
        //     info.create(document.getElementById('images'));
        // } else {
        //     info.create(document.getElementById('checkout'), {
        //         productId: 123
        //     });
        // }    
    }
}