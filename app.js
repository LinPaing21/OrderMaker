var app = new Vue({
    el: '#app',
    data: {
        orderData: {
            name: '',
            qty: '',
        },
        items: [],
        errorStatus: {
            nameStatus: false,
            qtyStatus: false
        }
    },
    methods: {
        addOrder() {
            this.errorStatus.nameStatus = this.orderData.name ? false : true
            this.errorStatus.qtyStatus = this.orderData.qty ? false : true

            if (!this.errorStatus.nameStatus && !this.errorStatus.qtyStatus) {
                this.items.push({
                    id: this.items.length + 1,
                    name: this.orderData.name,
                    qty: this.orderData.qty,
                })

                this.clear()
            }else {
                return 0;
            }
            
        },
        // clear inputs 
        clear() {
            this.orderData.name = '',
            this.orderData.qty = '',
            this.errorStatus.nameStatus = false,
            this.errorStatus.qtyStatus = false
        },
        remove(item) {
            this.items.splice(item, 1)
            // re format id
            this.items.map((i)=>{
                i.id = this.items.indexOf(i)+1
            })
        }
    }
})