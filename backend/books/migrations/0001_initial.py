# Generated by Django 5.0.6 on 2024-09-30 15:45

import django.db.models.deletion
import django_countries.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(blank=True, max_length=255, null=True)),
                ('alt_name', models.CharField(blank=True, max_length=255, null=True)),
                ('country', django_countries.fields.CountryField(max_length=2)),
                ('description', models.TextField(blank=True, default='', null=True)),
                ('slug', models.SlugField(blank=True, default='')),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('publish_year', models.SmallIntegerField(blank=True, null=True)),
                ('literary_type', models.CharField(max_length=255)),
                ('literary_genre', models.CharField(blank=True, max_length=255)),
                ('slug', models.SlugField(allow_unicode=True, blank=True, default='')),
                ('author', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='books.author')),
            ],
        ),
    ]
