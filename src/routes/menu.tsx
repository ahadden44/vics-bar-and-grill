import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import menuSteak from "@/assets/vics/nachos.webp";

type Item = { name: string; description: string; price: string };
type Category = { name: string; note?: string; items: Item[] };

const breakfast: Category[] = [
  {
    name: "Classic Plates",
    note: "Served Saturday and Sunday from 9:00 AM to Noon.",
    items: [
      { name: "Classic Breakfast Plate", description: "Two eggs any style, bacon or sausage, hash browns, and toast.", price: "$11.50" },
      { name: "Biscuits and Gravy", description: "Buttermilk biscuits topped with house sausage gravy and two eggs.", price: "$10.50" },
      { name: "Breakfast Burrito", description: "Scrambled eggs, sausage, cheddar, peppers, onions, and hash browns with salsa and sour cream.", price: "$11.95" },
      { name: "French Toast Stack", description: "Texas toast dipped in cinnamon batter, grilled and served with syrup.", price: "$9.95" },
      { name: "Breakfast Sandwich", description: "Egg, cheddar, and bacon on toasted sourdough. Add hash browns $2.", price: "$8.95" },
      { name: "Pancake Combo", description: "Two pancakes, two eggs, and your choice of bacon or sausage.", price: "$10.95" },
    ],
  },
];

