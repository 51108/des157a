(function () {
    'use strict';
    // check that the script is working
    console.log('reading js');

    // get the form and the story section
    const myForm = document.querySelector('form');
    const tale = document.querySelector('section');

    // run this when the form is submitted
    myForm.addEventListener('submit', function (event) {
        // stop the page from reloading
        event.preventDefault();

        // get the words from each input
        const adjective = document.querySelector('#adjective').value;
        const pluralNoun = document.querySelector('#plural-noun').value;
        const food = document.querySelector('#food').value;
        const occupation = document.querySelector('#occupation').value;
        const item = document.querySelector('#object').value;
        const verb = document.querySelector('#verb-ing').value;
        // parseInt turns the number box's text into a real number so we can compare it
        const number = parseInt(document.querySelector('#number').value);
        const place = document.querySelector('#place').value;
        const exclamation = document.querySelector('#exclamation').value;
        const drink = document.querySelector('#drink').value;

        // only tell the tale if the number is greater than one
        // (0 or 1 would make the story say things like "After 1 attempts")
        if (number > 1) {
            // write the story users inputs
            const myText = `
                <h2>Your Tale</h2>
                <p>After a long day on the road, I reached a tavern called The <strong>${adjective}</strong> <strong>${pluralNoun}</strong>. I ordered a bowl of <strong>${food}</strong> and asked the innkeeper for a room. “First,” she said, “are you the <strong>${occupation}</strong> we sent for?” I should have said no. Instead, I asked what the job paid.</p>
                <p>She placed a <strong>${item}</strong> on the counter and pointed toward the cellar. “Take this. You’ll understand when you get down there.” Below the tavern, a knight in full armor was <strong>${verb}</strong>. His helmet had become wedged between two ceiling beams. “I was demonstrating a battle maneuver,” he explained. I used the <strong>${item}</strong> to pry him loose. After <strong>${number}</strong> attempts, he dropped to the floor with a crash that silenced the tavern above.</p>
                <p>“<strong>${exclamation}</strong>!” shouted the innkeeper. “Did you break another barrel?” The knight stood, straightened his armor, and announced that urgent royal business required his presence in <strong>${place}</strong>. He left through the back door. The innkeeper handed me a room key and poured me a mug of <strong>${drink}</strong>. “The king keeps sending him back.”</p>
                <a href="index.html">Tell a New Tale</a>
            `;

            // show the story and hide the form
            tale.innerHTML = myText;
            myForm.className = 'hidden';
            tale.className = 'showing';
        } else {
            // explain the problem in the number's label and send the cursor back to the box
            const numberLabel = document.querySelector('label[for=number]');
            numberLabel.innerHTML = 'Pick a number above one:';
            numberLabel.className = 'error';
            document.querySelector('#number').focus();
        }
    });
})();