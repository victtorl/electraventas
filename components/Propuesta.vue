<template>
    <div class="flex justify-center w-full font-manrope  text-elecktranegro text-md" id="#agendarcita" >
      <div class="px-auto px-6 lg:px-16 py-4 w-full 3xl:w-maxdesk 3xl:px-0 bg-elecktraamarillo flex justify-between ">
        <ul  class=" grid grid-cols-2 sm:grid-cols-2 text-sm sm:text-base lg:flex gap-y-4 font-semibold gap-x-6  w-full   lg:justify-between relative" >
            <li class="flex  items-center gap-x-4 w-44  sm:w-full lg:w-full  justify-start lg:justify-center " >   
                <!-- <img src="~/assets/icons/propuesta-shield.svg" class="w-6 h-6" alt="shield" srcset=""> -->
                <div v-motion-pop-visible > 
                <svg  width="40" height="40" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="96" height="96" fill="url(#pattern0_3_2)"/>
                <defs>
                <pattern id="pattern0_3_2" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_3_2" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_3_2" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGA0lEQVR4nO2daahVVRTHf+pLK7Myzcih4VnYDBlNYB/KIIsKbUIboCKikYwGSSyCCBogaDAjKSiClLIPTbzKojKTKIosI218KpUNWlmZ9mzHhn3g8nr33rXP2eectc89P1hf3vOtu9d/73PX2dMSampqampqampqampqymUn4AbgA2ALsAl4A5gFDPLwMxi4GHgH+AH4A1gGXA3skGP7o2ZfYBVgmtgSoXjDgBda+FkJjCkgnqgYBnzaQjRpJ9jfPSfw87H7zBrHlQLREnsNOID/cyDwuoefKwbw0bG86iGcte3A28B8Z8vcz3x89JQdtCZWe4oXwuxn1jh+KqEDNiQf3unsnuLrI4T1AbuWHbwGLi1B/MTsXIFOH/3rSuyAXmA3OpQ9geUlip+YfYMaTUUZD0wFpgAT3HfuYcBc4EcF4jcm5DnAIa6NE1ybTwLGESF2orRUgbAmkNnJ30Qi4Xi3+GUqZpuBY1GOTWjrFYhlcrJ12l9dr1UgksnZ7LqVWnoUCGRytpdQzIcKBDI5m90sUstbCgQyTWxrID92h04tcxUIbQawxW6/4NsAvux8QS0j3R6sNvG7XPv2z9gJ38ewdDG1pNVN00b8hP1SdsJ2NzOOgvlKxc/SCQ8QEZMUi9/YCd94+LQ5JCo2BhByfU7iJ5wo9PkzEfJdgFE8DHjK42+e8RDfnkP62mMJIipGANsyiP80MMT56nKdEXLkd7vNGJ85xHAi4sJA4iPshDzFT2wmEY3+LzOI39XEb7NOKEJ8a2uAXVDOHp6n00yDLRII2b8TihK/cWPGTjZVcmaGvYCtHq95SScULX5iNsbTUYY9Uv5vxsB6nVASukoSPzEb62yUcFzApYdej04oS/zEbMxHo4AnAge2NtAGuM97flp7HAXksQfcm/FJyHPk929n6WzKKbi1KZ+EIkZ+Yr+ggDU5j7BuhSM/MRt76dyXc5BrhU9CkSM/sXtRgA3815wD7W3zJBQ98o376t0HJcwIuOltPDuhDPFtrNNRxlHAK+7iQ1Gd0F2w+H3u7NNklC/GTQMezbgkbdp0QlHib3OxTHOxRcWROc4TegsQf72LIWoOd2UHTGT2dxXE13RKwnjaQ1SIKQoENZ5m21wZRisQ1Hhape6NjVUgqPE02+bKMEOBoMbTbJsrwwIFghpPe4QKsVKBoMbTPqFCfKFAUONpX1EhWpUQM0rtZSrE+QoENZ52ERXiGgWCGk87g4owyu2dSpLebOAU4FTgJvezrELaYoA3Aqc539cLCwTailpD6ZB1oCVN6oLa+p/zUu4x2L+51fkYyO97Ah+246LmUOCfNkH+5W6rtOL2FB1wm+BAWbvTfL8DexMxkoO6dwhrC/ls7thiITsL/D4p8PUYkXK28ObJcIGvh1M8ATaHtGMv4DfBEcRjiIwdhUdEZgl8TU6ZAzYLiy3dIvD1rmft6tKZJwhquSCowS54k+HOQTuGCg+XXUAkjBMUbJKeLL4sg/iJSS5XTxfuD6u/IYPwVuNCgZ+RgerKrRYW6u4J9MJQerkyyUWN7e4a6xJ3Vzdt4rVvWZ+lTMiD3Zp/j0fl3i2u3oRKbEDvZ7h7Ncoz8drTaQe52hSShGwrOCZYET9K2dZnUcolAZZ/x7qOXCH493c3fPZij4R8hLv5nqWtzZ7a0hgR4Ga8Ad4ELhfOHxoT4ng3ytv93VnCr6x2tsrjjloh3BMgKONM8s5/3gBtuDmQb6ldhRImulNkpiBb2uJ9PsToltrGfnmrNF4sMOitwMEt2iJJyCHtQUrm5IIDvkvQJklCDmV97uxrdMxMEew64UxUmpD7m12e7hiGpCjoca6Hf0lCbjRbbrPjuC5A4iVQQq7M/q8Pw4UTonaJN2tC/rzJtmVHcGegxJslIdsV145lTJvbM9LEmzYhb3CbRx3NQs8Zry9zWvi3pZY7nklNyt34Jl7fhPynlpmsBp4PlHh9EvL9Af1HzwkBE68kIffF9J/yFMWKQIlXkpBtdcaafpwTMPG2S8jRnfMpanliQc6fMdSdVa1pwqAClInqgFVNDZXmP37RpHa4UindAAAAAElFTkSuQmCC"/>
                </defs>
                </svg>
                </div>
                <h4>Calidad garantizada</h4>
            </li>
            <li class="flex items-center gap-x-4 w-44  sm:w-full lg:w-full  justify-start lg:justify-center " >
                <div v-motion-pop-visible > 
                <svg width="35" height="35" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="96" height="96" fill="url(#pattern0_1_13)"/>
                <defs>
                <pattern id="pattern0_1_13" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_1_13" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_1_13" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR4nO2cPWgUQRiGHzUaxSgIQlCxUIONKVREQY0oVvYaImJtYWUpFhfEv8I+Gu1EiFiLpX/4FwRRQUGwiCAYgxrMBXMRHZk4i+GSkLu9vZ3Z3feBD0K4XPaed3Zmdnb2QAghhBBCCCGEEEKI8FgBHAWuAYPAF2DSlf35OdAP9LjXioRYA/QB44CpscZdUB1KIT7LgLNAuQ7x1WXPjktAq4Kojw7gdQPiq+sx0K4QamMrMJyg/Kg+Ap0KYf6WP9wE+VEN6UyYm6XAyybKj+qJxoTZOZuC/KguqiuaOdUspxhABdikEP7Tl6L8qOxFmwBW1nmRlVTZM65NCTC1vGA8VbcCYGrJwFcAVxUAUwtrvgJ4qgBgxGMA9qKv8FQ8BjBRePv8m5MrAI+MqAvyy6AGYb/0ewzgiufPHgQ9HgM44vvDh0AbMOZBvpYiPF8N6yq46k7YZMrz/w3TD0AwtXshrQDOS/hMFgMPUpBvd0hom8octLvdC82Sr5vyNdDZpBCs/C3qempjNXA/4W5HG7PqpNXtXmhksa7iBtwlavnx2eiWK+rZNTHm5vmaaiZ8xdzt1m+euZspFVfD7nd9bnlheZL/WAghhBBCCCGEEEKIvLMK2AUcB84Bt4B7wAvgg9vSOOFWP78BX4F3wEP32svACeAAsNb3h8nCI6pdwBngbpP2i34G7rinMQ8V/fGkRcA+4ALwaFpLTrN+uWeG7Q2bncACcs5C4CBw3X29jAmsPrn7CV15C2OdO+2HApBsaqz3wGn3/HIjnHLj0xtgBymzDbiZ8o43k3BNuFubcb53qLfqvUbdpKLp2IMdAP4EINAkVN+B9Q3ITyWEVjddzHKLN7PUD2BPAvKbGsJ24G0Asoxn+YdrfN9EQ+j29FUDJjD5lhbX/dYaQsMD88mc9fWmAflxQrCzo9gcA34HIMsE0O20xAzBLp/EYjPwMwBZJpABdyBmCPY6IRZp7OM3GZFvYoZg/z4WuwOQZRIuu+90fwPyo7o9Swh23etG1etKZPS5XhNgyzd1ngmxW37EqwCkmUDlzxeCHbAbZjQAcSagbsfU0R0lgm9xJgPymxqCyUG3szcF+VEl0u3kJYBySi0/kdlO3gIo50F+VgMo50U+Acg0RZZPAEJNkeUTgFRTZPkEINYUWT4ByDVFlp83eiXfH5LvEcmX/OJiNOBmM4CS5+PODUbysxVAyfPx5g4j+dkIoOT5OHOLkfywAyileTR/AdNs7iMIvTqQAAAAAElFTkSuQmCC"/>
                </defs>
                </svg>
                </div>
                <h4>Atención Personalizada</h4>
            </li>

            <li class="flex items-center gap-x-4 w-44  sm:w-full lg:w-full  justify-start lg:justify-center " >
                <div v-motion-pop-visible > 
                <svg width="40" height="40" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="96" height="96" fill="url(#pattern0_1_12)"/>
                <defs>
                <pattern id="pattern0_1_12" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_1_12" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_1_12" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nO2cO44UQRBEHw4OCx7GCDgBnIHPekjAQfjaCM6AQHyEgcURFhYs4BAgsRxjWYQDKFGPSljQPcNsdWZVxpNSGqdHMREV1dXSqEEIIYQQQgghhBBCCCGEEEIIIUTPWOfzDfgEPATOERBLNL+Ap8BRAmEJ512kECzpPCEIlnR+AmcJgCWeBwTAEs9HAmCJ5ysJsQ7mB7AH3AGO0BjW2TyjMazDOU9DWIfznoawTucCjeBtlGVvgbdRlr0FFmzWYQF8r90Cb0MscAADj2u3wNsQCx5A9RZ4G2LBA6jeAm9DrIEAqrbA2xBrIICqLfA2xBoJoFoLvA2xRgKo1gJvQ6yhAGZ5LliXTAHM8lywLtkCWERrQbYAwrUgYwCLSC3IGECoFmQNYBGlBVkDCNOCzAEsJlrwoUcDrbFRACgA91VoaoC/EaYtCHczdA8g3+gmjAJwX4WmBvgbYdqCcDdD9wDyjW7CKAD3VWhqgL8Rpi0IdzO6vQfsABeBY2UuAa8C/HgLoL96AHdHvvteAHPNWX/VAIaVM0XkJuzMoL9qAENtp9gOYLQ56q8awNYK3388gNHmqH9jDjb8ASdGrt8/DIGd6+fLiIDhtLBJhfekf5q3IwYON6gpXo9cvztDAK3r5+bEHjcc1f7F/Ylrr0v/NGfK+9ZsYiVtlz11q3weWzlW3sFzeoYAWte/5MWGJ4G/zfO5xHegn1PldV+HJX6//K1P+tfg8gpVXvVttldnNL8X/UtuFwGbiL/lJb4D/Uuu/ed2tA9c8Rbfgf4lJ4FH5SSwyqp5OfOe37v+PwzHsBvAG+Bzeew/KJ93yzl/tqNaQv1CCCGEEEIIIYQQgrj8BntvSM3nlndKAAAAAElFTkSuQmCC"/>
                </defs>
                </svg>
                </div>
                <h4>Envíos a Nivel Nacional</h4>
            </li>
            <li class="flex items-center gap-x-4 w-44  sm:w-full lg:w-full  justify-start lg:justify-center " >
                <div v-motion-pop-visible > 
                <svg width="40" height="40" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="96" height="96" fill="url(#pattern0_1_14)"/>
                <defs>
                <pattern id="pattern0_1_14" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_1_14" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_1_14" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEGElEQVR4nO2cO2gVQRSGfyVGdGJARbFR8FVoCgsbMRCNIqKNpgtYiYUvEG8sFK18EIzNjUaixNLGxlgo2qhRMoqd4BNBTaEICipGE/GBKwsTCJed2Xu5u7N7zp4ftsmdyTn7/fPevRcQiUQikUgkEolEIpFIJBKJaEgBGAIQ5OgqjFQO4RfGAJVT+IUwQOUYPnsDVM7hszZAEYDP1gBFBD5LAxQh+OwMUMTgszJAEYTPxgBFFD4LAxRh+OQNUMThkzZAMYBP1gDFBD5JAxQj+OQMaAIwnDGw3wCuFtEAlYOWH8LfbvI5VSQD0mz5jwAcAtAOYAmAFgBbAfQAeF8Bv6Mir9NFMCAt+G8AbI6J3QBgL4BPEfBDHeZuQFrwbwBoriGPxpTgB0WEP2hadj1KCn5QNPgPAcyoM7eDCedUmNXOGIDFCeS3n7MBaa52jlYRfyGAEoADAOZbykwD8IGjAWnCHwcwNyb+HlNuos5b0xuj1M/NgLR3uLdj4ndZ6oX7gSjt4mSAj+OFsiP+SgB/LfXaLHU2cTHA19nOcUcOPZY678x4H6VtHAzwebBWduRxzVJnh6POPuoG+D7VvOnI5UpE+Usx+Q9SNiBp+B8B7ATww1Fm1DGcHKso+zXmmGImgG9UDUga/jiA1eZ/r4sxYa0lpy0RZYcM6CiVEu6dpIed3RUxXCZ0W/JqNkfN1ZgQbs6+UDQgjeMFDWBKRKxWM+RUln/lyM+W27BpOKGmmrkkoGZAWhNuqyNmm6UnLLOUP+KIM9ETzqRwDyEXkvCfxMRdAeBzDUvL9VU8vEkD/kTvIrfU7HbEnQNgpMb9wCzHbjigCD98gnQvxRvodMS+6Kg34Kg3wgV+qPMp30SHJe5sAL8c9cKx3qbHXOC3eOjOnZbY7Y46fwAsdeT9kgP8UGc9tKSTjsnXVueEI+eGmE0cGfihnnsw4IEj/uWI8n1mHW/TGi7wQ333YEAAYJWjNXeZjdp1x0OVyRrgAt+nAXcsO+FatRzAzxTy02Z5610+hqDAXBvqzDXsLfe5tPwJ9XqCX06gB/Rzavk+l6HlOuFPTWm1lmnLn6w+z/A3mue+06vIbQGAW5zhp30UUYqAP2Y+e22e186LyGmR2QuMcofv4zCuFAF/8vUPwAsAd81xcpJvspGA78OECxb4Pq9cw8/TV4sCjqudIpugKcHnZoKmCJ+LCZoyfOomaA7wqZqgOcGnZoLmCJ+KCZoz/LyboIsAP68m6CLBz5sJuojw82KCLjL8rE3QAj87E7TAz64naIGf3XCkBX52c4IW+NlNzFrgZ2eCFvjZmaAFfnYmaIGfnJpqNGGIwtsL1NRo3sBzvQYZfnbO8quHogTfRe0F8Mx8yyW8npq/hb8FJBKJRCKRSCQSiUSgrP+ttYE0YglgmwAAAABJRU5ErkJggg=="/>
                </defs>
                </svg>
                </div>
                <h4>Precios competitivos</h4>
            </li>

            <div class="w-auto px-4 font-bold bg-elecktraamarillo absolute -top-12 lg:-top-14 rounded-t-lg text-center py-2" >
                ¿Porqué comprar en TEC?
            </div>

        </ul>

      </div>
    </div>
</template>