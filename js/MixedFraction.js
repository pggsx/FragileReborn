
/*
 * Mixed Fraction Factory Object
 * Author: Pavan Gudimetta
 *
 *
 */
function MixedFraction(numer,denom,whole_num)
{
	this.numer = numer;
	this.denom = denom;
	this.whole_num = whole_num;	
}

function getDenom()
{
	return this.denom;
}
/***
 *
 *
 */
function getNumer()
{
	return this.numer;
}

/*
 *
 *
 */
function setDenom(int new_denom)
{
	this.denom = new_denom;
}

/*
 *
 *
 */
function setNumer(int new_numer)
{
	this.numer = new_numer;
}

/*
 *
 *
 */
function setWholeNum(int new_whole_num)
{
	this.whole_num = new_whole_num;
}


/*
 *
 *
 */
function String toString()
{
	String fract_obj;
	fract_obj = this.whole_num + this.numer + "/" + this.denom;
}
