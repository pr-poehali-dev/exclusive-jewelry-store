import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stone: string;
  metal: string;
  image: string;
  description: string;
}

const categories = ['Все', 'Кольца', 'Серьги', 'Колье', 'Браслеты'];

const products: Product[] = [
  {
    id: 1,
    name: 'Кольцо "Императорское"',
    category: 'Кольца',
    price: 2850000,
    stone: 'Бриллиант 5 карат, цвет D, чистота IF',
    metal: 'Платина 950°',
    image: 'https://cdn.poehali.dev/projects/9d290415-a6c9-45c2-96e0-9e36c7da2c0b/files/4c3d95aa-6b68-439f-8f3f-9448fa0f6615.jpg',
    description: 'Эксклюзивное кольцо с центральным бриллиантом класса экстра'
  },
  {
    id: 2,
    name: 'Серьги "Созвездие"',
    category: 'Серьги',
    price: 1450000,
    stone: 'Бриллианты 3.2 карат, цвет E, чистота VVS1',
    metal: 'Белое золото 750°',
    image: 'https://cdn.poehali.dev/projects/9d290415-a6c9-45c2-96e0-9e36c7da2c0b/files/4c3d95aa-6b68-439f-8f3f-9448fa0f6615.jpg',
    description: 'Изящные серьги с россыпью природных бриллиантов'
  },
  {
    id: 3,
    name: 'Колье "Империя"',
    category: 'Колье',
    price: 4200000,
    stone: 'Изумруды 12 карат, бриллианты 8 карат',
    metal: 'Желтое золото 750°',
    image: 'https://cdn.poehali.dev/projects/9d290415-a6c9-45c2-96e0-9e36c7da2c0b/files/a7f36747-2868-4e28-91e0-585f140169a0.jpg',
    description: 'Роскошное колье с колумбийскими изумрудами'
  },
  {
    id: 4,
    name: 'Браслет "Вечность"',
    category: 'Браслеты',
    price: 890000,
    stone: 'Сапфиры 4 карат, бриллианты 2 карат',
    metal: 'Платина 950°',
    image: 'https://cdn.poehali.dev/projects/9d290415-a6c9-45c2-96e0-9e36c7da2c0b/files/a7f36747-2868-4e28-91e0-585f140169a0.jpg',
    description: 'Элегантный браслет с чередованием камней'
  },
  {
    id: 5,
    name: 'Кольцо "Аврора"',
    category: 'Кольца',
    price: 3500000,
    stone: 'Розовый бриллиант 3 карат, чистота FL',
    metal: 'Розовое золото 750°',
    image: 'https://cdn.poehali.dev/projects/9d290415-a6c9-45c2-96e0-9e36c7da2c0b/files/4c3d95aa-6b68-439f-8f3f-9448fa0f6615.jpg',
    description: 'Уникальное кольцо с редким розовым бриллиантом'
  },
  {
    id: 6,
    name: 'Серьги "Лунный свет"',
    category: 'Серьги',
    price: 1850000,
    stone: 'Жемчуг South Sea 16мм, бриллианты 1 карат',
    metal: 'Белое золото 750°',
    image: 'https://cdn.poehali.dev/projects/9d290415-a6c9-45c2-96e0-9e36c7da2c0b/files/4c3d95aa-6b68-439f-8f3f-9448fa0f6615.jpg',
    description: 'Классические серьги с жемчугом высшего класса'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-gold">LUMIÈRE</h1>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-sm hover:text-gold transition-colors">Каталог</a>
            <a href="#custom" className="text-sm hover:text-gold transition-colors">Индивидуальный заказ</a>
            <a href="#delivery" className="text-sm hover:text-gold transition-colors">Доставка</a>
            <a href="#payment" className="text-sm hover:text-gold transition-colors">Оплата</a>
            <a href="#contacts" className="text-sm hover:text-gold transition-colors">Контакты</a>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingBag" size={20} />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gold text-black">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg bg-card border-border">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl text-gold">Корзина</SheetTitle>
              </SheetHeader>
              
              <div className="mt-8 space-y-4">
                {cartItems.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">Корзина пуста</p>
                ) : (
                  <>
                    {cartItems.map((item, index) => (
                      <Card key={`${item.id}-${index}`} className="bg-background border-border">
                        <CardContent className="p-4 flex items-center gap-4">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="font-serif text-sm">{item.name}</h4>
                            <p className="text-xs text-gold">{item.price.toLocaleString('ru-RU')} ₽</p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-lg font-serif">
                        <span>Итого:</span>
                        <span className="text-gold">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                      </div>
                      <Button className="w-full bg-gold text-black hover:bg-gold/90 font-medium">
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background z-10" />
        <img 
          src="https://cdn.poehali.dev/projects/9d290415-a6c9-45c2-96e0-9e36c7da2c0b/files/fdbe7e3c-8aad-41e7-a3a5-6dcae0da5c2f.jpg" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        
        <div className="relative z-20 text-center px-4 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-serif font-light text-gold mb-6">
            LUMIÈRE
          </h2>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-light tracking-wide">
            Эксклюзивные ювелирные изделия
          </p>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Природные камни экстра класса · Авторский дизайн · Индивидуальные решения
          </p>
          <Button 
            size="lg" 
            className="bg-gold text-black hover:bg-gold/90 font-medium text-base px-8"
            onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть коллекцию
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gold" />
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-serif text-gold mb-4">Каталог</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждое изделие создано вручную с использованием природных камней высшего качества
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat 
                  ? "bg-gold text-black hover:bg-gold/90" 
                  : "border-border hover:border-gold hover:text-gold"
                }
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group bg-card border-border overflow-hidden hover:border-gold transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xl font-serif text-foreground group-hover:text-gold transition-colors">
                      {product.name}
                    </h4>
                    <Badge variant="outline" className="border-gold text-gold shrink-0">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><span className="text-foreground">Камень:</span> {product.stone}</p>
                    <p><span className="text-foreground">Металл:</span> {product.metal}</p>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif text-gold">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="bg-gold text-black hover:bg-gold/90"
                    >
                      <Icon name="ShoppingBag" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="custom" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Sparkles" size={48} className="text-gold mx-auto mb-6" />
          <h3 className="text-4xl font-serif text-gold mb-6">Индивидуальный заказ</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Создайте уникальное ювелирное изделие по вашему эскизу. Наши мастера воплотят 
            любую идею, используя только природные камни экстра класса и драгоценные металлы 
            высшей пробы.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <Icon name="Pencil" size={32} className="text-gold mx-auto" />
              <h4 className="font-serif text-lg">Эскиз</h4>
              <p className="text-sm text-muted-foreground">Разработка уникального дизайна</p>
            </div>
            <div className="space-y-2">
              <Icon name="Gem" size={32} className="text-gold mx-auto" />
              <h4 className="font-serif text-lg">Подбор камней</h4>
              <p className="text-sm text-muted-foreground">Только природные камни экстра класса</p>
            </div>
            <div className="space-y-2">
              <Icon name="Wrench" size={32} className="text-gold mx-auto" />
              <h4 className="font-serif text-lg">Изготовление</h4>
              <p className="text-sm text-muted-foreground">Ручная работа мастеров</p>
            </div>
          </div>
          <Button size="lg" className="bg-gold text-black hover:bg-gold/90">
            Оставить заявку
          </Button>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-serif text-gold mb-12 text-center">Доставка</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border p-8">
              <Icon name="Truck" size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif mb-3">По России</h4>
              <p className="text-muted-foreground mb-4">
                Бесплатная доставка курьером в бронированном автомобиле с охраной. 
                Страхование на полную стоимость изделия.
              </p>
              <p className="text-sm text-gold">Срок доставки: 1-3 дня</p>
            </Card>
            
            <Card className="bg-card border-border p-8">
              <Icon name="Plane" size={40} className="text-gold mb-4" />
              <h4 className="text-xl font-serif mb-3">Международная</h4>
              <p className="text-muted-foreground mb-4">
                Доставка в любую точку мира с полным сопровождением. Таможенное оформление 
                и страхование включены.
              </p>
              <p className="text-sm text-gold">Срок доставки: 3-7 дней</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="payment" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-serif text-gold mb-12 text-center">Оплата</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 text-center">
              <Icon name="CreditCard" size={40} className="text-gold mx-auto mb-4" />
              <h4 className="font-serif text-lg mb-2">Банковские карты</h4>
              <p className="text-sm text-muted-foreground">Visa, Mastercard, МИР</p>
            </Card>
            
            <Card className="bg-card border-border p-6 text-center">
              <Icon name="Building" size={40} className="text-gold mx-auto mb-4" />
              <h4 className="font-serif text-lg mb-2">Банковский перевод</h4>
              <p className="text-sm text-muted-foreground">Для юридических лиц</p>
            </Card>
            
            <Card className="bg-card border-border p-6 text-center">
              <Icon name="Wallet" size={40} className="text-gold mx-auto mb-4" />
              <h4 className="font-serif text-lg mb-2">Криптовалюта</h4>
              <p className="text-sm text-muted-foreground">BTC, ETH, USDT</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-serif text-gold mb-8">Контакты</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={24} className="text-gold" />
              <p className="text-lg">Москва, ул. Тверская, 1</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" size={24} className="text-gold" />
              <p className="text-lg">+7 (495) 123-45-67</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Mail" size={24} className="text-gold" />
              <p className="text-lg">info@lumiere.ru</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Clock" size={24} className="text-gold" />
              <p className="text-lg">Ежедневно, 10:00 — 21:00</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 LUMIÈRE. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}