// Globals
var utils = null;

// Call when document is loaded
$('document').ready(function() {
    utils = new Utilities();
    $("input[name=patternGroup]:radio").click(utils.radioButtonPatternSelection);
    utils.radioButtonPatternSelection();
    $("input[name=frequencyGroup]:radio").click(utils.radioButtonFrequencySelection);
    utils.radioButtonFrequencySelection();
});

// Utility object
function Utilities()
{
    var pattern = '';
    var frequencyChoice = '';

    this.patterns = {
        pattern00: 0,
        pattern01: 1,
        pattern02: 2,
        pattern03: 3,
        pattern04: 4
    };

    this.getPattern = function()
    {
        return this.patterns[pattern];
    }
    
    this.getFrequencyChoice = function()
    {
        return frequencies[frequencyChoice];
    }

    this.radioButtonPatternSelection = function()
    {
        pattern = $("input[name=patternGroup]:checked").attr('id');
        var updateValue = 'You selected: ' + this.pattern;
        $('#status').html(updateValue);
    }

    this.radioButtonFrequencySelection = function()
    {
        frequencyChoice = $("input[name=frequencyGroup]:checked").attr('id');
        var updateValue = 'You selected: ' + frequencyChoice;
        $('#status').html(updateValue);
    }
}

// PlayExample object
function playExample() {
    var Synth = function(audiolet, frequency) {
        AudioletGroup.call(this, audiolet, 0, 1);
        // Basic wave
        this.saw = new Saw(audiolet, frequency);

        // Gain envelope
        this.gain = new Gain(audiolet);
        this.env = new PercussiveEnvelope(audiolet, 1, 0.1, 0.1,
            function() {
                this.audiolet.scheduler.addRelative(0, this.remove.bind(this));
            }.bind(this)
        );
        this.envMulAdd = new MulAdd(audiolet, 0.3, 0);

        // Main signal path
        this.saw.connect(this.gain);
        this.gain.connect(this.outputs[0]);

        // Envelope
        this.env.connect(this.envMulAdd);
        this.envMulAdd.connect(this.gain, 0, 1);
    };
    extend(Synth, AudioletGroup);

    var SchedulerApp = function() {
        this.audiolet = new Audiolet();

        this.scale = new MajorScale();
        var chordPattern = this.getChord(1);
        // Play the progression
        for (var i = 0; i < 1; i++)
        {
        this.audiolet.scheduler.play([chordPattern], 0.5,
                                     this.playChord.bind(this));
        }
    };

    SchedulerApp.prototype.playChord = function(chord) {
        var selection = utils.getFrequencyChoice();
        for (var i = 0; i < chord.length; i++) {
            var degree = chord[i];
            var frequency = this.scale.getFrequency(degree, selection, 4);
            var synth = new Synth(this.audiolet, frequency);
            synth.connect(this.audiolet.output);
        }
    };

    SchedulerApp.prototype.getChord = function()
    {
        data = [
                // Pattern 0 = I V
                [[0, 2, 4],
                 [4, 6, 8]],

                // Pattern 1 = I IV V V
                [[0, 2, 4],  // C
                 [3, 5, 7],  // F
                 [4, 6, 8],  // G
                 [4, 6, 8]], // G

                // Pattern 2 = repeat
                [[0, 2, 4],
                 [3, 5, 7],
                 [4, 6, 8],
                 [4, 6, 8],
                 [0, 2, 4],
                 [3, 5, 7],
                 [4, 6, 8],
                 [4, 6, 8]],

                // Pattern 3 = I II III III I
                [[0, 2, 4],
                 [1, 3, 5],
                 [2, 4, 6],
                 [2, 4, 6],
                 [0, 2, 4]],
                
                // Pattern 4 = Single chord - I
                [[0, 2, 4]]
               ];

        var index = utils.getPattern();
        var chordPattern = new PSequence(data[index]);
        return chordPattern;
    }
    var app = new SchedulerApp();
};


// This is a second example of how to use the Audiolet
// code. It is a very simple, hello world type example.
// This code is currently not called from PlayMusic.html
// or used by the other code in this program. It is here
// just to give you an example of how to play a tone 
// using audiolet. See the documentation for audiolet
// if you want to see more examples like this.
var AudioletApp = function() {
      this.audiolet = new Audiolet();
      this.sine = new Sine(this.audiolet, 440);

      this.sine.connect(this.audiolet.output);
};
