    const totalSpaces = 60;
    const parkingLot = document.getElementById('parkingLot');
    const availableSpacesElement = document.getElementById('availableSpaces');
    const occupiedSpacesElement = document.getElementById('occupiedSpaces');
    let autonomousSimulationInterval;

    // start sa parking lot
    for (let i = 1; i <= totalSpaces; i++) {
      const parkingSpace = document.createElement('div');
      parkingSpace.className = 'parking-space empty';
      parkingSpace.innerText = i;

      parkingSpace.addEventListener('click', function() {
        toggleSpaceStatus(parkingSpace);
      });

      parkingLot.appendChild(parkingSpace);
    }

    function toggleSpaceStatus(space) {
      space.classList.toggle('empty');
      space.classList.toggle('occupied');

      updateParkingInfo();
    }

    function updateParkingInfo() {
      const emptySpaces = document.querySelectorAll('.parking-space.empty').length;
      const occupiedSpaces = totalSpaces - emptySpaces;

      availableSpacesElement.textContent = emptySpaces;
      occupiedSpacesElement.textContent = occupiedSpaces;
    }

    function occupyRandomSpaces() {
      const emptySpaces = document.querySelectorAll('.parking-space.empty');

      if (emptySpaces.length > 0) {
        const numberOfCars = Math.floor(Math.random() * (emptySpaces.length + 1));

        for (let i = 0; i < numberOfCars; i++) {
          const randomEmptySpaceIndex = Math.floor(Math.random() * emptySpaces.length);
          toggleSpaceStatus(emptySpaces[randomEmptySpaceIndex]);
        }
      }

      updateParkingInfo();
    }

    function startAutonomousSimulation() {
      // Start of the autonomous simulation loop every 4 seconds
      autonomousSimulationInterval = setInterval(occupyRandomSpaces, 4000);

      // Occupy sa random spaces sa simulation
      occupyRandomSpaces();
    }

    function stopAutonomousSimulation() {
      // Stop sa autonomous simulation loop
      clearInterval(autonomousSimulationInterval);
    }

    // Start sa autonomous simulation inig load sa page
    startAutonomousSimulation();
