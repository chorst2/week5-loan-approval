$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
 var myRules =
     {
         salary:
             {
                required: true,
                 digits: true,
             },
         creditScore:
             {
                required:true,
                 number: true,
                 min: 300,
                 max: 850
             },
         months:
             {
                required:true,
                 digits: true,
             }
     };

 var myMessages =
     {
         salary:
             {
                required: "You must enter a salary",
                 digits: "Must be a positive number"
             },
         creditScore:
             {
                required: "You must enter a credit score",
                 number: "Must be a number",
                 min: "Too low of a credit score",
                 max: "Too high of a credit score"
             },
         months:
             {
                required: "You must enter in the number of months",
                 digits: "Must be a positive number"
             }
     };


        //any other functions (calculate trip, roll die, etc.)
        function checkApproval()
        {
            //receive users salary
            var salary = $("#salary").val();

            //turn string into a number
            salary = parseInt(salary);

            //receive users credit score
            var creditScore = $("#creditScore").val();

            //turn string into a number
            creditScore = parseInt(creditScore);

            //receive users months at job
            var months = $("#months").val();

            //turn string into a number
            months = parseInt(months);


            //check to see if salary is greater or = to 40000
            if(salary >= 40000)
            {
                //if it is check to see if credit score is >= 600
                if(creditScore >= 600)
                {
                    //if true output loan approved
                    $("#output").text("Loan Approved");
                }
                //if credit score is < 600 check to see if months is > 12
                else if(months > 12)
                {
                    //if months > 12 output loan approved
                    $("#output").text("Loan Approved");
                }
                //if credit score is < 600 and months is <= 12 then output loan denied
                else
                    $("#output").text("Loan Denied");
            }
            // if salary is < 40000
            else if(salary < 40000)
            {
                //check to see if credit score is >= 600
                if(creditScore >= 600)
                {
                    //if true check to see if months is > 12
                    if(months > 12)
                    {
                        //if true then output loan approved
                        $("#output").text("Loan Approved");
                    }
                    //if months <= 12 then output loan denied
                    else
                    {
                        $("#output").text("Loan Denied");
                    }
                }
                else
                    {
                    //if credit score is < 600 then output loan denied
                    $("#output").text("Loan Denied");
                    }
            }


        }

        $("form").validate({
            submitHandler: checkApproval,
            rules: myRules,
            messages: myMessages
        });

    }
);