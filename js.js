const p1 = document.querySelector('.first-step');
const p2 = document.querySelector('.second-step');
const p3 = document.querySelector('.final-step');
const z = document.getElementById('z');

function go(currentStep,nextStep)

{
    let dNone, dBlock;
    if(currentStep == 1)
    {
        dNone = firstDiv;
    }
    else if(currentStep == 2)
    {
        dNone = secondDiv;
    }
    else
    {
        dNone = finalDiv;
    }
    
    dNone.style.display = 'none';

    if(nextStep == 1)
    {
        dBlock = firstDiv;
    }
    else if(nextStep == 2)
    {
        dBlock = secondDiv;
    }
    else
    {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}
{
    const peso   = document.getElementById('a');
    const altura = document.getElementById('b');
    a.style.border   = 'none';
    b.style.border = 'none';
    Math.hypot(a, b)
    Math.hypot = Math.hypot || function() {
        var y = 0;
        var length = arguments.length;
      
        for (var i = 0; i < length; i++) {
          if (arguments[i] === Infinity || arguments[i] === -Infinity) {
            return Infinity;
          }
          y += arguments[i] * arguments[i];
        }
        return Math.sqrt(y);
      };
}