const lunchDinner: Category[] = [
  {
    name: "Appetizers",
    note: "Sauces: Ranch, Spicy Buffalo, BBQ, Honey Mustard, Seasoned Sour Cream, Blue Cheese, Sweet & Sour, Sweet Chili.",
    items: [
      { name: "Fried Pickles", description: "Southern style fried pickles served with ranch.", price: "$10" },
      { name: "Stuffed Cheese Pretzel", description: "Soft pretzel filled with cheese, served with queso cheese sauce.", price: "$8.50" },
      { name: "Boneless Chicken Bites", description: "Served with choice of sauce and choice of chips or fries.", price: "$12" },
      { name: "Bone-In Chicken Wings", description: "Fried crispy wings with your choice of sauce, served with chips or fries.", price: "$13" },
      { name: "Cheese Curds", description: "Classic fried breaded cheese served with marinara.", price: "$11" },
      { name: "Cheese Quesadilla", description: "Flour tortilla layered with cheese, sautéed onions and tomatoes, served with salsa and sour cream. Add jalapeños $0.50. Add grilled chicken or spicy beef $3.", price: "$9.25" },
      { name: "Mini Tacos", description: "Topped with melted cheese, served with sour cream and chunky salsa.", price: "$12" },
      { name: "Jalapeño Poppers", description: "Fried with mild peppers and cheese.", price: "$11" },
      { name: "Fried Green Beans", description: "Beer battered and fried with a hint of heat, served with ranch.", price: "$10" },
      { name: "Chips and Salsa", description: "Fresh homemade chips with chunky salsa.", price: "$7" },
      { name: "Loaded Nachos", description: "Layered with spicy beef or chicken, jalapeños, shredded cheese, onions, lettuce, tomatoes, salsa and cheese sauce. Half order $8.", price: "$14" },
      { name: "Mozzarella Sticks", description: "Eight pieces served with marinara sauce.", price: "$11" },
    ],
  },
  {
    name: "Burgers",
    note: "Fresh, hand-pattied burger served on a toasted, buttery bun with tangy dill pickles and potato chips or french fries. Substitute turkey patty $1. Substitute veggie impossible $3. Additional patty $4.",
    items: [
      { name: "Hamburger", description: "Fresh hand-pattied burger on a toasted buttery bun with dill pickles and chips or fries. Add Swiss, American, Cheddar, or Pepper Jack $1.", price: "$10.50" },
      { name: "California Burger", description: "Fresh tomatoes, lettuce, raw onions, and mayo.", price: "$12" },
      { name: "Bacon Cheese Burger", description: "Complimented by smoked bacon and your choice of cheese.", price: "$12.50" },
      { name: "Bacon Jalapeño Burger", description: "Pepper Jack cheese, jalapeños, and smoked bacon.", price: "$13.25" },
      { name: "Black and Blue Burger", description: "Smothered with blue cheese and fresh cracked black pepper.", price: "$12.25" },
      { name: "Blue Cheddar Bacon Burger", description: "Smoked bacon, Cheddar cheese, and blue cheese.", price: "$13.25" },
      { name: "Mushroom Swiss Burger", description: "Buttery sautéed mushrooms and melted Swiss cheese.", price: "$13" },
      { name: "Western Burger", description: "BBQ sauce, smoked bacon, American or Cheddar, topped with an onion ring.", price: "$13.25" },
      { name: "Blue Moon Burger", description: "Buttery sautéed mushrooms, blue cheese, and fresh cracked pepper.", price: "$13.25" },
      { name: "Patty Melt Burger", description: "Fried onions and melted Swiss served on rye toast.", price: "$12" },
    ],
  },
  {
    name: "Fresh Salads",
    note: "Dressings: Balsamic Vinaigrette, Blue Cheese, Caesar, French, Italian Light, Ranch, and Thousand Island.",
    items: [
      { name: "Asian Lettuce Wraps", description: "Fresh lettuce with grilled diced chicken breast, almonds, carrots, lightly dressed with teriyaki sauce.", price: "$12.50" },
      { name: "Romaine Salad", description: "Shredded carrots, tomatoes, seasoned croutons, and cheese over romaine.", price: "$8.50" },
      { name: "Black and Blue Salad", description: "Romaine topped with grilled steak bites, cracked pepper, and blue cheese crumbles.", price: "$13.75" },
      { name: "Taco Salad", description: "Lettuce topped with spicy beef or diced chicken, jalapeños, tomatoes, onions, and shredded lettuce. Served with salsa and sour cream.", price: "$12.50" },
      { name: "Chicken Cobb Salad", description: "Smoked bacon, tomatoes, and blue cheese crumbles with grilled diced chicken breast.", price: "$12.50" },
    ],
  },
  {
    name: "Baskets",
    items: [
      { name: "Chicken Tenders Basket", description: "Crispy breaded strips of chicken served with barbecue sauce or ranch and fries.", price: "$10" },
      { name: "Steak Bite Basket", description: "Tender grilled steak bites served with ranch and fries.", price: "$13.75" },
      { name: "Shrimp Basket", description: "Crispy breaded shrimp with cocktail sauce and fries.", price: "$12.75" },
      { name: "Boar Bite Basket", description: "Pork drummies with barbecue sauce and fries.", price: "$12" },
      { name: "Fish and Chips Basket", description: "Breaded white fish filet served with tartar sauce and fries.", price: "$12.75" },
      { name: "Mini Corn Dog Basket", description: "State fair style mini corn dogs served with chips or fries.", price: "$10" },
      { name: "French Fry Basket", description: "Classic fries.", price: "$5" },
      { name: "Waffle Fry Basket", description: "Crispy waffle fries.", price: "$6" },
      { name: "Sweet Potato Basket", description: "Sweet potato fries.", price: "$6" },
      { name: "Onion Ring Basket", description: "Beer battered onion rings.", price: "$7" },
      { name: "Tater Tot Basket", description: "Crispy tater tots.", price: "$6" },
    ],
  },
  {
    name: "Sandwiches",
    note: "Served with tangy dill pickles and crispy potato chips or french fries.",
    items: [
      { name: "Grilled Chicken Breast", description: "Served with lettuce, tomato, and mayo.", price: "$11" },
      { name: "Chicken Tender Sandwich", description: "Crispy breaded chicken tenders with lettuce, tomato, and mayo.", price: "$11" },
      { name: "Crispy Fish Sandwich", description: "Breaded fish with lettuce and tomato, served with tartar sauce.", price: "$12.50" },
      { name: "Fish Tacos", description: "Two soft tacos with crispy cod, cabbage, garlic aioli, shredded cheese, chips and salsa.", price: "$13" },
      { name: "Grilled Cheese", description: "Melted cheese on Texas toast. Add ham or turkey $2. Add bacon and tomato $2.", price: "$10" },
      { name: "BLT", description: "Bacon, lettuce, and tomato with mayo on toasted Texas toast.", price: "$11" },
      { name: "Classic Club", description: "Smoked ham, turkey, bacon, lettuce, tomato, and mayo on toasted Texas toast.", price: "$12" },
      { name: "Hot Dog", description: "100% all-beef grilled hot dog served on a toasted bun.", price: "$8" },
    ],
  },
  {
    name: "Pizzas — 12 inch",
    note: "Thin-crust 12-inch pizzas baked hot and cut for sharing.",
    items: [
      { name: "Cheese", description: "Classic cheese pizza with plenty of melted mozzarella.", price: "$10" },
      { name: "Pepperoni", description: "A bar favorite topped with plenty of pepperoni and mozzarella.", price: "$11" },
      { name: "Pepperoni and Sausage", description: "Loaded with pepperoni, sausage, and gooey melted cheese.", price: "$12" },
      { name: "Six Pack", description: "House combo pizza stacked with a full spread of signature toppings.", price: "$13" },
      { name: "Inferno", description: "A spicy pie with bold heat in every bite.", price: "$13" },
      { name: "Deluxe", description: "A classic combination pizza with savory meats and vegetables.", price: "$13" },
    ],
  },
  {
    name: "Extras",
    note: "Add a little extra to your basket, burger, or sandwich order.",
    items: [
      { name: "Additional Sauces or Sauerkraut", description: "Perfect for dipping fries, wings, and sandwiches.", price: "$0.50" },
      { name: "Cheese", description: "Add a slice or extra melt to your favorite order.", price: "$1" },
      { name: "Bacon", description: "Smoked bacon to finish burgers, sandwiches, or salads.", price: "$2" },
      { name: "Side Salad", description: "A fresh side salad to round out the meal.", price: "$3" },
      { name: "Cole Slaw", description: "Cool, creamy slaw served on the side.", price: "$3" },
    ],
  },
];

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Vic's Bar & Grill" },
      { name: "description", content: "Explore our full menu of burgers, wings, steaks, and cold drinks at Vic's Bar & Grill." },
      { property: "og:title", content: "Menu — Vic's Bar & Grill" },
      { property: "og:description", content: "Burgers, wings, steaks, and cold drinks." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [tab, setTab] = useState<"breakfast" | "lunchdinner">("lunchdinner");
  const categories = tab === "breakfast" ? breakfast : lunchDinner;
  return (
    <>
      {/* Page Header with photo background */}
      <section className="relative overflow-hidden border-b-4 border-gold py-24 sm:py-32">
        <img
          src={menuSteak}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-[0.4em] text-gold">
            Eat &amp; Drink
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl">
            OUR MENU
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-[family-name:var(--font-body)] text-white/85">
            Choose Breakfast or Lunch &amp; Dinner, then scroll through the full menu.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: "breakfast", label: "Breakfast" },
            { id: "lunchdinner", label: "Lunch & Dinner" },
          ].map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id as "breakfast" | "lunchdinner")}
                aria-pressed={active}
                className={`rounded-md border px-6 py-2.5 font-[family-name:var(--font-body)] text-sm font-bold uppercase tracking-wider transition-colors ${
                  active
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-gold/40"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Menu Content */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {categories.map((category, i) => (
          <div key={category.name}>
            <div className="mb-8 mt-12 first:mt-0">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-gold sm:text-4xl">
                {category.name}
              </h2>
              <Separator className="mt-3 bg-border" />
              {category.note && (
                <p className="mt-4 font-[family-name:var(--font-body)] text-sm italic text-muted-foreground">
                  {category.note}
                </p>
              )}
            </div>
            <div className="space-y-6">
              {category.items.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-body)] text-base font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-[family-name:var(--font-body)] text-lg font-bold text-gold">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
            {i < categories.length - 1 && (
              <Separator className="mt-12 bg-border/50" />
            )}
          </div>
        ))}
        <p className="mt-12 font-[family-name:var(--font-body)] text-xs italic text-muted-foreground">
          We cook our hamburgers to just done with an internal temperature of 160°F. We will cook to your request to medium rare, which will not ensure safe internal temperatures. Prices do not include tax or gratuity. No checks.
        </p>
      </section>
    </>
  );
}
