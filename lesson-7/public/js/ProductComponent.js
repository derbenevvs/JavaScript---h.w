Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `
    <div class="product">
    <a class="product_a_img" href="#">
        <img class="produce_img" src="img" alt="товар">
    </a>
    <a class="product_a_txt" href="#">
        <h4 class="product_h4">{{product.product_name}}</h4>
        // <p class="product_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        //     iure?
        // </p>
        <p class="price">{{product.price}}</p>
    </a>
    <div class="add-box">
        <a class="add" href="#">
            <img class="cart-add" src="img/Vector (8).png" alt="cart">
            <p class="add-txt">Add to Cart</p>
        </a>
    </div>
</div>
      `
});
Vue.component('product', {
    props: ['product'],
    template: `

    <div class="product">
    <a class="product_a_img" href="#">
        <img class="produce_img" src="img" alt="товар">
    </a>
    <a class="product_a_txt" href="#">
        <h4 class="product_h4">{{product.product_name}}</h4>
        // <p class="product_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        //     iure?
        // </p>
        <p class="price">{{product.price}}</p>
    </a>
    <div class="add-box">
        <a class="add" href="#">
            <img class="cart-add" src="img/Vector (8).png" alt="cart">
            <p class="add-txt">Add to Cart</p>
        </a>
    </div>
</div>
    `
})