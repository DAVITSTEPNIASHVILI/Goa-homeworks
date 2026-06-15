from django.http import HttpResponse
# Create your views here.
def all(request):
    return HttpResponse("""
    <div>
        <h2>All Our Stores</h2>
        <hr>
        <div>
            <h1>ALTA is one of the largest electronics and home appliance retail chains in Georgia. Founded in 1997, it sells smartphones, laptops, computers, TVs, gaming consoles, household appliances, and accessories from major brands such as Apple, Samsung, LG, Sony, and others. The company operates multiple stores across Georgia, including several locations in Tbilisi, and also offers online shopping through its website. ALTA is widely recognized as a reliable retailer and is often mentioned alongside other major electronics stores in Georgia. Customers can purchase products in-store or online, compare different brands and models, and take advantage of promotions, installment plans, and warranty services.</h1>
            <a href="/alta/">ALTAs tech</a></div>
        <hr>
        <div>
            <h1>Zoommer is one of the most popular and leading digital tech and electronics retail chains in Georgia. Known for its vibrant branding and competitive pricing, Zoommer focuses heavily on smartphones, laptops, gaming gadgets, smart home devices, and audio accessories. Since its founding, the company has expanded rapidly, opening numerous branches across Tbilisi and other major regions, alongside a highly active online store. Zoommer is particularly famous for its attractive promotions, "Zoommer prices," flexible installment options, and a strong presence among younger, tech-savvy consumers looking for the latest gadgets.</h1>
            <a href="/zoomer/">ZOOMERs tech</a>
        </div>
        <hr>
        <div>
            <h1>Ultra (Ultra Computer) is a well-established and specialized computer and electronics store in Georgia, recognized for its deep focus on PC hardware, laptops, and IT infrastructure. Operating both physical stores in Tbilisi and a comprehensive e-commerce platform, Ultra caters to everyday consumers, hardcore gamers, and corporate business clients. The retailer offers a wide range of products including custom PC components, office equipment, networking devices, and laptops from top brands like Asus, Lenovo, Dell, and Gigabyte. It is widely valued for its technical expertise, official warranties, and reliable customer service.</h1>
            <a href="/ultra/">ULTRAs tech</a>
        </div>
        <hr>
        <div>
            <h1>AtHome is a modern retail tech store in Georgia that specializes in premium laptops, high-end gaming gear, and official Apple products. Unlike massive hypermarkets, AtHome positions itself as a curated tech space where customers can find top-tier configurations, exclusive gaming peripherals, and professional work stations. With its physical location and growing online platform, the store offers personalized customer consultation, official brand warranties, and flexible financing or installment plans. It is a go-to destination for tech enthusiasts, creators, and gamers seeking specialized, high-performance devices.</h1>
            <a href="/atHome/">ATHOMEs tech</a>
        </div>
    </div>""")