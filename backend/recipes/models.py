from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Ingredient(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Recipe(models.Model):
    complexity_choices = {
        'L': 'Low',
        'M': 'Moderate',
        'H': 'High',
    }

    title = models.CharField(max_length=50)
    description = models.TextField()
    complexity = models.CharField(max_length=20, choices=complexity_choices)
    ingredients = models.ManyToManyField(Ingredient, through='RecipeIngredient')
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class RecipeIngredient(models.Model):
    unit_choices = {
        'tsp': 'teaspoon',
        'tbsp': 'tablespoon',
        'cup': 'cup',
        'g': 'gram',
    }

    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.DecimalField()
    unit = models.CharField(max_length=25, choices=unit_choices)
    
    class Meta:
        unique_together = [['recipe', 'ingredient', 'amount', 'unit']]

    def __str__(self):
        return f'{self.amount} {self.unit} of {self.ingredient.name}'
    

class Step(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    step_number = models.PositiveIntegerField()
    text = models.TextField()

    class Meta:
        ordering = ['step_number']
        unique_together = [['recipe', 'step_number']]

    def __str__(self):
        return f'Step {self.step_number} - {self.text}'