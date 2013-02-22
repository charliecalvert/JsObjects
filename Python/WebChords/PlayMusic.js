
// Key choice is 'c0', 'd0', 'e0', 'f0', 'g0', 'a0' or 'b0'
function playExample(keyChoice, pattern) 
{
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
	    var selection = frequencies[keyChoice];
	    //var frequency = 18.35;
	    $('#debug').html(frequency);
        for (var i = 0; i < chord.length; i++) {
            var degree = chord[i];
            var frequency = this.scale.getFrequency(degree, selection, 4);
            var synth = new Synth(this.audiolet, frequency);
            synth.connect(this.audiolet.output);
        }
    };

	SchedulerApp.prototype.getKeyFrequency = function(key) 
	{
		return frequencies[key];s
	}
	
    SchedulerApp.prototype.getChord = function()
    {
        data = [
        		[[0, 2, 4],
                [3, 5, 7],
                [4, 6, 8]],
                
                // I IV V V
                [[0, 2, 4],
                [3, 5, 7],
                [4, 6, 8],
                [4, 6, 8]],

                // II IV V
                [[1, 3, 5],        
                [3, 5, 7],
                [4, 6, 8]],
                
                // I IV I V
                [[0, 2, 4],
                [3, 5, 7],
                [0, 2, 4],
                [4, 6, 8]],

				// I IV V IV
                [[0, 2, 4],
                [3, 5, 7],
                [4, 6, 8],
                [3, 5, 7]],
                
                [[0, 2, 4],                
                [3, 5, 7],
                [4, 6, 8],
                [4, 6, 8],
                [0, 2, 4],
                [3, 5, 7],
                [4, 6, 8],
                [4, 6, 8]],
                
                [[0, 2, 4],
                [1, 3, 5],
                [2, 4, 6],
                [2, 4, 6]]
               ];
        // I IV V progression
        var chordPattern = new PSequence(data[pattern]);
        return chordPattern;
    }
    var app = new SchedulerApp();
};


var AudioletApp = function() {
      this.audiolet = new Audiolet();
      this.sine = new Sine(this.audiolet, 440);

      this.sine.connect(this.audiolet.output);
};
