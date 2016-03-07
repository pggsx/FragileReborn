
/*
 * Mixed Fraction Factory Object
 * Author: Pavan Gudimetta
 *
 *
 */

/*
 * MixedFraction Constructor
 *
 */
function MixedFraction(numer,denom,whole_num)
{
	this.numer = numer;
	this.denom = denom;
	this.whole_num = whole_num;	
}



/*
 * setDenom
 * params: new_denom
 * setter method that sets the denominator of MixedFraction Object
 */
function setDenom(int new_denom)
{
	this.denom = new_denom;
}

/*
 * setNumer
 * param: new_numer
 * setter method that sets the numerator of MixedFraction Object
 */
function setNumer(int new_numer)
{
	this.numer = new_numer;
}

/*
 * setWholeNum
 * param: new_whole_num
 * setter methods that sets the whole number of MixedFraction Object
 */
function setWholeNum(int new_whole_num)
{
	this.whole_num = new_whole_num;
}


/***
 *
 * getter method that returns the numerator
 */
function getDenom()
{
	return this.denom;
}
/***
 *
 * getter method that returns the numerator
 */
function getNumer()
{
	return this.numer;
}


/***
 *
 * getter method that returns the whole number
 */
function getWholeNum()
{
	return this.whole_num;
}
/*
 * ToString Function 
 * Returns String Representation of Mixed Fraction Object;
 */
function String toString()
{
	String fract_obj;
	fract_obj = this.whole_num + this.numer + "/" + this.denom;
	return fract_obj;
}
