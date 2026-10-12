function switchMonth(evt, monthId) {
        var i, monthcontent, monthlinks;
        monthcontent = document.getElementsByClassName("month-content");
        for (i = 0; i < monthcontent.length; i++) {
            monthcontent[i].classList.remove("active");
        }
        monthlinks = document.getElementsByClassName("month-btn");
        for (i = 0; i < monthlinks.length; i++) {
            monthlinks[i].classList.remove("active");
        }
        var targetMonth = document.getElementById(monthId);
        targetMonth.classList.add("active");
        evt.currentTarget.classList.add("active");

        // Automatically activate first week of that month
        var firstWeekBtn = targetMonth.querySelector(".week-btn");
        if (firstWeekBtn) {
            firstWeekBtn.click();
        }
    }

    function switchWeek(evt, weekId, wrapperId) {
        var i, weekcontent, weeklinks;
        var wrapper = document.getElementById(wrapperId);
        weekcontent = wrapper.getElementsByClassName("week-view");
        for (i = 0; i < weekcontent.length; i++) {
            weekcontent[i].classList.remove("active");
        }
        weeklinks = wrapper.getElementsByClassName("week-btn");
        for (i = 0; i < weeklinks.length; i++) {
            weeklinks[i].classList.remove("active");
        }
        document.getElementById(weekId).classList.add("active");
        evt.currentTarget.classList.add("active");
    }

    function checkAnswer(name, correctAnswer, feedbackId, explanation) {
        var selected = document.querySelector('input[name="' + name + '"]:checked');
        var feedback = document.getElementById(feedbackId);
        
        if (!selected) {
            feedback.innerHTML = "Harap pilih salah satu jawaban terlebih dahulu!";
            feedback.className = "feedback incorrect";
            return;
        }

        if (selected.value === correctAnswer) {
            feedback.innerHTML = "✔ " + explanation;
            feedback.className = "feedback correct";
        } else {
            feedback.innerHTML = "✘ Jawaban Anda kurang tepat. Pelajari kembali materi pendukung pada sesi Rabu/Kamis.";
            feedback.className = "feedback incorrect";
        }
    }
