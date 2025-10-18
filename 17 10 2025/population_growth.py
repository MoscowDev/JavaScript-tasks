estimatedPopulation = 81420000
initialPopulation = 3000
estimatedIncreaseRate = 100 * (estimatedPopulation - initialPopulation) / initialPopulation

for count in range(1, 76):
    estimatedIncreaseRate += 1
    print("Year", count, "population increase rate is", estimatedIncreaseRate, "%")
