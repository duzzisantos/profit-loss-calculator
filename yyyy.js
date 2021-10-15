function fullStatement() {
    var re = document.getElementById("reveNuee").value;
    var pu = document.getElementById("purChasese").value;
    var gp = re - pu;
    document.getElementById("grossProfite").value = gp;

    var admin = document.getElementById("adMine").value;
    var rand = document.getElementById("ranDe").value;
    var main = document.getElementById("mainTaine").value;
    var iT = document.getElementById("infoTeche").value;
    var salary= document.getElementById("salWagese").value;
    var energy = document.getElementById("enErgye").value;
    var miscel = document.getElementById("misCelle").value;
    var operations = admin + rand + main + iT + salary+ energy + miscel;
    var incomes = gp - operations;
    document.getElementById("oIncomee").value = incomes;

    var inT = document.getElementById("inTereste").value;
    var exc = document.getElementById("exchLosse").value;
    var dep = document.getElementById("depreCiatione").value;
    var div = document.getElementById("diviDende").value;
    var ebt = document.getElementById("ebTe").value;
    var tax = document.getElementById("totalTaxe").value;
    var ot = inT + exc + dep + div + ebt + tax;
    document.getElementById("netProfite").value = ot;
    var npr = gp - op - ot;
    document.getElementById("netProfite").value = npr; 
}
