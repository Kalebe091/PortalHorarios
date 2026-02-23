const disciplinas = [
    // =====================================================
    // SEGUNDA-FEIRA
    // =====================================================
    { dia: "Segunda", sala: "Sala 01", curso: "Direito", disciplina: "Direito Civil - Parte Geral", professor: "Emanuella França", semestre: "1° Semestre", turma: "4831520261A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 02", curso: "Psicologia", disciplina: "Neuronatomofisiologia", professor: "Nayana Coutinho", semestre: "2º e 3º Semestre", turma: "4433820251A, 4433820252A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 04", curso: "Direito", disciplina: "Proc. Civil - Conhecimento", professor: "Claudio Luan", semestre: "4° Semestre", turma: "4831520242A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 05", curso: "Direito", disciplina: "Direito Penal - Crimes em Espécie", professor: "Luiz Paulo", semestre: "5° Semestre", turma: "4831520241A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 06", curso: "Direito", disciplina: "Direito Penal - Teoria das Penas", professor: "Matheus Rocha", semestre: "3º Semestre", turma: "4831520251A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 09", curso: "Psicologia", disciplina: "Bases Biológicas do Comportamento", professor: "Stéphane Negrão", semestre: "1º e 4º Semestre", turma: "4831520261A, 4433820242A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 07", curso: "Psicologia", disciplina: "Medidas e Avaliação III", professor: "Sandro Ueki", semestre: "6° Semestre", turma: "4433820232A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 10", curso: "Biomedicina", disciplina: "EAD", professor: "Ramilla Rocha", semestre: "1° Semestre", turma: "1° Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 11", curso: "Eng. Civil", disciplina: "Hidráulica e Hidrometria", professor: "Antenor Neto", semestre: "7° Semestre", turma: "494620231A", modalidade: "Híbrido" },
    { dia: "Segunda", sala: "Sala 12", curso: "Direito", disciplina: "Direito Civil - Contratos", professor: "Amauri Cativo", semestre: "3º Semestre", turma: "48315202518", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 16", curso: "Nutrição", disciplina: "EAD", professor: "Mahya Martins", semestre: "6° e 7º Semestre", turma: "6° e 7º Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 17", curso: "Psicologia", disciplina: "Psicologia Social Avançada", professor: "Clauber Torres", semestre: "9° Semestre", turma: "4433820221A, 4433820221B", modalidade: "Híbrido" },
    { dia: "Segunda", sala: "Sala 18", curso: "Direito", disciplina: "Direito Tributário", professor: "Rebeca Biasi", semestre: "7° Semestre", turma: "4831520231A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 19", curso: "Fisioterapia", disciplina: "EAD", professor: "Diosé Lira", semestre: "1º e 8º Semestre", turma: "1º e 8° Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 21", curso: "Agronomia", disciplina: "EAD", professor: "Marcele Moraes", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 23", curso: "Eng. Civil", disciplina: "Cálculo Dif. e Integral II", professor: "Jhosefy", semestre: "2º, 3º e 4º Sem.", turma: "4946202424, 494620251A, 494620252A", modalidade: "Presencial" },
    { dia: "Segunda", sala: "Sala 24", curso: "Biomedicina", disciplina: "EAD", professor: "Ana Paula", semestre: "8° Semestre", turma: "8° Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 25", curso: "Ciências Contábeis", disciplina: "EAD", professor: "Lucivan Medina", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 26", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda / Erick", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 27", curso: "Enfermagem", disciplina: "EAD", professor: "Wenyson", semestre: "8º e 9º Semestre", turma: "8º e 9° Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 29/30", curso: "Administração", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 31/32", curso: "Agronomia", disciplina: "EAD", professor: "Wilkson Sa", semestre: "4° Semestre", turma: "4° Semestre", modalidade: "EAD" },
    { dia: "Segunda", sala: "Sala 33/34", curso: "Fisioterapia", disciplina: "EAD", professor: "Daise Alves", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },

    // =====================================================
    // TERÇA-FEIRA
    // =====================================================
    { dia: "Terça", sala: "Sala 01", curso: "Psicologia", disciplina: "Metodologia da Pesquisa", professor: "Stephane Negrão", semestre: "1° Semestre", turma: "4433820261A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 02", curso: "Psicologia", disciplina: "Métodos Quantitativos", professor: "Nayana Coutinho", semestre: "3° Semestre", turma: "4433820251A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 04", curso: "Direito", disciplina: "Direito Penal - Crimes em Espécie", professor: "Luiz Paulo", semestre: "4° Semestre", turma: "4831520242A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 05", curso: "Engenharia", disciplina: "EAD", professor: "Lucimar Pereira", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 06", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "6° Semestre", turma: "4831520232A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 07", curso: "Psicologia", disciplina: "Psicologia Org. e do Trabalho", professor: "Viviane Luz", semestre: "6º e 7º Semestre", turma: "4433820231A, 4433820232A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 09", curso: "Psicologia", disciplina: "Behaviorismo", professor: "Julia Veloso", semestre: "4° Semestre", turma: "4433820242A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 10", curso: "Direito", disciplina: "Direito Civil - Sucessões", professor: "Maria Clara", semestre: "10° e 8° Semestre", turma: "4831520212A, 4831520222A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 11", curso: "Pedagogia", disciplina: "EAD", professor: "Alberiny Barros", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 12", curso: "Biomedicina", disciplina: "EAD", professor: "Ramilla Rocha", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 16", curso: "Psicologia", disciplina: "Teoria e Técnicas de Grupo", professor: "Danianisse Balieiro", semestre: "5° Semestre", turma: "4433820241A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 17", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda / Erick", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 18", curso: "Eng. Civil", disciplina: "Cálculo Dif. e Integral III", professor: "Elenildo Barros", semestre: "5°, 7º e 9º Sem.", turma: "4946202214, 494620231A, 494620241A", modalidade: "Híbrido" },
    { dia: "Terça", sala: "Sala 18", curso: "Eng. Mecânica", disciplina: "Cálculo Dif. e Integral III", professor: "Elenildo Barros", semestre: "8° Semestre", turma: "496820222A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 19", curso: "Fisioterapia", disciplina: "EAD", professor: "Daise Alves / Diosé Lira", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 21", curso: "Biomedicina", disciplina: "EAD", professor: "Ana Paula", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 23", curso: "Administração", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "7° Semestre", turma: "7° Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 24", curso: "Ciências Contábeis", disciplina: "EAD", professor: "Lucivan Medina", semestre: "6º e 7º Semestre", turma: "6º e 7° Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 25", curso: "Nutrição", disciplina: "EAD", professor: "Mahya Martins", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 26", curso: "Eng. Mecânica", disciplina: "EAD", professor: "Marcelo Cabral", semestre: "8º e 9º Semestre", turma: "8° e 9º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 27", curso: "Agronomia", disciplina: "EAD", professor: "Myrian Galvão", semestre: "10° Semestre", turma: "10° Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 29/30", curso: "Agronomia", disciplina: "EAD", professor: "Marcele Moraes", semestre: "5° Semestre", turma: "5° Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Sala 31/32", curso: "Direito", disciplina: "Direito Penal - Teoria das Penas", professor: "Matheus Rocha", semestre: "3º e 2º Semestre", turma: "48315202518, 4831520252A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Sala 33/34", curso: "Enfermagem", disciplina: "EAD", professor: "Wenyson", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Terça", sala: "Lab Info A", curso: "Eng. Mecânica", disciplina: "Algoritmos e Lógica", professor: "Jhosefy", semestre: "1º e 2º Semestre", turma: "4968202524, 494620261A", modalidade: "Presencial" },
    { dia: "Terça", sala: "Lab Info B", curso: "Eng. Produção", disciplina: "EAD", professor: "Francisco Lomanto", semestre: "7° Semestre", turma: "7° Semestre", modalidade: "EAD" },

    // =====================================================
    // QUARTA-FEIRA
    // =====================================================
    { dia: "Quarta", sala: "Sala 01", curso: "Direito", disciplina: "Teoria Jurídica do Direito Penal", professor: "Higor Souza", semestre: "1° Semestre", turma: "4831520261A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 02", curso: "Psicologia", disciplina: "Desenvolvimento Humano II", professor: "Stéphane Negrão", semestre: "3º Semestre", turma: "4433820251A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 04", curso: "Direito", disciplina: "Direito Civil - Contrato", professor: "Amauri Cativo", semestre: "4º e 3º Semestre", turma: "48315202424, 4831520251A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 05", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Janaina Silva", semestre: "5° Semestre", turma: "4831520241A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 06", curso: "Administração", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 07", curso: "Psicologia", disciplina: "Medidas e Avaliação III", professor: "Sandro Ueki", semestre: "7° Semestre", turma: "4433820231A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 09", curso: "Eng. Mecânica", disciplina: "Controle de Vibrações", professor: "Gabriel Nascimento", semestre: "8° Semestre", turma: "496820222A", modalidade: "Híbrido" },
    { dia: "Quarta", sala: "Sala 10", curso: "Direito", disciplina: "Direito Constitucional", professor: "Beatriz Sharon", semestre: "3º Semestre", turma: "48315202518", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 11", curso: "Nutrição", disciplina: "EAD", professor: "Mahya Martins", semestre: "1° Semestre", turma: "1° Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 12", curso: "Psicologia", disciplina: "Existencial Humanista", professor: "Stella Cezimbra", semestre: "4º e 6º Semestre", turma: "44338202324, 4433820242A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 16", curso: "Eng. Civil", disciplina: "Química e Ciência dos Materiais", professor: "Nayana Coutinho", semestre: "1º e 4º Semestre", turma: "494620242A, 494620261A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 17", curso: "Pedagogia", disciplina: "EAD", professor: "Alberiny Barros", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 18", curso: "Eng. Civil", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2° Semestre", turma: "494620252A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 18", curso: "Eng. Mecânica", disciplina: "Resistência de Materiais", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "4968202414, 496820252A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 19", curso: "Eng. Civil", disciplina: "Topografia e Georreferenciamento", professor: "Gustavo Loureiro", semestre: "3º e 5º Semestre", turma: "4946202414, 494620251A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 21", curso: "Direito", disciplina: "Direito Coletivo do Trabalho", professor: "Iolindemberg Mendes", semestre: "6° Semestre", turma: "4831520232A", modalidade: "Presencial" },
    { dia: "Quarta", sala: "Sala 23", curso: "Eng. Civil", disciplina: "Estruturas de Madeira/Metálicas", professor: "Valerry Garcia", semestre: "9° Semestre", turma: "494620221A", modalidade: "Híbrido" },
    { dia: "Quarta", sala: "Sala 24", curso: "Agronomia", disciplina: "EAD", professor: "Wilkson Sá", semestre: "3º Semestre", turma: "3º Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 25", curso: "Enfermagem", disciplina: "EAD", professor: "Wenyson", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 26", curso: "Ciências Contábeis", disciplina: "EAD", professor: "Lucivan Medina", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 27", curso: "Fisioterapia", disciplina: "EAD", professor: "Daise Alves", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 29/30", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda / Erick", semestre: "1º e 10° Semestre", turma: "1º e 10° Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 31/32", curso: "Agronomia", disciplina: "EAD", professor: "Marcele Moraes", semestre: "5° Semestre", turma: "5° Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Sala 33/34", curso: "Agronomia", disciplina: "EAD", professor: "Myrian Galvão", semestre: "1° Semestre", turma: "1° Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Lab Info A", curso: "Eng. Mecânica", disciplina: "EAD", professor: "Marcelo Cabral", semestre: "10° Semestre", turma: "10° Semestre", modalidade: "EAD" },
    { dia: "Quarta", sala: "Lab Info B", curso: "Eng. Produção", disciplina: "EAD", professor: "Francisco Lomanto", semestre: "4º e 5º Semestre", turma: "4º e 5º Semestre", modalidade: "EAD" },

    // =====================================================
    // QUINTA-FEIRA
    // =====================================================
    { dia: "Quinta", sala: "Sala 01", curso: "Direito", disciplina: "Teoria Geral do Dir. Constitucional", professor: "Beatriz Sharon", semestre: "1° Semestre", turma: "4831520261A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 02", curso: "Psicologia", disciplina: "Psicologia Social Introdutória", professor: "Stéphane Negrão", semestre: "1° Semestre", turma: "4433820261A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 04", curso: "Agronomia", disciplina: "EAD", professor: "Marcele Moraes", semestre: "2º Semestre", turma: "2° Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 05", curso: "Psicologia", disciplina: "Medidas e Avaliação II", professor: "Sandro Ueki", semestre: "5° Semestre", turma: "4433820241A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 06", curso: "Direito", disciplina: "Direito Constitucional", professor: "Emanuella França", semestre: "3º Semestre", turma: "4831520251A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 07", curso: "Direito", disciplina: "Direito Administrativo", professor: "Claudio Luan", semestre: "9° Semestre", turma: "48315202214, 48315202218", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 09", curso: "Psicologia", disciplina: "Processos Psicológicos Básicos", professor: "Stella Cezimbra", semestre: "2° Semestre", turma: "4433820252A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 10", curso: "Psicologia", disciplina: "Terapia Familiar Sistêmica", professor: "Viviane Luz", semestre: "6° Semestre", turma: "4433820232A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 11", curso: "Direito", disciplina: "Teoria Geral do Processo", professor: "Maria Clara", semestre: "2° Semestre", turma: "4831520252A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 12", curso: "Nutrição", disciplina: "EAD", professor: "Mahya Martins", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 16", curso: "Eng. Civil", disciplina: "Cálculo Dif. e Integral I", professor: "Jhosefy", semestre: "1° Semestre", turma: "494620261A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 17", curso: "Psicologia", disciplina: "Psicologia Hospitalar", professor: "Julia Veloso", semestre: "9° Semestre", turma: "4433820221A, 44338202218", modalidade: "Híbrido" },
    { dia: "Quinta", sala: "Sala 18", curso: "Eng. Mecânica", disciplina: "Elementos de Máquinas", professor: "Elenildo Barros", semestre: "2º e 5º Semestre", turma: "4968202414, 496820252A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 19", curso: "Eng. Mecânica", disciplina: "EAD", professor: "Marcelo Cabral", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 21", curso: "Direito", disciplina: "Direito Empresarial", professor: "Rebeca Biasi", semestre: "6° Semestre", turma: "4831520232A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 23", curso: "Eng. Civil", disciplina: "Concreto Armado I", professor: "Valerry Garcia", semestre: "4º, 5º e 6º Sem.", turma: "4946202314, 4946202414, 494620242A", modalidade: "Híbrido" },
    { dia: "Quinta", sala: "Sala 24", curso: "Adm e Contábeis", disciplina: "EAD", professor: "Denise Pinheiro", semestre: "1º e 8º Semestre", turma: "1º e 8º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 25", curso: "Agronomia", disciplina: "EAD", professor: "Wilkson Sá", semestre: "3º Semestre", turma: "3º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 26", curso: "Agronomia", disciplina: "EAD", professor: "Myrian Galvão", semestre: "8° e 9° Semestre", turma: "8° e 9º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 27", curso: "Direito", disciplina: "Direito Administrativo", professor: "Higor Souza", semestre: "10° Semestre", turma: "4831520212A", modalidade: "Presencial" },
    { dia: "Quinta", sala: "Sala 29/30", curso: "Engenharia", disciplina: "EAD", professor: "Lucimar Pereira", semestre: "1° Semestre", turma: "1° Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 31/32", curso: "Enfermagem", disciplina: "EAD", professor: "Wenyson", semestre: "6º e 7° Semestre", turma: "6º e 7º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Sala 33/34", curso: "Biomedicina", disciplina: "EAD", professor: "Ana Paula", semestre: "6º e 7º Semestre", turma: "6º e 7º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Lab Info A", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda / Erick", semestre: "8º e 9º Semestre", turma: "8º e 9º Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Lab Info B", curso: "Fisioterapia", disciplina: "EAD", professor: "Diosé Lira", semestre: "9° Semestre", turma: "9° Semestre", modalidade: "EAD" },
    { dia: "Quinta", sala: "Lab Enferm", curso: "Biomedicina", disciplina: "EAD", professor: "Ramilla / Ana Paula", semestre: "8° Semestre", turma: "8° Semestre", modalidade: "EAD" },

    // =====================================================
    // SEXTA-FEIRA
    // =====================================================
    { dia: "Sexta", sala: "Sala 02", curso: "Psicologia", disciplina: "Análise Exp. do Comportamento", professor: "Clauber Torres", semestre: "1º e 2º Semestre", turma: "44338202524, 4433820261A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 31/32", curso: "Direito", disciplina: "Direito Previdenciário", professor: "Iolindemberg Mendes", semestre: "4° Semestre", turma: "4831520241A, 4831520242A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 05", curso: "Psicologia", disciplina: "Psicanálise", professor: "Danianisse Balieiro", semestre: "4º e 5º Semestre", turma: "44338202414, 4433820242A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 06", curso: "Licenciaturas", disciplina: "EAD", professor: "Carla Girard", semestre: "1° Semestre", turma: "1° Semestre", modalidade: "EAD" },
    { dia: "Sexta", sala: "Sala 07", curso: "Psicologia", disciplina: "Psicopatologia II", professor: "Gisele Maraschin", semestre: "7° Semestre", turma: "4433820231A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 09", curso: "Eng. Elétrica", disciplina: "EAD", professor: "Elika Sousa", semestre: "7° Semestre", turma: "7° Semestre", modalidade: "EAD" },
    { dia: "Sexta", sala: "Sala 10", curso: "Psicologia", disciplina: "Teoria e Técnicas de Grupo", professor: "Viviane Luz", semestre: "6° Semestre", turma: "4433820232A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 11", curso: "Direito", disciplina: "Direito Civil - Parte Geral", professor: "Janaina Silva", semestre: "2° Semestre", turma: "4831520252A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 12", curso: "Farmácia", disciplina: "EAD", professor: "Arley Amanda / Erick", semestre: "2º e 3º Semestre", turma: "2º e 3º Semestre", modalidade: "EAD" },
    { dia: "Sexta", sala: "Sala 16", curso: "Eng. Mecânica", disciplina: "Manufatura Mecânica - Usinagem", professor: "Gabriel Nascimento", semestre: "5º e 8º Semestre", turma: "4968202224, 496820241A", modalidade: "Híbrido" },
    { dia: "Sexta", sala: "Sala 18", curso: "Eng. Civil", disciplina: "Estruturas Hiperestáticas", professor: "Elenildo Barros", semestre: "4º, 5º e 7º Sem.", turma: "4946202314, 4946202414, 494620242A", modalidade: "Híbrido" },
    { dia: "Sexta", sala: "Sala 19", curso: "Eng. Civil", disciplina: "Física Geral - Energia", professor: "Antenor Neto", semestre: "2º e 3º Semestre", turma: "494620251A, 494620252A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 21", curso: "Direito", disciplina: "Direito Processual Penal", professor: "Higor Souza", semestre: "6º e 7° Semestre", turma: "4831520231A, 4831520232A", modalidade: "Presencial" },
    { dia: "Sexta", sala: "Sala 23", curso: "Eng. Civil", disciplina: "Mecânica dos Solos", professor: "Valerry Garcia", semestre: "9° Semestre", turma: "494620221A", modalidade: "Híbrido" },
    { dia: "Sexta", sala: "Sala 33/34", curso: "Direito", disciplina: "Modelo MultiPortas", professor: "Emanuella França", semestre: "3° Semestre", turma: "4831520251A, 48315202518", modalidade: "Presencial" }
];

// =====================================================
// LÓGICA DO SISTEMA (NÃO ALTERAR ABAIXO)
// =====================================================

let diaSelecionado = "Todos";

function carregarTabela(lista) {
    const tbody = document.getElementById("tabela-horarios");
    const contador = document.getElementById("total-registros");
    
    // ORDENAÇÃO AUTOMÁTICA (Dia da Semana -> Sala)
    const mapDias = { "Segunda": 1, "Terça": 2, "Quarta": 3, "Quinta": 4, "Sexta": 5, "Sábado": 6 };

    lista.sort((a, b) => {
        const diaA = mapDias[a.dia] || 99;
        const diaB = mapDias[b.dia] || 99;
        
        if (diaA !== diaB) {
            return diaA - diaB;
        }
        
        // Ordenação inteligente de salas (Texto + Número)
        return a.sala.localeCompare(b.sala, undefined, { numeric: true, sensitivity: 'base' });
    });

    tbody.innerHTML = "";

    if (lista.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 20px; color: #666;">Nenhuma aula encontrada para os filtros selecionados.</td></tr>`;
        contador.innerHTML = `<strong>Total de Registros:</strong> 0`;
        return;
    }

    lista.forEach(item => {
        let classeTag = "presencial";
        if (item.modalidade.toLowerCase().includes("ead")) classeTag = "ead";
        if (item.modalidade.toLowerCase().includes("híbrido") || item.modalidade.toLowerCase().includes("hibrido")) classeTag = "hibrido";

        const professorFormatado = item.professor.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

        const codigos = item.turma.split(',').map(c => c.trim());
        const htmlCodigos = codigos.map(codigo => `<span class="code-badge">${codigo}</span>`).join('');

        const linha = `
            <tr>
                <td style="font-weight: bold; color: #ea5b2d;">${item.dia}</td>
                <td class="course-name" style="font-weight:700;">${item.curso}</td>
                <td><strong>${item.disciplina}</strong></td>
                <td>${professorFormatado}</td>
                <td>
                    <div style="font-size: 0.85rem; font-weight: bold; margin-bottom: 5px;">${item.semestre}</div>
                    <div class="turma-container">
                        ${htmlCodigos}
                    </div>
                </td>
                <td style="color: #444; font-weight: 700;">${item.sala}</td>
                <td><span class="tag ${classeTag}">${item.modalidade}</span></td>
            </tr>
        `;

        tbody.innerHTML += linha;
    });

    contador.innerHTML = `<strong>Total de Registros:</strong> ${lista.length} disciplinas encontradas.`;
}

function filtrarDia(dia) {
    diaSelecionado = dia;
    const botoes = document.querySelectorAll('.filter-btn');
    botoes.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === dia) {
            btn.classList.add('active');
        }
    });
    filtrarTabela();
}

function filtrarTabela() {
    const termo = document.getElementById("searchInput").value.toLowerCase();

    const listaFiltrada = disciplinas.filter(item => {
        const matchDia = diaSelecionado === "Todos" || item.dia === diaSelecionado;
        const matchTexto = item.disciplina.toLowerCase().includes(termo) || 
                           item.professor.toLowerCase().includes(termo) ||
                           item.sala.toLowerCase().includes(termo) ||
                           item.curso.toLowerCase().includes(termo) ||
                           item.semestre.toLowerCase().includes(termo) ||
                           item.dia.toLowerCase().includes(termo);

        return matchDia && matchTexto;
    });

    carregarTabela(listaFiltrada);
}

document.addEventListener("DOMContentLoaded", () => {
    carregarTabela(disciplinas);
});