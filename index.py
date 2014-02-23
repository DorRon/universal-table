#!/usr/bin/env python
import web

urls = ("/(.*)", "Index")

app = web.application(urls, globals())
web.config.debug = True


class Index:

  def __init__(self):
    self.render = web.template.render('templates/') #folder templates are saved in

  def GET(self, title):
    return self.render.roundtable("Website created by Dor Rondel and Shaheen Bharwani for MITx Blueprint 2014") #Text added into HTML code

  def POST(self, name):
    return "post"

if __name__ == '__main__':
  app.run()
