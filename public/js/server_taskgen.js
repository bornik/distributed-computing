/**
 * User: YCotov
 * Date: 28.09.13
 */

function getTaskTemplate()
{
    return "function getResult(){"
       +" for (var i=3; i < {ind}; i++)"
        +"{"
            +"if ({ind} % i != 0 )"
            +"{"
                +"return false;"
            +"}"
        +"}"
        +"return true;"
    +"}";
}

function getNextTaskInd()
{

}