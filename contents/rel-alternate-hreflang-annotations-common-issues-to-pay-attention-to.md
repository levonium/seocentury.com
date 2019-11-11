# Rel-Alternate-Hreflang Annotations: Common Issues To Pay Attention To

Published on May 3, 2015

Depending on your business, products/services, you may want to serve different content to people from different countries, talking different languages. If you have multilingual and multinational websites, i.e. websites in different languages and on different domains/subdomains/folders, that’s the thing you should consider. The easiest way to provide the search engines information about your content targets is using [hreflang annotations](https://support.google.com/webmasters/answer/189077?hl=en) (for Google and Yandex, for Bing – scroll down).

`<link rel="alternate" hreflang="x" href="example.com" />`

Using *rel=”alternate” hreflang=”x”* annotations is very useful, however you need to set up them properly. Here are some common issues with hreflang annotations that I have noticed.

1. WRONG LANGUAGE/COUNTRY CODES
-------------------------------

`<link rel="alternate" hreflang="<span style="color: #ff0000;">en-UK</span>" href="example.com" />`

Google and Yandex both recommend using the language code in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format and if you need to specify the country code, use the [ISO 3166-1 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.

The most common issue with these codes is using “**en-UK**” for website’s English language version for UK. If you check the ISO 3166-1 Alpha 2 codes, you will find that it should be GB (Great Britain) and not UK (United Kingdom), so the corect language-country code for this is “**en-GB**“.

*It is easy to avoid such issues just by double checking the language and region codes in Wikipedia.*

2. **UNNECESSARY REGIONAL CODES**
---------------------------------

`<link rel="alternate" hreflang="es-<span style="color: #ff0000;">ES</span>" href="example.com" />`

Not every website is multinational. Your website may have content in different languages which doesn’t necessarily mean that you need to specify country codes. For example, your web page is in Spanish and does not target any specific country, but you may see the hreflang value as “es\_ES” which means your targeting is Spain. This is a wrong configuration and in most cases it happens as a result of using plugins (like translation or maybe SEO).

*To avoid this situation, first you need to clarify your site’s targets. Just ask yourself if your website is for a specific country or for a list of countries. Then go ahead and add country codes (in ISO 3166-1 Alpha 2 format). But if your answer is no and your content is same in different languages for anyone and anywhere, only use the language codes. Make sure to double check the codes in your web pages source code to avoid automatically generated wrong hreflang values.*

3. One page = One Country
-------------------------

There are cases when people target a single page for several countries. You can see this kind of hreflang annotations:

`<link rel="alternate" hreflang="en-GB" href="example.com/en" /><br></br><link rel="alternate" hreflang="en-NZ" href="example.com/en" /><br></br><link rel="alternate" hreflang="en-RU" href="example.com/en" /><br></br>... and so on ...<br></br><link rel="alternate" hreflang="en-US" href="example.com/en" /><br></br>`

This is not correct. If you want to target your website for every region (i.e. not for a specific country) in a specific language, just specify the language only: hreflang=”en”

If you want to target each country separately for each language, you need to create a separate page for each of them and use the corresponding language-country codes. For example:

`<link rel="alternate" hreflang="en-GB" href="example.com/en-gb" /><br></br><link rel="alternate" hreflang="en-US" href="example.com/en-us" /><br></br><link rel="alternate" hreflang="en-RU" href="example.com/en-ru" /><br></br>`

However, there should be a reason for making it so. You may want to have a separate page for each country if you, for example, have a local phone number or an address, or if the content differs slightly from region to region.

*If you made this to affect your sites organic visibility in separate countries, you better don’t. Because it will not help and you will end up having a bunch of errors in your webmaster tools international targeting report.*

4. Missing out the page itself
------------------------------

In many cases I notice that a lot of websites do not include the page itself in hreflang annotations.

For example, if you have a website (example.com) in 3 languages (en, es, jp), your JP page needs to have the hreflang=”jp” tag in addition to hreflang=”en” and hreflang=”es” tags.

3 languages = 3 <span style="background-color: #99cc00;">rel=”alternate hreflang=”x”</span> tags on each page: you should always include the language tag to the page itself and the code snippet on your site should look like the below codes for every page:

`<link rel="alternate" hreflang="en" href="example.com/en" /><br></br><link rel="alternate" hreflang="es" href="example.com/es" /><br></br><link rel="alternate" hreflang="jp" href="example.com/jp" /><br></br>`

5. Hreflang Annotations & Canonical – Targeting wrong pages
-----------------------------------------------------------

Your hreflang=”x” tags should include the URL versions that are the canonical ones. For example:

webpage URL: example.com/en/
`<link rel="alternate" hreflang="en" href="example.com/en" /><br></br><link rel="canonical" href="example.com/en/index.php" /><br></br>`

The correct option is to keep it consistent: a single URL structure and canonical and hreflang tags matching to it.

webpage URL: example.com/en/
`<link rel="alternate" hreflang="en" href="example.com/en/" /><br></br><link rel="canonical" href="example.com/en/" /><br></br>`

6. Missing Return Tags
----------------------

As Google states:

> <span class="s1">If page A links to page B, page B must link back to page A. If this is not the case for all pages that use hreflang annotations, those annotations may be ignored or not interpreted correctly.</span>

If you have a <span style="background-color: #99cc00;">hreflang=”jp” href=”example.jp”</span> on your example.es page, then your example.jp page must have the <span style="background-color: #99cc00;">hreflang=”es” href=”example.es”</span> tag as well.

*You can check your webmaster tools international targeting report for such errors and correct them to avoind your link=”alternate” hreflang=”x” tags being ignored.*

These are the most common issues I have noticed and hope it will help you better organize your hreflang annotations and avoid errors.

*Bing does not support the hreflang annotations. Instead, it uses [language meta tags](https://blogs.bing.com/webmaster/2011/03/01/how-to-tell-bing-your-websites-country-and-language/), for example:*

`<meta http-equiv=”content-language” content="en-GB">`

If you experience any other issues regarding hreflangs feel free to let me know in the comments and I’ll be glad to analyze and help you.

<style>
code { display: block; margin: 1em 0; background: #99cc00; padding: .25em .5em; border-radius: 4px; }<br />
</style>
