Adminify
===

A little bookmarklet to make it easier to switch between viewing the front and back end of a Shopify site.

Add the following snippet to the top of your `theme.liquid`

```html
<meta id="AdminifyShopifyUrl" name="shopify_url" content="{{ shop.permanent_domain }}"/>
<meta id="AdminifyShopifyEdit" name="{% if template contains '.' %}{{ template | split: '.' | first }}{% else %}{{ template }}{% endif %}" content="{% if template contains 'product' %}{{ product.id }}{% elsif template contains 'page' %}{{ page.id }}{% else %}{{ collection.id }}{% endif %}"/>
```

Any questions or edges cases not working for you? Let me know.
