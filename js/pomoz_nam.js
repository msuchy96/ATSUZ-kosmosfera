function copyBankAccountNumber() {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = "14 1500 2370 6646 0067 7707 3553";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert('Skopiowano numer konta');
  }