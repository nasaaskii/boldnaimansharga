# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class currency( models.Model ):
    name = models.CharField(verbose_name=u'Нэр', max_length=200)
    pic = models.ImageField(upload_to='currency/', verbose_name=u'Зураг', blank=True)
    sortname = models.CharField(verbose_name=u'Богино нэр', max_length=200)
    
    class Meta:
		verbose_name_plural = u'Валютууд'
		verbose_name = u'Валютууд'
    def __unicode__(self):
		return self.name

class rate( models.Model ):

	class Meta:
		verbose_name_plural = u'Ханш'
		verbose_name = u'Ханш'
	def __unicode__(self):
		return self.currency.name

	currency = models.ForeignKey(currency, verbose_name=u'Валют')
	rates_buy = models.CharField(verbose_name=u'Ханш авах', max_length=200, default=0)
	rates_sell = models.CharField(verbose_name=u'Ханш зарах', max_length=200, default=0)
