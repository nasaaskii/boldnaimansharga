from django.shortcuts import render
from models import *
from django.http import JsonResponse

# Create your views here.
def currencyFunc( request ):
    currencys = []
    for cur in currency.objects.all():
        rateNumber = rate.objects.filter( currency_id=cur.id ).order_by('-id')
        if rateNumber and rateNumber[0]:
            currencys.append({ 'name':cur.name, 'sortname':cur.sortname, 'rate_buy':rateNumber[0].rates_buy, 'rate_sell':rateNumber[0].rates_sell, 'img':cur.pic.url })

    return JsonResponse({ 'currencys':currencys })

def addcurrency( request, currencyId, rateNumberBuy, rateNumberSell ):
    rate.objects.create( currency_id=int(currencyId), rates_buy=float(rateNumberBuy), rates_sell=float(rateNumberSell) )
    return JsonResponse({'status':True})

def getcurrency( request ):
    currencys = []
    for cur in currency.objects.all():
        currencys.append({ 'name':cur.name, 'id':cur.id })
    return JsonResponse({ 'currencys':currencys })
