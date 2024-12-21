import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';



interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // slug:string;
  marca:string,
  defImageurl:string;
  // variants:Array<[]>;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(JSON.parse(localStorage.getItem('cartItemsElektra') || '[]'));

  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const addItem = (product: Omit<CartItem, 'quantity'>) => {
    const existingItem = items.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
    saveItems();
  };
  //agregar de varios items a la vez
  const addSeveralItems = (product: Omit<CartItem, 'quantity'>,severalitems:number) => {
    const existingItem = items.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = existingItem.quantity+severalitems;
    } else {
      items.value.push({ ...product, quantity: severalitems });
    }
    saveItems();
  };


  const removeItem = (productId: string) => {
    const itemIndex = items.value.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
      items.value.splice(itemIndex, 1);
    }


      const router=useRouter()  
      if(totalItems.value<=0){
                router.back()
      }

    saveItems();
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const item = items.value.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      if(item.quantity<=0){
        removeItem(productId)

      const router=useRouter()  
      if(totalItems.value<=0){
                router.back()
      }
    
      }
    }
    saveItems();
  };

  const clearCart=() => {
    items.value=[]
    saveItems()
  }

  const saveItems = () => {
    localStorage.setItem('cartItemsElektra', JSON.stringify(items.value));
  };

  watch(items, saveItems, { deep: true });

  return {
    items,
    totalPrice,
    totalItems,
    addItem,
    removeItem,
    updateQuantity,
    addSeveralItems,
    clearCart
  };
});
