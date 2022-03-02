
  function runFiveMiles() {
    console.log('Go for a five-mile run');
  }
  function liftWeights() {
    console.log('Pump iron');
  }
  
  function swimFortyLaps() {
    console.log('Swim 40 laps');
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }


  function Monday() {
    exerciseRoutine(liftWeights);
  }
  function Tuesday() {
    exerciseRoutine(swimFortyLaps);
  }
  function Wednesday() {
        exerciseRoutine(runFiveMiles);
  }
  function Thursday() {
    exerciseRoutine(liftWeights);
  }
  function Friday() {
    exerciseRoutine(swimFortyLaps);
  }

//   exerciseRoutine(() => console.log('Stretch! Work that core!'));

  function morningRoutine(exercise) {
    let breakfast = null;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }
  
    exerciseRoutine(exercise);
  
    return function() {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    }
  }

let afterExercise = morningRoutine(liftWeights);

afterExercise();