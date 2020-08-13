import scrapy


class GamesSpider(scrapy.Spider):
    name = 'games'
    allowed_domains = ['gamevaluenow.com']
    start_urls = ['https://gamevaluenow.com/super-nintendo/']

    def parse(self, response):
        pass
