from django.shortcuts import render
from plotly.offline import plot
import plotly.graph_objects as go
import pymongo
from django.conf import settings
from home.forms import ExampleForm
from django import forms
from home.models import Offer
# Create your views here.


def home(requests):
    def scatter():
        connect_string = 'mongodb+srv://caasichak:04062612@reportingdata.eiweoru.mongodb.net/?retryWrites=true&w=majority'
        my_client = pymongo.MongoClient(connect_string)
        dbname = my_client['SignalsSismos']  #nombre de la base que esto queda igual
        collection_name = dbname["Signals"] #nombre de la colleccion que aqui iria cda canal
        #count = collection_name.count()
        #print(dbname)
        #print(collection_name)
        # Read the documents
        data_details = collection_name.find({}) #consulta a la base
        print(data_details)
        # Print on the terminal
        for r in data_details:
            print(r["IntegralBanda1"])
        #hasta aqui es lo de la base
        x1=[1,2,3,4]
        y1=[30,35,25,45]
        print(x1)
        print(forms.DateField)
        print(Offer.expiration_date)
        trace = go.Scatter(
            x=x1,
            y=y1
        )
        layout = dict(
            title = 'SimpleGraph',
            xaxis = dict(range=[min(x1), max(x1)]),
            yaxis = dict(range=[min(y1), max(y1)])
        )
        fig = go.Figure(data=[trace], layout=layout)
        plot_div = plot(fig, output_type='div', include_plotlyjs=False)
        return plot_div

    context = {
        'plot': scatter()
    }
    return render(requests, 'home/welcome.html', context)