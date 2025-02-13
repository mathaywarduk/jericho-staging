---
layout: default
---

<div class="container mt-[200px] md:mt-24">
  <h1 class="xl:max-w-7/12">The latest news from our team.</h1>
</div>


{% for post in site.posts limit:1 %}
  {% assign hero = post.hero %}
  <section class="z-10 py-8
      lg:py-16 lg:container lg:grid lg:grid-cols-12 lg:gap-4
      xl:pb-8">
    <div class="lg:col-span-7 lg:row-span-full xl:col-span-6
      lg:col-start-6 lg:self-end xl:col-start-7 xl:-ml-12 xl:pr-12">
      {% include image.html url=hero.image.url alt=hero.image.alt fit="crop" lazy="false" width="820" height="547" block_classes="flex justify-center" classes="hero-image" ar="4:3" lgar="4:3" %}
    </div>
    <div class="container -mt-9 md:-mt-16 relative z-30
        lg:mt-0 lg:no-container lg:col-span-7 lg:row-span-full lg:self-end
        xl:col-span-8 lg:col-start-1 lg:col-end-8 xl:col-end-9">
      <timedate class="font-type lg:text-md mb-2">{{ post.date | date: "%B %Y" }}</timedate>
      <h2 class="xl:max-w-7/12"><a href="{{ post.url }}" class="link-2">{{ hero.text | widont }}</a></h2>
    </div>
  </section>
{% endfor %}

<section class="my-4">
  <ul>
    {% for post in site.posts offset:1 %}
      {% assign hero = post.hero %}
      <li>
        <section class="z-10 py-4 lg:py-16 smmd:container smmd:grid smmd:grid-cols-12 smmd:gap-4
            xl:pb-8">
          <div class="max-w-96 ml-auto smmd:col-span-7 smmd:row-span-full xl:col-span-6
            smmd:col-start-6 smmd:self-end xl:col-start-7 xl:-ml-12 xl:pr-12">
            {% include image.html url=hero.image.url alt=hero.image.alt fit="crop" lazy="false" width="820" height="547" block_classes="flex justify-center" classes="hero-image" ar="4:3" lgar="4:3" %}
          </div>
          <div class="container -mt-9 relative z-30 
              smmd:mt-0 smmd:no-container smmd:col-span-7 smmd:row-span-full smmd:self-end
              xl:col-span-8 smmd:col-start-1 smmd:col-end-8 xl:col-end-9">
            <timedate class="font-type lg:text-md mb-2">{{ post.date | date: "%B %Y" }}</timedate>
            <h2 class="h3 xl:max-w-7/12"><a href="{{ post.url }}" class="link-2">{{ hero.text | widont }}</a></h2>
          </div>
        </section>
      </li>
    {% endfor %}
  </ul>
</section>