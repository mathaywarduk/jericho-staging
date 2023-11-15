---
layout: default
---
<div class="container flex flex-wrap gap-4 items-baseline mb-12">
  {% for i in (1..33) %}
  <div>
    {% capture imagePath %}Jericho_00{{ i }}.jpg{% endcapture %}
    {% include image.html url=imagePath alt="" fit="crop" lazy="true" block_classes="w-32" classes="" width="300" %}
    Jericho_00{{ i }}.jpg
  </div>
  {% endfor %}
  {% for i in (1..9) %}
  <div>
    {% capture imagePath %}Jericho-History-00{{ i }}.jpg{% endcapture %}
    {% include image.html url=imagePath alt="" fit="crop" lazy="true" block_classes="w-32" classes="" width="300" %}
    Jericho-History-00{{ i }}.jpg
  </div>
  {% endfor %}
  <div>
    {% include image.html url="Jericho-History-010.jpg" alt="" fit="crop" lazy="true" block_classes="w-32" classes="" width="300" %}
    Jericho-History-010.jpg
  </div>
  {% for i in (1..9) %}
  <div>
    {% capture imagePath %}Jericho-Timmy-0{{ i }}.jpeg{% endcapture %}
    {% include image.html url=imagePath alt="" fit="crop" lazy="true" block_classes="w-32" classes="" width="300" %}
    Jericho-Timmy-0{{ i }}.jpeg
  </div>
  {% endfor %}
  {% for i in (10..26) %}
  <div>
    {% capture imagePath %}Jericho-Timmy-{{ i }}.jpeg{% endcapture %}
    {% include image.html url=imagePath alt="" fit="crop" lazy="true" block_classes="w-32" classes="" width="300" %}
    Jericho-Timmy-{{ i }}.jpeg
  </div>
  {% endfor %}
</div>