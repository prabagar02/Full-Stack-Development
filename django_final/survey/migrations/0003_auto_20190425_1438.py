# Generated by Django 2.2 on 2019-04-25 14:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0002_survey_counter'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Survey',
            new_name='SurveyQuestion',
        ),
    ]
