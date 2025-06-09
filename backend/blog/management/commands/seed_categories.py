# blog/management/commands/seed_categories.py

import json
from django.core.management.base import BaseCommand
from blog.models import Category

class Command(BaseCommand):
    help = "Seeds blog categories"

    def handle(self, *args, **kwargs):
        with open('categories.json', 'r') as f:
            categories = json.load(f)

        for data in categories:
            obj, created = Category.objects.update_or_create(
                slug=data["slug"],
                defaults={
                    "title": data["title"],
                    "metatitle": data["metaTitle"],
                    "context": data["context"],
                }
            )
            status = "Created" if created else "Updated"
            self.stdout.write(f"{status}: {obj.title}")
